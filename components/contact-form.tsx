"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-balance mt-10">
          WE'D LOVE TO
          <br />
          HEAR FROM YOU
        </h2>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="font-display font-bold text-2xl mb-2">Information Request</h3>
        <p className="text-gray-600 mb-8">
          For more information and how we can meet your needs, please fill out the form below and someone from our team
          will be in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-orange-500 focus:ring-0 px-0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-orange-500 focus:ring-0 px-0"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-orange-500 focus:ring-0 px-0"
              required
            />
          </div>

          <div>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Say something..."
              className="border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-orange-500 focus:ring-0 px-0 resize-none min-h-20"
              required
            />
          </div>

          <Button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 flex items-center gap-2 mt-8"
          >
            Submit
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-black" />
            </div>
          </Button>
        </form>
      </div>
    </div>
  )
}
