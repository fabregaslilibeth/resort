'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '../../../components/Breadcrumb';
import { ScrollTrigger } from '../../../components/ScrollTrigger';
import { menuItem } from '../../../../data/menu';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
  };
}

export default function MenuCategoryPage({ params }: PageProps) {
  // Convert slug back to category name
  const category = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b(And|With|From|The)\b/g, (match) => match.toUpperCase());
  
  // Get all items for this category
  const categoryItems = menuItem.filter(item => item.category === category);
  
  // If category doesn't exist, show 404
  if (categoryItems.length === 0) {
    notFound();
  }

  // Split items: first 3 as cards, rest as list
  const featuredItems = categoryItems.slice(0, 3);

  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: string } = {
      'Breakfast': '🍳',
      'Lunch': '🥗',
      'Dinner': '🍽️',
      'Snacks': '🍟',
      'Cocktails': '🍹',
      'Wine List': '🍷',
      'Local Beers': '🍺',
      'Coffee': '☕',
      'Tea': '🫖',
      'Desserts': '🍰',
      'Starters & Pica Pica': '🥨',
      'Salads': '🥬',
      'Burgers & Sandwiches': '🍔',
      'Pasta': '🍝',
      'Mains': '🥩',
      'Curry': '🍛',
      'From the Grill': '🔥',
      'Filipino': '🇵🇭',
      'Pizza 12"': '🍕',
      'Chinese Hot Pot': '🍲',
      'Vegetarian': '🥬',
      'Vegan': '🌱',
      'White Wine': '🍷',
      'Red Wine': '🍷',
      'Owners Cellar - White Wine': '🍷',
      'Owners Cellar - Red Wine': '🍷',
      'Espresso With a Shot': '☕',
      'Iced & Frappuccino': '🥤',
      'Canned Juice': '🥫',
      'Freshly Squeezed Juice': '🍊',
      'Smoothies': '🥤',
      'Shakes': '🥤',
    };
    return icons[categoryName] || '🍽️';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Breadcrumb 
          BC1={{ link: "/dining", text: "Dining" }}
          BC2={{ link: "/dining/menu", text: "Menu" }}
          BC3={{ link: `/dining/menu/${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`, text: category }}
        />
      </div>

      {/* Featured Items (First 3 as Cards) */}
      {featuredItems.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                  Featured {category} Items
                </h2>
                <p className="text-gray-600">
                  Our most popular {category.toLowerCase()} selections
                </p>
              </div>
            </ScrollTrigger>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-4xl">{getCategoryIcon(category)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      {item.price !== undefined && (
                        <span className="text-blue-600 font-semibold text-lg">
                          {item.price === 0 ? 'POA' : item.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.content}</p>
                    {item.code && (
                      <span className="text-xs text-gray-500 font-mono">{item.code}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Menu List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                Complete {category} Menu
              </h2>
              <p className="text-gray-600">
                Browse our full selection of {category.toLowerCase()} items
              </p>
            </div>
          </ScrollTrigger>

          <div className="space-y-8">
            {categoryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="border-b border-gray-200 pb-6 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      {item.code && (
                        <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                          {item.code}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                  <div className="text-right min-w-[100px]">
                    {item.price !== undefined && (
                      <span className="text-lg font-semibold text-blue-600">
                        {item.price === 0 ? 'POA' : item.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Restaurant Button */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <motion.a
              href="/dining/restaurant"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Restaurant
            </motion.a>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  );
} 