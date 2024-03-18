const About = () => {
  return (
    <div className=" bg-gradient-to-b from-orange-500 to-white py-3 px-3 sm:px-5">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-700">
          <b>KUMBHNAVIGATE</b>
        </h2>

        <div className="h-1 w-64 rounded bg-slate-700  justify-center mx-auto" />
        <p className="mt-4 text-gray-600 text-center">
          <b>Seamlessly navigate the Mahakumbh Mela</b>
        </p>

        <div className="md:flex md:justify-between md:items-start my-10">
          <img
            src="https://media.gettyimages.com/id/523580992/photo/kumbh-mela-hindu-festival.jpg?s=612x612&w=0&k=20&c=8h3LRpeqNeyzOqiDtzuaIV240M_tIX0EdB56MfaAo08="
            className="rounded-lg w-full md:w-1/2 h-auto shadow-lg"
            alt="Kumbh Mela"
          />
          <div className="mt-4 md:mt-0 md:ml-4 md:w-1/2">
            <p className="text-gray-600 text-justify ">
              In the heart of Prayagraj, the mere mention of "Kumbh" evokes a
              wistful vista of the Triveni Sangam, where the sacred union of the
              Ganga, Yamuna, and the mystical Saraswati orchestrates a divine
              spectacle. Here, amidst the bustling confluence, humanity
              converges in a symphony of devout fervor akin to waves in an ocean
              of faith. The grandeur of "Shahi Snaan" by the revered Akharas,
              the resounding chants of Vedic hymns echoing from saintly
              pavilions, and the profound teachings of ancient scriptures exuded
              by enlightened rishis enchant the soul. The celestial melodies,
              harmonious resonance of myriad instruments, and the sanctified
              plunge into the sacred waters of Sangam evoke unparalleled
              ecstasy, infusing devotees' hearts with boundless joy. As pilgrims
              embark on their spiritual odyssey, Unique among all, Prayag's
              Kumbh distinguishes itself through centuries-old traditions of
              Kalpvas, its sacred status as the earth's epicenter, and the
              celestial Yajna performed by Lord Brahma. Prayagraj, revered as
              the epitome of pilgrimage, beckons seekers with promises of
              transcendent virtue and divine blessings, rendering each ritual
              and tapas imbued with the essence of divine grace. In this sacred
              haven, where time seems to stand still, every ritual, every dip,
              every prayer reverberates with the echoes of ancient wisdom and
              celestial blessings. Amidst the tapestry of devotion and
              spirituality, Prayagraj Kumbh unfolds as a celestial symphony.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
            <p className="mt-2 text-gray-600">
              Tailor personalized Mela journeys. Enhance with real-time updates,
              multilingual support, and cutting-edge technology for maximum
              attendee engagement and satisfaction
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
            <p className="mt-2 text-gray-600">
              At our Mahakumbh hackathon, our project pledges to cater to every
              attendee's navigation needs, ensuring inclusivity and seamless
              exploration. We prioritize accessibility and enriching
              experiences, crafting a journey filled with delight and ease
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Values</h3>
            <p className="mt-2 text-gray-600">
              With KumbhNavigate we are trying cater the need of every
              attendee's navigation needs, ensuring inclusivity and seamless
              exploration. We prioritize accessibility and enriching
              experiences, crafting a journey filled with delight and ease
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Team
          </h3>
          <p className="mt-2 text-gray-600">
            KumbNavigate Team Members
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Repeat this block for each team member */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="src/assets/Profile-PNG-File.png"
                  alt="Team Member"
                />
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  Shubham Danecha
                </h4>
                <p className="text-gray-600">Team Lead</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="src/assets/Profile-PNG-File.png"
                  alt="Team Member"
                />
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  Dev Sathwara{" "}
                </h4>
                <p className="text-gray-600">VL , Backend Developer</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="src/assets/Profile-PNG-File.png"
                  alt="Team Member"
                />
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  Chirag Gauswami
                </h4>
                <p className="text-gray-600">Full stack</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="src/assets/Profile-PNG-File.png"
                  alt="Team Member"
                />
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  Kashish Dalal
                </h4>
                <p className="text-gray-600">Designer</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="src/assets/Profile-PNG-File.png"
                  alt="Team Member"
                />
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  Parth Patel
                </h4>
                <p className="text-gray-600">Asst. FrontEnd Developer</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="src/assets/Profile-PNG-File.png"
                  alt="Team Member"
                />
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  Yash Tiwari
                </h4>
                <p className="text-gray-600">
                  Documentation Lead , Asst. Backend Developer
                </p>
              </div>
            </div>

            {/* End of team member block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
