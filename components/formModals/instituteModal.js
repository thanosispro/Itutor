import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const InstituteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    instituteName: '',
    registrationNumber: '',
    address: '',
    website: '',
    fullName: '',
    designation: '',
    email: '',
    phone: '',
    courseName: '',
    educationLevel: [],
    subjects: '',
    syllabus: '',
    numberOfStudents: '',
    ageRange: '',
    currentAcademicLevel: '',
    modeOfDelivery: [],
    preferredStartDate: '',
    duration: '',
    sessionsPerWeek: '',
    timezoneSlot: '',
    tutorPreference: '',
    customCurriculum: false,
    mockTests: false,
    budgetRange: '',
    paymentMethod: [],
    billingFrequency: [],
    specialInstructions: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'educationLevel' || name === 'modeOfDelivery' || name === 'paymentMethod' || name === 'billingFrequency') {
        setFormData((prevData) => {
          const newValues = prevData[name].includes(value)
            ? prevData[name].filter((item) => item !== value)
            : [...prevData[name], value];
          return { ...prevData, [name]: newValues };
        });
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation (check required fields)
    if (!formData.instituteName || !formData.address || !formData.fullName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields!');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-screen overflow-y-auto">
        
        <form className='relative' onSubmit={handleSubmit}>
          <X onClick={onClose} className="absolute top-0 right-0 text-emerald-400 hover:text-gray-300 text-3xl">
          
        </X>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Institute Registration Form</h2>

          {/* Institute Information */}
          <section className="mb-6 relative">
            
            <h3 className="font-semibold text-gray-800 mb-2">Institute Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="instituteName"
                value={formData.instituteName}
                onChange={handleChange}
                placeholder="Institute Name"
                required
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="Registration Number (optional)"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address (City, Country)"
                required
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website (optional)"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Contact Person Details */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Contact Person Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp Number"
                required
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Course Details */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Course Details</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                placeholder="Course Name"
                required
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Education Level Dropdown */}
              <div>
                <label htmlFor="educationLevel" className="block font-medium text-gray-700">Education Level</label>
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                >
                  {['School', 'GCSE / IGCSE', 'A-Level', 'Pre-University'].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="Subjects (if applicable)"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="syllabus"
                value={formData.syllabus}
                onChange={handleChange}
                placeholder="Syllabus / Board (UK A-Level, GCSE, IB, etc.)"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Student Information */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Student Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                name="numberOfStudents"
                value={formData.numberOfStudents}
                onChange={handleChange}
                placeholder="Number of Students"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                placeholder="Age Range"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="currentAcademicLevel"
                value={formData.currentAcademicLevel}
                onChange={handleChange}
                placeholder="Current Academic Level"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Delivery Preferences */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Delivery Preferences</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="modeOfDelivery" className="block font-medium text-gray-700">Mode of Delivery</label>
                <select
                  name="modeOfDelivery"
                  value={formData.modeOfDelivery}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Mode of Delivery</option>
                  <option value="Online">Online</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <input
                type="date"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration (weeks / months)"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                name="sessionsPerWeek"
                value={formData.sessionsPerWeek}
                onChange={handleChange}
                placeholder="Sessions per Week"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="timezoneSlot"
                value={formData.timezoneSlot}
                onChange={handleChange}
                placeholder="Preferred Time Zone & Time Slot"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Faculty & Customization */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Faculty & Customization</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="tutorPreference"
                value={formData.tutorPreference}
                onChange={handleChange}
                placeholder="Tutor Preference"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="customCurriculum"
                  checked={formData.customCurriculum}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className='text-slate-700'>Custom Curriculum Required?</span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="mockTests"
                  checked={formData.mockTests}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className='text-slate-700'>Assessment / Mock Tests Needed?</span>
              </div>
            </div>
          </section>

          {/* Commercial Details */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Commercial Details</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                placeholder="Budget Range (optional)"
                className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Payment Method Dropdown */}
              <div>
                <label htmlFor="paymentMethod" className="block font-medium text-gray-700">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Online Payment">Online Payment</option>
                </select>
              </div>

              {/* Billing Frequency Dropdown */}
              <div>
                <label htmlFor="billingFrequency" className="block font-medium text-gray-700">Billing Frequency</label>
                <select
                  name="billingFrequency"
                  value={formData.billingFrequency}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Billing Frequency</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Per Course">Per Course</option>
                </select>
              </div>
            </div>
          </section>

          {/* Additional Requirements */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Additional Requirements</h3>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              placeholder="Special Instructions / Notes"
              className="w-full p-3 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </section>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstituteModal;
