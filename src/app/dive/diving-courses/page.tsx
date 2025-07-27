import Breadcrumb from '../../components/Breadcrumb';
import DivingForm from '../../components/DivingForm';
import { 
  funDivingData, 
  padiCoursesData, 
  padiSpecialtyCoursesData, 
  colorMap
} from '../../../data/divingCourses';

export default function DivingCoursesPage() {
    return (
      <div className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <Breadcrumb 
            BC1={{ link: "/dive", text: "Diving" }}
            BC2={{ link: "/dive/diving-courses", text: "Diving Courses" }}
          />
        </div>
   
        {/* Fun Diving Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className=" mb-16">
              <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                Fun Diving
              </h2>
              <p className="text-gray-600">
                Recreational fun dives are a great way to explore the amazing dive
                sites around Puerto Galera, and at the same time, gain further
                experience and develop your skills.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {funDivingData.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-600">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Price Badge - Absolute positioned top left */}
                    <div className="absolute bottom-4 right-4 bg-orange-100 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                      <div className="text-primary flex items-center gap-2">
                        <span className="font-bold">{item.price}</span>
                        <span className="text-gray-600 text-xs">{item.priceLabel}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-4 uppercase uppercase">
                      {item.title}
                    </h3>
                    <ul className="text-gray-600 space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <span className="text-orange-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Equipment Rental */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl text-gray-900 mb-8 uppercase">
                Dive Gear Rental
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-900 uppercase">
                        Equipment
                      </th>
                      <th className="text-center py-4 px-4 text-gray-900 uppercase bg-blue-50">
                        Daily Rate
                      </th>
                      <th className="text-center py-4 px-4 text-gray-900 uppercase bg-orange-50">
                        Per Dive Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-gray-900">
                        Full Equipment Rental
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-blue-600 text-lg">$20</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-orange-600 text-lg">$10</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-gray-900">
                        Dive Computer Rental
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-blue-600 text-lg">$10</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-orange-600 text-lg">$5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Tip:</strong> Daily rates are more economical if you&apos;re planning multiple dives in a day!
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* PADI Courses Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className=" mb-16">
              <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                PADI Courses
              </h2>
              <p className="text-gray-600">
                Recreational diving and PADI certification courses for all levels.
                Our team can introduce you to the world of diving or help you
                pursue advanced certifications.
              </p>
            </div>
  
            <div className="space-y-4">
              {padiCoursesData.map((course, index) => (
                <div key={index} className="bg-white p-6 shadow-md border-l-4 hover:shadow-lg transition-shadow" 
                     style={{ borderLeftColor: colorMap[course.badgeColor]?.border || '#6b7280' }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900 uppercase">
                          {course.title}
                        </h3>
                        <span className={`${colorMap[course.badgeColor]?.badge || 'bg-gray-100 text-gray-800'} px-2 py-1 rounded-full text-xs font-semibold`}>
                          {course.badge}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                        {course.features.map((feature, featureIndex) => (
                          <span key={featureIndex}>• {feature}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${colorMap[course.badgeColor]?.price || 'text-gray-600'}`}>{course.price}</div>
                      <div className="text-gray-600 text-sm">{course.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Specialty Courses Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className=" mb-16">
              <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                PADI Specialty Courses
              </h2>
              <p className="text-gray-600">
                Expand your diving skills and knowledge with our comprehensive
                specialty courses.
              </p>
            </div>
  
            <div className="space-y-4">
              {padiSpecialtyCoursesData.map((course, index) => (
                <div key={index} className="bg-white p-6 shadow-md border-l-4 hover:shadow-lg transition-shadow" 
                     style={{ borderLeftColor: colorMap[course.badgeColor]?.border || '#6b7280' }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900 uppercase">
                          {course.title}
                        </h3>
                        <span className={`${colorMap[course.badgeColor]?.badge || 'bg-gray-100 text-gray-800'} px-2 py-1 rounded-full text-xs font-semibold`}>
                          {course.badge}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                        {course.features.map((feature, featureIndex) => (
                          <span key={featureIndex}>• {feature}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${colorMap[course.badgeColor]?.price || 'text-gray-600'}`}>{course.price}</div>
                      <div className="text-gray-600 text-sm">{course.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Contact Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <DivingForm />
          </div>
        </div>
      </div>
    );
  }
  