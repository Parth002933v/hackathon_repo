import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-12 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Contact Corner</h1>
        <div className="h-1 w-44 rounded bg-slate-700  justify-center mx-auto" />

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Emergency feature cards */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="mt-4 font-semibold text-lg text-gray-800">
                Contact Management
              </h4>
              <p className="text-gray-600">
                Get in touch with event organizers for assistance.
              </p>
              <button className="bg-orange-400 rounded-md px-11 py-2 ">
                click
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="mt-4 font-semibold text-lg text-gray-800">
                Critical Care
              </h4>
              <p className="text-gray-600">
                Access emergency medical services and facilities.
              </p>
              <button className="bg-orange-400 rounded-md px-11 py-2 ">
                click
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="mt-4 font-semibold text-lg text-gray-800">
                Emergency Contacts
              </h4>
              <p className="text-gray-600">
                Find important contact numbers for various emergencies.
              </p>
              <button className="bg-orange-400 rounded-md px-11 py-2 ">
                click
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="mt-4 font-semibold text-lg text-gray-800">
                Emergency Shelters
              </h4>
              <p className="text-gray-600">
                Locate safe havens in case of unforeseen circumstances.
              </p>
              <button className="bg-orange-400 rounded-md px-11 py-2 ">
                click
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="mt-4 font-semibold text-lg text-gray-800">
                Emergency Evacuation
              </h4>
              <p className="text-gray-600">
                Plan for emergency evacuation routes and procedures.
              </p>
              <button className="bg-orange-400 rounded-md px-11 py-2 ">
                click
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="mt-4 font-semibold text-lg text-gray-800">
                Emergency Assistance
              </h4>
              <p className="text-gray-600">
                Receive immediate help and support during emergencies.
              </p>
              <button className="bg-orange-400 rounded-md px-11 py-2 ">
                click
              </button>
            </div>
          </div>
          {/* End of emergency feature cards */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
