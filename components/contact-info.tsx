"use client"

export function ContactInfo() {
  return (
    <div className="space-y-8 mt-36">
      <div>
        <h3 className="font-display font-bold text-2xl mb-4">Office Locations</h3>
        <p className="text-gray-600 mb-6">
          We usually respond within 24 hours. Alternatively, you're welcome to call our offices.
        </p>

        <div className="mb-6">
          <img
            src="/buildingloc.jpg"
            alt="Office interior"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-3">
          <p className="text-gray-800text-2xl font-bold">Office# 808, 8th floor, Pakland Tower-2, New Blue Area (F-9/G-9) Islamabad</p>
          <p className="text-[#02adc0d8] font-bold text-xl">(050) 123 - 456 78</p>
          <p className="text-gray-600 text-xl text-semibold">info@konvisteq.com</p>
        </div>
      </div>
    </div>
  )
}
