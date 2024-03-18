import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const DraggablePanel = ({ children }) => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [panelHeight, setPanelHeight] = useState('30vh'); // Initial height of the panel
    const [{ y }, setY] = useSpring(() => ({ y: 0 }));

    // Update the panel height based on drag movement
    const bind = useDrag(({ movement: [, my], down, velocity }) => {
        const vh = window.innerHeight;
        if (down && Math.abs(my) > vh * 0.1) {
            setPanelHeight(`${Math.abs(my)}px`);
        }
        setY({
            y: down ? my : 0,
            immediate: down,
            config: { velocity, clamp: true },
        });
    });

    // Adjust layout or disable draggable panel for non-mobile views
    window.addEventListener('resize', () => {
        setIsMobileView(window.innerWidth < 768);
    });

    if (!isMobileView) {
        return <>{children}</>; // Render children without draggable panel for desktop
    }

    return (
        <animated.div
            {...bind()}
            style={{
                y,
                touchAction: 'none',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: panelHeight,
                background: 'white',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
                zIndex: 100,
            }}
        >
            <div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'grab' }}>
                <span style={{ width: '40px', height: '8px', borderRadius: '4px', backgroundColor: '#aaa' }}></span>
            </div>
            <div style={{ overflowY: 'auto', height: 'calc(100% - 40px)' }}>
                {children}
            </div>
        </animated.div>
    );
};

export default DraggablePanel;
