import Script from "next/script";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Stay Advertising",
  description:
    "Build your Property Brand & Guest Loyalty. Get Direct Bookings rolling within a week. Save on OTA commissions and boost Occupancy.",
};

export default function RootLayout({ children,scheduleCall }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId="GTM-MPX62HTV" />
        <link rel="icon" href="/favicon.jpg" sizes="any" />
        {children}
        {scheduleCall}
         <Script
          src="https://player.vimeo.com/api/player.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
