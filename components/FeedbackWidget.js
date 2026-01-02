'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import countryList from 'react-select-country-list';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const timeOptions = [
  { value: '9:00 AM', label: '9:00 AM' },
  { value: '10:00 AM', label: '10:00 AM' },
  { value: '11:00 AM', label: '11:00 AM' },
  { value: '12:00 PM', label: '12:00 PM' },
  { value: '1:00 PM', label: '1:00 PM' },
  { value: '2:00 PM', label: '2:00 PM' },
  { value: '3:00 PM', label: '3:00 PM' },
  { value: '4:00 PM', label: '4:00 PM' },
  { value: '5:00 PM', label: '5:00 PM' },
  { value: '6:00 PM', label: '6:00 PM' },
];

export default function CounselingForm() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const countries = useMemo(() => countryList().getData(), []);

  const { register, handleSubmit, formState: { errors }, setValue, getValues, reset, watch } = useForm();

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxmehTh1Og4H4vdp8GjyyST32M48h3tZhfwKVq2fT9tAs6Hjz30B-mTcYKh9SDpI89M/exec',
        { method: 'POST', body: new URLSearchParams(data) }
      );

      toast.success('We will contact you on WhatsApp soon! 💬', {
        position: 'bottom-right',
        autoClose: 5000,
        theme: 'colored',
        style: { background: '#1d4ed8', color: 'white' },
      });

      reset();
      setOpen(false);
    } catch {
      toast.error('Submission failed. Please try again!', {
        position: 'bottom-right',
        theme: 'colored',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = () => {
    const data = getValues();
    const requiredFields = ['phone', 'email', 'country', 'city', 'time'];
    const missing = requiredFields.filter(f => !data[f]);
    if (missing.length > 0) {
      toast.error('Please fill in all required fields!', { theme: 'colored' });
      return;
    }
    onSubmit(data);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white z-50 hover:scale-110 transition-transform"
      >
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
        </svg>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed w-full  bg-black/50 overflow-y-auto backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-screen max-w-lg max-h-screen overflow-auto  bg-white rounded-3xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800">Get Free Counseling</h2>
            <p className="text-center text-gray-600 mt-2">We will reach you on WhatsApp</p>

            <form className="space-y-6 mt-6">
  {/* Phone */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Phone Number (with country code)
    </label>
    <input
      type="tel"
      {...register('phone', { required: 'Phone number is required' })}
      className="w-full px-5 py-4 rounded-xl border border-gray-300 text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
      placeholder="Enter your phone number"
    />
    {errors.phone && (
      <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>
    )}
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input
      type="email"
      {...register('email', { required: 'Email is required' })}
      className="w-full px-5 py-4 rounded-xl border border-gray-300 text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
      placeholder="Enter your email address"
    />
    {errors.email && (
      <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
    )}
  </div>

  {/* Country */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Country
    </label>
    <ReactSelect
      options={countries}
      onChange={(opt) => setValue('country', opt?.value || '', { shouldValidate: true })}
      placeholder="Select your country"
      className="react-select-container text-slate-700"
      classNamePrefix="react-select"
      styles={{
        control: (base, state) => ({
          ...base,
          borderRadius: '12px',
          borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
          boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.2)' : 'none',
          padding: '2px 4px',
          '&:hover': { borderColor: '#3b82f6' },
        }),
      }}
    />
  </div>

  {/* City */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      City
    </label>
    <input
      type="text"
      {...register('city', { required: 'City is required' })}
      className="w-full px-5 py-4 rounded-xl border border-gray-300 text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
      placeholder="Enter your city"
    />
    {errors.city && (
      <span className="text-red-500 text-xs mt-1 block">{errors.city.message}</span>
    )}
  </div>

  {/* Preferred Time */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Preferred Time to Call
    </label>
    <ReactSelect
      options={timeOptions}
      onChange={(opt) => setValue('time', opt?.value || '', { shouldValidate: true })}
      placeholder="Select preferred time"
      className="react-select-container text-slate-600"
      classNamePrefix="react-select"
      styles={{
        control: (base, state) => ({
          ...base,
          borderRadius: '12px',
          borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
          boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.2)' : 'none',
          padding: '2px 4px',
          '&:hover': { borderColor: '#3b82f6' },
        }),
      }}
    />
  </div>

  {/* Description */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Description (Optional)
    </label>
    <textarea
      {...register('description')}
      rows="3"
      className="w-full px-5 py-4 rounded-xl border border-gray-300 text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
      placeholder="Any additional information..."
    />
  </div>

  {/* Submit Button */}
  <button
    type="button"
    disabled={isSubmitting}
    onClick={handleFormSubmit}
    className="w-full py-5 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Submitting...' : 'Submit Request'}
  </button>
</form>


            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute   top-6 right-6 text-amber-500 hover:text-gray-700 text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
