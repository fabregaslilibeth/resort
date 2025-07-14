export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Activities & Adventures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From water sports to land adventures, discover exciting activities for every type of traveler.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Endless Adventures Await
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re seeking adrenaline-pumping water sports, peaceful nature walks, 
              or cultural experiences, our resort offers a wide range of activities to make 
              your stay unforgettable.
            </p>
            <p className="text-gray-600 mb-6">
              Our experienced guides ensure your safety while providing insider knowledge 
              about the best spots and local culture.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300">
                Book Activities
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                View Schedule
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Activities Image Placeholder</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏄</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Sports</h3>
            <p className="text-gray-600">
              Surfing, kayaking, paddleboarding, and snorkeling in crystal-clear waters.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚶</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nature Walks</h3>
            <p className="text-gray-600">
              Guided hikes through tropical forests and scenic coastal trails.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚣</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Boat Tours</h3>
            <p className="text-gray-600">
              Island hopping, sunset cruises, and fishing expeditions.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wellness</h3>
            <p className="text-gray-600">
              Yoga classes, spa treatments, and meditation sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 