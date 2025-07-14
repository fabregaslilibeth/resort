export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Lalaguna Villas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of luxury, comfort, and natural beauty at our exclusive resort.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Nestled in the heart of paradise, Lalaguna Villas offers an unparalleled experience 
              where luxury meets nature. Our resort is designed to provide guests with the perfect 
              balance of comfort, adventure, and relaxation.
            </p>
            <p className="text-gray-600 mb-6">
              From our world-class diving facilities to our exquisite dining experiences, every 
              aspect of your stay is carefully crafted to create unforgettable memories.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re seeking adventure, relaxation, or a bit of both, Lalaguna Villas 
              is your gateway to paradise.
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Accommodations</h3>
            <p className="text-gray-600">
              Experience comfort and elegance in our beautifully designed villas.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤿</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">World-Class Diving</h3>
            <p className="text-gray-600">
              Explore the underwater world with our professional diving facilities.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Exquisite Dining</h3>
            <p className="text-gray-600">
              Savor delicious cuisine prepared with fresh, local ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 