import Image from "next/image";
export default function image({ imageUrls }) {
  return (
    <>
      <div className="text-3xl font-bold text-center py-6">
        <h1>Picsphere</h1>
        <p>
          "Explore the World Through Our Lens: Discover Stunning Images on
          PicSphere"
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {imageUrls.map((url) => (
          <img
            src={url}
            alt=""
            key={url}
            className="object-cover h-[320px] w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:5000/images");
  const { image_urls } = await res.json();
  return {
    props: {
      imageUrls: image_urls,
    },
  };
}
