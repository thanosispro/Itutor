'use client';
import Select from 'react-select';
import moment from 'moment-timezone';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, isNumericalString } from 'framer-motion';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import default styles for Toastify
// logic fot timezone
const COMMON_TIMEZONES = [
  'UTC',
  'Asia/Kathmandu',
  'Asia/Kolkata',
  'Europe/London',
  'America/New_York',
  'Australia/Sydney',
];

function getTimezoneOptions() {
  const all = moment.tz.names();

  const formatOption = (tz) => {
    const offset = moment.tz(tz).format('Z');
    return {
      value: tz,
      label: `(GMT${offset}) ${tz.replace('_', ' ')}`,
    };
  };

  return {
    common: COMMON_TIMEZONES.map(formatOption),
    all: all.map(formatOption),
  };
}

const timezoneOptions = getTimezoneOptions();

export default function FindTutorModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthDate: null,
    age: '',
    email: '',
    phone: '',

    hours: '',
    timezone: '',
    parentsEmail: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // For form submission state

  useEffect(() => {
    if (form.birthDate) {
      const today = new Date();
      let calculatedAge = today.getFullYear() - form.birthDate.getFullYear();
      const monthDiff = today.getMonth() - form.birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < form.birthDate.getDate())) {
        calculatedAge--;
      }
      setForm(prev => ({ ...prev, age: calculatedAge.toString() }));
    } else {
      setForm(prev => ({ ...prev, age: '' }));
    }
  }, [form.birthDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleDateChange = (date) => {
    setForm(prev => ({ ...prev, birthDate: date }));
    setErrors(prev => ({ ...prev, birthDate: '' }));
  };

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Validate the form fields.
   * This function checks if all required fields have valid inputs.
   * If a field has an invalid input, an error message is added to the newErrors object.
   * The function then sets the state of errors to the newErrors object.
   * Finally, it returns true if all fields are valid, and false otherwise.
   * @returns {boolean} Whether all form fields are valid.
   */
  /*******  02b3d5cd-d9d1-4aa1-a3a1-546574ca5c62  *******/
  const validate = () => {
    const newErrors = {};
    if (!isNumericalString(form.phone)) newErrors.phone = 'Please enter a valid number';
    if (!form.firstName) newErrors.firstName = 'Required';
    if (!form.lastName) newErrors.lastName = 'Required';
    if (!form.birthDate) newErrors.birthDate = 'Please select your date of birth';
    if (!form.email) newErrors.email = 'Required';
    if (!form.phone) newErrors.phone = 'Required';
    if (!form.hours) newErrors.hours = 'Required';
    if (!form.timezone) newErrors.timezone = 'Required';

    const ageNum = parseInt(form.age);
    if (!isNaN(ageNum) && ageNum < 16 && !form.parentsEmail) {
      newErrors.parentsEmail = 'Required for students under 16';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const date = form.birthDate.toLocaleDateString('en-CA');
    setLoading(true);
    setErrors({}); // Reset errors on new submission

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby3a3K6T-P9RQw_5yugQ-vcb-oaJB-XbnjISzDSdTyT_8pBgmd2i_qeT3Wud8y27D_PAg/exec', {
        method: 'POST',
        body: new URLSearchParams({
          firstName: form.firstName,
          lastName: form.lastName,
          age: date,
          email: form.email,
          phone: form.phone,
          parentEmail: form.parentsEmail || 'Not Given',
          timezone: form.timezone,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (data.status === 'success') {
        toast.success('Form submitted successfully!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark"
        });
        onClose();
      } else {
        toast.error('Error: Something went wrong', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light"

        });
      }
    } catch (error) {
      toast.error('Error: Something went wrong', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark"
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative max-h-screen overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <X size={30} color="black" />
                </button>

                <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">
                  Apply the forms below!
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="text-black mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        disabled={loading}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="text-black mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        disabled={loading}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Date of Birth and Email */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative mt-1">
                        <DatePicker
                          selected={form.birthDate}
                          onChange={handleDateChange}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="Select birth date"
                          showYearDropdown
                          showMonthDropdown
                          dropdownMode="select"
                          maxDate={new Date()} // No future dates
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                          disabled={loading}
                        />
                        <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="text-black mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        disabled={loading}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone, Number, and Hours */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="text-black mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        disabled={loading}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>


                  </div>

                  {/* Hours and Timezone */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Hours per week <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="hours"
                        value={form.hours}
                        onChange={handleChange}
                        placeholder="e.g., 2 hours/week"
                        className="text-black mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        disabled={loading}
                      />
                      {errors.hours && <p className="text-red-500 text-xs mt-1">{errors.hours}</p>}
                    </div>

                    <div className="flex-1">
                    
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Timezone <span className="text-red-500">*</span>
                        </label>

                        <Select
                          options={[
                            { label: 'Common Timezones', options: timezoneOptions.common },
                            { label: 'All Timezones', options: timezoneOptions.all },
                          ]}
                          value={
                            form.timezone
                              ? timezoneOptions.all.find(opt => opt.value === form.timezone)
                              : null
                          }
                          onChange={(selected) => {
                            setForm(prev => ({ ...prev, timezone: selected.value }));
                            setErrors(prev => ({ ...prev, timezone: '' }));
                          }}
                          isDisabled={loading}
                          placeholder="Select timezone..."
                          className="mt-1 text-black"
                          classNamePrefix="react-select"
                        />

                        {errors.timezone && (
                          <p className="text-red-500 text-xs mt-1">{errors.timezone}</p>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Parents Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Parents Email {form.age && parseInt(form.age) < 16 && <span className="text-red-500">*</span>} (Required if under 16)
                    </label>
                    <input
                      type="email"
                      name="parentsEmail"
                      value={form.parentsEmail}
                      onChange={handleChange}
                      className="text-black mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                      disabled={loading}
                    />
                    {errors.parentsEmail && <p className="text-red-500 text-xs mt-1">{errors.parentsEmail}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#1D3E89] text-white py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition shadow-lg mt-6 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Container for showing success/error messages */}

    </>
  );
}
