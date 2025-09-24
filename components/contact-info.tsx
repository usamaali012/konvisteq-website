"use client"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display font-bold text-2xl mb-4">Office Locations</h3>
        <p className="text-gray-600 mb-6">
          We usually respond within 24 hours. Alternatively, you're welcome to call our offices.
        </p>

        <div className="mb-6">
          <img
            src="/elegant-modern-interior-design-living-room-with-lu.jpg"
            alt="Office interior"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-3">
          <p className="text-gray-800 font-medium">2972 Westheimer Rd., Illinois 85486</p>
          <p className="text-orange-500 font-bold text-xl">(084) 123 - 456 88</p>
          <p className="text-gray-600">support@example.com</p>
        </div>
      </div>
    </div>
  )
}
