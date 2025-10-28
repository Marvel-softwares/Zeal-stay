import Navbar from "../components/navbar.jsx";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#02070f] via-[#131b2d] to-[#28284b]">
      <Navbar />
      <div className="flex justify-center items-center h-96">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tXNue6x5Ouc?si=sNFUpxn-gY_PKx9M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h2 className="text-white font-semibold text-3xl text-center">
        Meta Ads for Vacation Rentals
      </h2>
    </div>
  );
}
