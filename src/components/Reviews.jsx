export default function Reviews() {
  const reviews = [
    {
      name: "Jane D.",
      rating: 5,
      text: "Great service, fast delivery and excellent quality bearings!"
    },
    {
      name: "Mark S.",
      rating: 4,
      text: "Quick delivery and helpful support. Will buy again."
    },
    {
      name: "Alisha K.",
      rating: 5,
      text: "Very professional and reliable supplier. Highly recommended!"
    }
  ];

  return (
    <section className="bg-white-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Customer Reviews</h2>
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.154c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.07 9.377c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.286-3.95z" />
            </svg>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 shadow rounded">
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.154c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.07 9.377c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{review.text}</p>
              <p className="mt-2 text-sm font-medium text-gray-900">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
