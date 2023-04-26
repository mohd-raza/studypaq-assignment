import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-3xl text-red-300 font-bold flex flex-col justify-center items-center mt-32">
        <p className="text-center">
          Unleash Your Creativity with Our Vast Collection of Images - Discover
          the Power of Visual Storytelling on Picsphere
        </p>
        <Link href="/image">
          <button className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded mt-16">
            Explore now
          </button>
        </Link>
      </div>
    </>
  );
}
