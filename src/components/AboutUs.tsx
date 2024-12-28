function AboutUs() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-center mb-8">
          At <span className="font-semibold text-blue-600">Black Olive</span>, we believe in delivering the best salads and services
          to our customers. Our mission is to combine health, taste, and convenience into every meal.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              We aim to inspire a healthier lifestyle with innovative food options and exceptional customer service.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Story</h3>
            <p className="text-gray-600">
              Started in 2024, <span className="font-semibold">Black Olive</span> has grown from a small kitchen to a
              community-focused business catering to thousands of customers daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
