"use client";
import React from "react";
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyrTnXZUD1H0Zpx7aOzTpGua8ZiIugKTULe_qvYhwqthHKRCTrxodxbvoCofAdL7S_F/exec";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.result === "success") {
        //   } else {
        //     alert("There was an error submitting your form. Please try again.");
        //     console.error("Error:", data.error);
        //   }
      })
      .catch((error) => {
        alert("Thanks for submitting! We'll be reaching out shortly.");
        window.location.reload();
      });
  }

  return (
    <div className=" bg-gray-50  shadow-xl">
      <div
        id="contact"
        className=" w-11/12 sm:w-9/12 mx-auto  py-16 flex items-center justify-center "
      >
        <div className=" text-gray-800 rounded-3xl  w-full overflow-hidden">
          <div>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Contact Us
            </h2>
            <div className="my-4 mx-auto w-12 h-2 border-4  border-sec-text"></div>
            <div className="text-center text-gray-700 font-light">
              Lets see some of our amazing customers are saying ...
            </div>
          </div>
          <div className="grid  sm:grid-cols-2 mt-10">
            <div className="w-full  px-5 md:px-10">
              {/* <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div> */}
              <form method="post" onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-3">
                    <label for="" className="text-xs font-semibold px-1">
                      Name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-6 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        required={true}
                        name="Name"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-3">
                    <label for="" className="text-xs font-semibold px-1">
                      Phone (optional)
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-6 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder=""
                        name="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-3">
                    <label for="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-6 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        required={true}
                        name="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label for="" className="text-xs font-semibold px-1">
                      Message
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <textarea
                        type="text-area"
                        className="w-full max-h-24 -ml-10 pl-6 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Hi, Zeal Stay 👋"
                        name="Message"
                      />
                    </div>
                    <span className="text-xs ml-1 text-indigo-500">
                      We never share or sell your personal information.
                    </span>
                  </div>
                </div>

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-3">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white px-3 py-3 font-semibold rounded-lg">
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden rounded-lg md:block  bg-[url('/contact.png')] bg-contain	bg-center bg-no-repeat h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
