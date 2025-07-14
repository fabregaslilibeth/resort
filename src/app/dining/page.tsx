export default function DiningPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dining Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Savor exquisite cuisine prepared with fresh, local ingredients in our stunning restaurant.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Culinary Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              Our award-winning restaurant offers a unique dining experience that combines 
              traditional local flavors with international cuisine. Every dish is crafted 
              with care using the freshest ingredients sourced from local markets and our own garden.
            </p>
            <p className="text-gray-600 mb-6">
              From romantic candlelit dinners to casual beachfront lunches, we provide 
              the perfect setting for every dining occasion.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300">
                Make Reservation
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Restaurant Image Placeholder</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fine Dining</h3>
            <p className="text-gray-600">
              Experience gourmet cuisine in an elegant atmosphere with stunning ocean views.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Beachfront Dining</h3>
            <p className="text-gray-600">
              Enjoy fresh seafood and tropical cocktails with your feet in the sand.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍷</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wine Selection</h3>
            <p className="text-gray-600">
              Choose from our carefully curated wine list featuring local and international selections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 