"use client";
import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [modalWidth, setModalWidth] = useState("90%");
  const [isClient, setIsClient] = useState(false); // Prevent hydration mismatch
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  useEffect(() => {
    setIsClient(true); // Ensure component is mounted before rendering modal

    const updateModalWidth = () => {
      if (window.innerWidth >= 1024) {
        setModalWidth("70%");
      } else {
        setModalWidth("90%");
      }
    };

    updateModalWidth(); // Set initial width
    window.addEventListener("resize", updateModalWidth);
    return () => {
      window.removeEventListener("resize", updateModalWidth);
    };
  }, []);

  if (!isClient) return null; // Prevent server-side rendering of the modal

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      <Modal
        open={true}
        onCancel={handleCancel}
        footer={null}
        centered
        width={modalWidth}
      >
        <div className="flex justify-center items-center">
          {/* Calendly Inline Embed */}
          <iframe
            src="https://calendly.com/zealstay/30min?hide_gdpr_banner=1&primary_color=5354f3"
            style={{
              width: "100%",
              height: "630px",
              border: "none",
            }}
            title="Calendly Scheduling"
          ></iframe>
        </div>
      </Modal>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Calendly script loaded")}
        onError={() => console.error("Failed to load Calendly script")}
      />
    </>
  );
}
