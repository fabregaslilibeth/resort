export default function DivingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Diving Adventures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the underwater world with our professional diving facilities and expert guides.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              World-Class Diving Experience
            </h2>
            <p className="text-gray-600 mb-6">
              Discover pristine coral reefs, vibrant marine life, and breathtaking underwater 
              landscapes with our certified diving instructors. Whether you&apos;re a beginner 
              or an experienced diver, we have the perfect adventure for you.
            </p>
            <p className="text-gray-600 mb-6">
              Our diving center is equipped with state-of-the-art equipment and offers 
              courses for all skill levels, from PADI certification to advanced specialty courses.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300">
                Book a Dive
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                View Courses
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Diving Image Placeholder</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤿</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Instructors</h3>
            <p className="text-gray-600">
              Learn from experienced PADI-certified instructors with years of local diving experience.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🐠</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Marine Life</h3>
            <p className="text-gray-600">
              Encounter diverse marine species in their natural habitat, from colorful fish to majestic sea turtles.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏝️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Locations</h3>
            <p className="text-gray-600">
              Access to the best diving spots with pristine coral reefs and crystal-clear waters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 