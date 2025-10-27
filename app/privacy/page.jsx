import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col w-11/12 lg:w-9/12 mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-800 mb-4">Last updated: December 31, 2024</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Types of Information We May Collect From You
      </h2>
      <p className="text-gray-800 mb-4">
        We may collect, store and use the following kinds of personal information about individuals
        who visit and use our website and social media sites:
      </p>
      <p className="text-gray-800 mb-4">
        <span className="font-semibold">Information you supply to us.</span> You may supply us with
        information about you by filling in forms on our website or social media. This includes
        information you provide when you submit a contact/enquiry form. The information you give us
        may include, but not limited to, your name, address, e-mail address and phone number.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        How We May Use the Information We Collect
      </h2>
      <p className="text-gray-800 mb-4">We use the information in the following ways:</p>
      <p className="text-gray-800 mb-2">
        <span className="font-semibold">Information you supply to us.</span> We will use this
        information:
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li>to provide you with information and/or services that you request from us;</li>
        <li>to contact you to provide the information requested.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Disclosure of Your Information
      </h2>
      <p className="text-gray-800 mb-4">
        Any information you provide to us will either be emailed directly to us or may be stored on
        a secure server.
      </p>
      <p className="text-gray-800 mb-4">
        We do not rent, sell or share personal information about you with other people or
        non-affiliated companies.
      </p>
      <p className="text-gray-800 mb-4">
        We will use all reasonable efforts to ensure that your personal data is not disclosed to
        regional/national institutions and authorities, unless required by law or other regulations.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Security of Information
      </h2>
      <p className="text-gray-800 mb-4">
        Unfortunately, the transmission of information via the internet is not completely secure.
        Although we will do our best to protect your personal data, we cannot guarantee the security
        of your data transmitted to our site; any transmission is at your own risk. Once we have
        received your information, we will use strict procedures and security features to try to
        prevent unauthorised access.
      </p>
    </div>
  );
}
