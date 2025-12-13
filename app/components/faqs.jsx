"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How Do You Define a Qualified Inquiry?",
    answer: (
      <>
        We define them as:
        <ul className="list-disc ml-5 mt-2 ">
          <li>Direct: No OTAs, just guests contacting you.</li>
          <li>High-Intent: Real people looking to book now or soon.</li>
          <li>Predictable: We aim for consistency — not just random spikes.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How Is Your Meta Ad Strategy Different?",
    answer: (
      <>
        We don’t boost posts or guess. Our approach:
        <ul className="list-disc ml-5 mt-2 ">
          <li>Use advanced targeting and creative strategy</li>
          <li>Focus on conversions, not just traffic</li>
          <li>Track every enquiry via CRM — so nothing falls through</li>
        </ul>
      </>
    ),
  },
  {
    question: "How Do I Convert These Enquiries?",
    answer: (
      <>
        We provide:
        <ul className="list-disc ml-5 mt-2 ">
          <li>A smart CRM to manage all Enquiries.</li>
          <li>Messaging scripts and timing playbooks</li>
          <li>Guidance on when to follow up and how to respond effectively</li>
        </ul>
      </>
    ),
  },
  {
    question: "What Assets Do You Need From Me?",
    answer: (
      <>
        We’ll request:
        <ul className="list-disc ml-5 mt-2 ">
          <li>Your best images + details via cloud upload</li>
          <li>If needed, we’ll guide you to improve quality before launch</li>
          <li>Great visuals = better ads = better bookings</li>
        </ul>
      </>
    ),
  },
  {
    question: "Why would I need this if I already get tons of messages?",
    answer: (
      <>
        Because:
        <ul className="list-disc ml-5 mt-2 ">
          <li>Our inquiries are qualified, not random DMs</li>
          <li>You’ll spend less time filtering and more time converting</li>
          <li>Plus, our system runs with predictability and visibility</li>
        </ul>
      </>
    ),
  },
];

const FAQS = () => {
  const [openTab, setOpenTab] = useState(0);
  const handleClick = (idx) => setOpenTab(openTab === idx ? 0 : idx);
  const handleRotate = (idx) => (openTab === idx ? "rotate-180" : "");

  return (
    <div className="bg-black">
      <div id="faqs" className="w-11/12 lg:w-8/12 mx-auto py-5 lg:py-10 ">
        <div className="text-center">
          <h2 className=" text-4xl sm:text-5xl font-black text-center mb-4">
            FAQ&apos;s
          </h2>
          <p className="text-gray-600 mb-8 lg:mb-10 text-sm lg:text-base">
            Here are some common questions from our valued customers. If you
            have more, feel free to contact us.
          </p>
        </div>

        <ul className="flex flex-col">
          {faqs.map((item, idx) => (
            <li key={idx} className="text-white my-2 shadow-lg">
              <h2
                onClick={() => handleClick(idx + 1)}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span className="lg:text-xl hover:text-sec-text">{item.question}</span>
                <svg
                  className={`fill-current text-sec-text h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                    idx + 1
                  )}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                className="border-l-4 border-sec-text overflow-hidden duration-500 transition-all"
                style={{ maxHeight: openTab === idx + 1 ? "400px" : "0" }}
              >
                <div className="p-3 text-gray-500 text-sm lg:text-base">
                  {item.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 mt-5 text-sm font-semibold">
          Didn&apos;t find the answer you were looking for?{" "}
          <a
            href="mailto:zealmedia07@gmail.com"
            className="text-white font-semibold underline"
          >
            Contact us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQS;
