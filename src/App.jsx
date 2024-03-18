import { MdEmergencyShare } from "react-icons/md";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';



// INTERNAL IMPORT
import { useEffect } from "react";
import Admin from "./AdminFile/Admin";
import Description from "./Description/Description";
import ErrorManagements from "./ErrorManagements/ErrorManagements";
import Navbar from "./section/NavBar/Narbar";
import About from "./section/about/About";
import Contact from "./section/contact/Contact";
import Footer from "./section/footer/Footer";
import Home from "./section/home/Home";
import Login from "./section/login/Login";
import MapSeaction from "./section/place/Map_seaction";
import PlaceRoute from "./section/placeRoute/PlaceRoute";

const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      autoDisplay: false,
    },
    "google_translate_element"
  );
};

const App = () => {
  useEffect(() => {
    const removeElements = () => {
      const wantedElement = document.querySelector(".goog-te-combo");
      const parentDiv = document.querySelector("#google_translate_element");
      if (wantedElement) {
        parentDiv.innerHTML = "";
        parentDiv.appendChild(wantedElement);
      } else {
        console.log("Element not found");
      }
    };

    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = () => {
      googleTranslateElementInit();
      removeElements(); // Call the function to remove unnecessary elements
    };

    // Clean up function to remove the added script when the component unmounts
    return () => {
      document.body.removeChild(addScript);
      delete window.googleTranslateElementInit;
    };
  }, []);
  return (
    <div className="  justify-between   h-screen flex flex-col ">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Navigate" element={<MapSeaction />} />
          <Route path="/PlaceRoute" element={<PlaceRoute />} />


          <Route path="/Admin" element={<Admin />} />



          <Route path="/Login" element={<Login />} />
          <Route path="/Description" element={<Description />} />
          <Route path="*" element={<ErrorManagements />} />
        </Routes>



        <Footer />

      </BrowserRouter>

      <a href="tel:+902817176">
        <button
          type="submit"
          className="absolute right-10 translate-x-1/2 rounded-full border-spacing-1 border-2 
          bottom-20 border-indigo-600 p-2 mt-1 bg-white font-medium shadow-md transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-100"
        >
          <MdEmergencyShare />
        </button>
      </a>
    </div>
  );
};

export default App;
