"use client";

import Script from "next/script";
import Head from "next/head";
import { Modal } from "antd";
import { useState, useEffect } from "react";

export default function CalendlyLink({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalWidth, setModalWidth] = useState("90%");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateModalWidth = () => {
    if (window.innerWidth >= 1024) {
      setModalWidth("70%"); // For large screens
    } else {
      setModalWidth("90%"); // For medium and smaller screens
    }
  };

  useEffect(() => {
    updateModalWidth(); // Set initial width
    window.addEventListener("resize", updateModalWidth); // Listen for screen resize
    return () => {
      window.removeEventListener("resize", updateModalWidth); // Cleanup
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <span onClick={handleOpenModal}>{children}</span>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          centered
          width={modalWidth} // Use the dynamic width
        >
          <div className="flex justify-center items-center">
            {/* Calendly Inline Embed */}
            <iframe
              src="https://calendly.com/kazi-marvelsoftwares?hide_gdpr_banner=1&primary_color=20600b"
              style={{
                width: "100%",
                height: "630px",
                border: "none",
              }}
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </Modal>
      )}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Calendly script loaded")}
        onError={() => console.error("Failed to load Calendly script")}
      />
    </>
  );
}
