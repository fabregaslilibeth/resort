import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50 p-6 rounded-lg text-sm border border-red-500">
      <div className="">
          <h2 className="font-semibold text-gray-900 mb-4 text-2xl">Cancellation & Weather Guarantee Policy</h2>
      </div>

      {/* Off-Peak Bookings */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">1. Off-Peak Bookings – Flexible Policy</h4>
        <p className="text-gray-700 mb-4">For all dates outside the designated Peak Periods:</p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-semibold">•</span>
            <span>Cancellations made <strong>21 days or more</strong> before the scheduled arrival date are eligible for a full refund.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-semibold">•</span>
            <span>Cancellations made within <strong>21 days</strong> of arrival will incur a charge equivalent to the first night.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-semibold">•</span>
            <span>Cancellations made within <strong>7 days</strong> of arrival will incur a 50% cancellation fee or the first night, whichever is greater.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-semibold">•</span>
            <span>No-shows will be charged in full and are non-refundable.</span>
          </li>
        </ul>
      </div>

      {/* Peak Period Bookings */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">2. 
            Peak Period Bookings – Non-Refundable & Non-Amendable
            <span className="text-gray-700">
                <svg className="inline-block w-5 h-5 text-red-600 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </span>
        </h4>
        <p className="text-gray-700 mb-4">Reservations during the following Peak Periods are non-refundable and cannot be modified. Contact us directly for undue hardship situations.</p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <ul className="space-y-2 text-gray-700">
            <li><strong>Independence Day:</strong> 12 June – 15 June 2025</li>
            <li><strong>Christmas & New Year:</strong> 23 December 2025 – 4 January 2026</li>
            <li><strong>Chinese New Year:</strong> 17 February 2026 – 20 February 2026</li>
            <li><strong>Easter:</strong> 2 April 2026 – 3 April 2026</li>
            <li><strong>May Labor Day:</strong> 1 May 2026 – 5 May 2026</li>
          </ul>
        </div>
      </div>

      {/* Booking Grace Period */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">3. Booking Grace Period</h3>
        <p className="text-gray-700">All reservations may be canceled or amended within <strong>24 hours</strong> of creation without penalty, regardless of stay dates.</p>
      </div>

      {/* Rescheduling */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">4. Rescheduling</h3>
        <p className="text-gray-700">We understand travel plans can change. Depending on availability and circumstances, we may be able to accommodate a date change — please contact us directly to discuss your options.</p>
      </div>

      {/* LLV Rain Guarantee */}
      <div className="space-y-4">
        <h3 className="font-semibold text-blue-900">5. LLV Rain Guarantee</h3>
        <p className="text-blue-800 mb-4 italic">&ldquo;In everyone&apos;s life, a little rain must fall. But not too much when you are on vacation!&rdquo;</p>
        <p className="text-blue-800 mb-4">Introducing the <strong>LLV Rain Guarantee</strong>:</p>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-gray-700 font-semibold">If any two days of your stay are affected by official Orange or Red Rainfall Warnings, you&apos;ll receive <span className="text-green-600">1 FREE NIGHT</span> — either as an extension of your current stay or a future credit.</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Restrictions:</h4>
          <ul className="space-y-1 text-yellow-800">
            <li>• Only applicable to direct bookings.</li>
            <li>• Cannot be combined with other promotions.</li>
          </ul>
        </div>
      </div>

      {/* Force Majeure & External Disruptions */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">6. Force Majeure & External Disruptions</h3>
        <div className="space-y-4 text-gray-700">
          <p>Cancellation or disruption caused by <strong>Lalaguna Holdings Inc.</strong> (e.g., mechanical issues or other unforeseeable internal problems) will entitle you to a pro-rata refund (in credit or cash) for the affected portion of your stay.</p>
          
          <p>Disruptions caused by circumstances beyond our control are <strong>not the responsibility of Lalaguna Holdings Inc.</strong> and must be covered by you or your travel insurance provider. These may include, but are not limited to:</p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <li>• Inclement weather</li>
              <li>• Natural Disaster</li>
              <li>• Health-related issues</li>
              <li>• Family emergencies</li>
              <li>• Lost or delayed luggage</li>
              <li>• Cancelled or postponed flights or transfers</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-semibold mb-2">Travel Insurance Recommendation:</p>
            <p className="text-blue-800">We strongly recommend that all guests obtain comprehensive travel insurance to cover these potential risks. Upon request, Lalaguna Holdings Inc. will provide documentation to support your insurance claims; however, the responsibility for securing appropriate coverage rests solely with you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy; 