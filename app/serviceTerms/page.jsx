import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col w-11/12 lg:w-9/12 mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
        Service Terms and Conditions
      </h1>

      <p className="text-lg  mb-4">Last updated: December 31, 2024</p>
      <p className="  mb-4">
        Zeal Stay (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
        committed to provide quality services and continuous development. This
        page outlines the Service Terms and Conditions when you use our
        services.
      </p>
      <h2 className="text-2xl font-semibold  mt-6 mb-2">Definitions</h2>

      <p className="text-gray-800 mb-2">
        <span className="font-semibold">Customer/Host</span> refers to the individual or entity that has purchased and
        is utilizing Zeal Stay services.
      </p>
      <p className="text-gray-800 mb-4">
      <span className="font-semibold">Guest</span> refers to the end-user or client of the Host who utilizes the
        services provided by the Host through our platform.
      </p>

      <h2 className="text-2xl font-semibold   mb-2">
      Premise      </h2>
      <p className="text-gray-800 mb-4">
      By entering into this Contract, you, as our customer, agree that subscribing to and using our technology services signifies your acceptance of and adherence to Service Terms and Conditions <Link href={'/privacy'} className="underline text-blue-500">Privacy Policies </Link> . You also confirm that you are fully informed, through the material provided by Zeal Stay, about the services we offer and find them suitable for your requirements.
      </p>

      <h2 className="text-2xl font-semibold  mt-6 mb-2">Scope of Services</h2>
      <h2 className="text-xl font-semibold   mb-2">
        Terms of Direct Booking Web Application.
      </h2>
      <p className="text-gray-800 mb-4">
        Zeal Stay provides a platform for customers to manage and
        facilitate direct bookings through a dedicated web application. While we
        ensure the delivery of a functional and efficient platform, we disclaim
        all responsibility for the authenticity, accuracy, or reliability of the
        content and images displayed on the web application.
      </p>
      <p className="text-gray-800 mb-4">
        The veracity of the data, including but not limited to textual and
        visual content, is solely the responsibility of the customer. Marvel
        Softwares shall not be held accountable for any inaccuracies,
        misrepresentations, or false information provided for display on the web
        application. It is incumbent upon the customer to ensure that all
        content adheres to applicable laws and accurately represents their
        offerings.
      </p>
      <p className="text-gray-800 mb-4">
        Zeal Stay does not process any payments for direct bookings. All
        payment processing is handled exclusively by the payment gateway service
        chosen by the customer. Zeal Stay bears no responsibility for
        payment failures, delays, or any downtime of the payment gateway.
        Customers are advised to address such issues directly with their
        selected payment gateway provider.
      </p>
      <p className="text-gray-800 mb-4">
        The web application ensures the avoidance of duplicate or incorrect
        bookings up until the guest clicks the &quot;Confirm and Pay&quot;
        button on the Booking Summary Page. However, in scenarios where another
        booking is made for the same accommodation and dates during the payment
        processing by Host Payment Gateway, resulting in two transactions for
        the same booking, both the host and the guest will be notified. In such
        cases, Zeal Stay holds no responsibility for issuing refunds. It
        is the host&apos;s responsibility to communicate with the guest and
        initiate a refund in accordance with the host&apos;s refund policies.
      </p>
      <p className="text-gray-800 mb-4">
        Zeal Stay does not authenticate or verify the identity of guests
        using the web application. It is solely the responsibility of the host
        to ensure the authenticity and legal identity of the arriving guest.
        Zeal Stay holds no responsibility for any damages caused to the
        host&apos;s property by the guest.
      </p>

      <h2 className="text-2xl font-semibold  mt-6 mb-2">Free Services</h2>
      <p className="text-gray-800 mb-4">
        If our service is provided under a free model, its use is entirely at
        your own risk. The free model does not entitle you to any warranties,
        protections, or assistance from Zeal Stay. In such cases, Marvel
        Softwares will not be held liable for any compensation under any
        circumstances.
      </p>

      <h2 className="text-2xl font-semibold   mb-2">
        Terms of Channel Manager.
      </h2>
      <p className="text-gray-800 mb-4">
        Zeal Stay collaborates with Wudoo to provide channel manager
        services. By using the channel manager service, you agree to adhere to
        and accept Wudoo&apos;s{" "}
        <Link
          href={"/legal/partners/serviceTerms-1.3.pdf"}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href={"/legal/partners/woodoo-1.5.pdf"}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policies
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold  mt-6 mb-2">
        Rights of Zeal Stay
      </h2>
      <p className="text-gray-800 mb-4">
        We strive to maintain uninterrupted access to our services, except
        during necessary maintenance or in situations beyond our control. Any
        suspension of service will be limited to brief durations for essential
        technical interventions, routine maintenance, or system upgrades. We
        prioritize transparency, enabling you to monitor and verify the quality
        of our services and resources within their defined technical parameters.
        In the event of a technical failure, we will act promptly to restore
        full functionality and resolve issues with minimal delay.
      </p>
      <p className="text-gray-800 mb-4">
        Zeal Stay reserves the right to modify its pricing at any time in
        the future. Any such changes will be communicated in advance to ensure
        transparency and allow customers to review and adapt to the updated
        pricing structure.
      </p>
      <p className="text-gray-800 mb-4">
        The cost of services will be denominated in the currency of the country
        where Zeal Stay is currently headquartered. If the company
        relocates its operations to a different country, the pricing may be
        adjusted to reflect the currency of the new location, ensuring
        compliance with local regulations and economic conditions.
      </p>
      <h2 className="text-2xl font-semibold  mt-6 mb-2">Liability</h2>
      <p className="text-gray-800 mb-4">
        Zeal Stay shall not be held responsible for any delays,
        malfunctions, suspensions, and/or terminations of access to services
        caused by:
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li>
          {" "}
          <span className="font-semibold">Force Majeure Events: </span>
          Including, but not limited to, national and/or international
          emergencies, fires, explosions, earthquakes, volcanic eruptions,
          landslides, cyclones, storms, floods, hurricanes, avalanches, war,
          civil strife, riots, strikes, or any other unforeseen and exceptional
          circumstances that prevent the provision of agreed services.
        </li>
        <li>
          {" "}
          <span className="font-semibold"> Unauthorized Actions: </span>Any
          tampering or actions performed on the services or equipment by you or
          any individual not authorized by Zeal Stay.
        </li>
        <li>
          {" "}
          <span className="font-semibold">External Technical Issues: </span>
          Technical problems related to the Internet that are beyond Marvel
          Softwares control, including physical damage or traffic congestion.
        </li>
        <li>
          {" "}
          <span className="font-semibold"> Improper Use: </span> Incorrect use
          of the services by you or anyone else.
        </li>
        <li>
          {" "}
          <span className="font-semibold">Inadequate Equipment: </span>
          Malfunction or inadequacy of your own connecting equipment or the base
          technology equipment required to access the services.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold  mt-6 mb-2">Your Rights</h2>
      <p className="text-gray-800 mb-4">
        In the event of a service failure, you will only be charged for the
        duration of the service you were able to use during that month. No
        charges will be applied for any period in which the service was
        unavailable, and adjustments will be made to ensure that you are only
        billed for the time the service was operational.
      </p>

      <h2 className="text-2xl font-semibold  mt-6 mb-2">
        Changes to this Service Terms and Conditions
      </h2>
      <p className=" mb-4">
        We may update our Service Terms and Conditions from time to time. We
        will notify You of any changes by posting the new Service Terms and
        Conditions on this page. We will let You know via email and/or a
        prominent notice on Our Service, prior to the change becoming effective
        and update the &quot;Last updated&quot; date at the top of this Service
        Terms and Conditions. You are advised to review this Service Terms and
        Conditions periodically for any changes. Changes to this Service Terms
        and Conditions are effective when they are posted on this page.
      </p>
    </div>
  );
}
