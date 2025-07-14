export default function TransportPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transportation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convenient and comfortable transportation options to enhance your stay with us.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Seamless Travel Experience
            </h2>
            <p className="text-gray-600 mb-6">
              From airport transfers to local excursions, we provide reliable and comfortable 
              transportation services to ensure your journey is as enjoyable as your stay.
            </p>
            <p className="text-gray-600 mb-6">
              Our professional drivers and well-maintained vehicles guarantee safe and 
              punctual service for all your transportation needs.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300">
                Book Transfer
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Transport Image Placeholder</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✈️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Airport Transfers</h3>
            <p className="text-gray-600">
              Reliable pickup and drop-off service to and from the airport with meet-and-greet.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Tours</h3>
            <p className="text-gray-600">
              Guided tours to local attractions, markets, and cultural sites with experienced drivers.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚁</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Helicopter Service</h3>
            <p className="text-gray-600">
              Luxury helicopter transfers for a truly spectacular arrival and departure experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 