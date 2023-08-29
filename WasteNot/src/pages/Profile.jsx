import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <main className="grid grid-rows-6 border-2 border-gray-300 w-[50%] h-[70%] rounded-3xl bg-gray-200 relative drop-shadow-xl">
          <div className="header row-start-1 row-span-1 bg-green-950 w-full mb-6 rounded-t-3xl  border-2 border-green-950">
            <div className="mt-5 ml-40 text-4xl text-white">User's Name</div>
          </div>

          <div className="profile-picture absolute top-5 left-5 h-32 w-32 rounded-full bg-gray-500"></div>

          <form className="profile-data-outer row-start-2.5 row-span-5 p-7 mt-3">
            <div className="profile-data grid gap-4 my-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-lg text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="${userFirstName}"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="${userLastName}"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="${userEmail}"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end w-full mt-24">
              <button
                type="button"
                className="text-gray-900 hover:text-gray-500 font-medium mr-4"
                onClick={() => {
                  navigate("/ingredients");
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="black bg-green-950 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white dark:hover:bg-green-800 dark:focus:ring-green-800"
                onClick={() => {
                  alert("Profile Updated Successfully");
                }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
        <button className="absolute left-5 bottom-5 text-red-500 hover:text-red-600 font-medium">
          {" "}
          Delete Account{" "}
        </button>
      </div>
    </>
  );
}
