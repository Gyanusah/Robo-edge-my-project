import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Bibeakant",
    text: "Great product! Works really well and easy to use.",
    stars: 4,
  },
  {
    name: "jibendra",
    text: "Good quality, but there is room for improvement.",
    stars: 3,
  },
  {
    name: "Suman",
    text: "Very satisfied overall. Would recommend!",
    stars: 4,
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000); // slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full   mx-auto overflow-hidden ">
      <div
        className="  flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="min-w-full h-60 bg-gray-400 p-6 rounded-xl shadow-lg   text-center"
          >
            {/* Stars */}
            <div className="flex justify-center mt-10 mb-3">
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  className={`w-5 h-5 ${
                    starIndex < review.stars
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.381-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.97z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 mb-4">"{review.text}"</p>
            <h4 className="font-semibold text-gray-800">— {review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
