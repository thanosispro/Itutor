'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm();

  // Watch values for floating labels
  const watchedPhone = watch('phone');
  const watchedEmail = watch('email');
  const watchedCountry = watch('country');
  const watchedCity = watch('city');
  const watchedTime = watch('time');
  const watchedDescription = watch('description');

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      console.log('Submitting data:', data);

      await fetch(
        'https://script.google.com/macros/s/AKfycbxmehTh1Og4H4vdp8GjyyST32M48h3tZhfwKVq2fT9tAs6Hjz30B-mTcYKh9SDpI89M/exec',
        {
          method: 'POST',
          body: new URLSearchParams(data),
        }
      );

      toast.success('We will contact you on WhatsApp soon! 💬', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: 'colored',
        style: { background: '#1d4ed8', color: 'white' },
      });

      reset();
      setOpen(false);
    } catch (error) {
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
    const missing = requiredFields.filter((field) => !data[field]);

    if (missing.length > 0) {
      toast.error('Please fill in all required fields!', { theme: 'colored' });
      return;
    }
    onSubmit(data);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white z-50 group overflow-hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.3, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-9 h-9 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297C11.885 2.088 3.61 10.363 3.61 18.957c0 2.649.845 5.231 2.428 7.398l-1.513 5.526 5.694-1.493a11.8 11.8 0 007.242 2.496c6.505 0 11.802-5.297 11.802-11.801 0-3.155-1.223-6.11-3.443-8.331a11.725 11.725 0 00-8.356-3.043" />
          </svg>
        </motion.div>
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 pt-10">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                  Get Free Counseling
                </h2>
                <p className="text-center text-gray-600 mt-2">We will reach you on WhatsApp</p>

                <form className="space-y-6 mt-8">
                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: { value: /^[0-9+\-\s()]{10,20}$/, message: 'Invalid phone number' },
                      })}
                      className="peer w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder=" "
                    />
                    <label className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-valid:-top-3 peer-valid:left-4 peer-valid:text-xs peer-valid:bg-white peer-valid:px-2">
                      Phone Number (with country code)
                    </label>
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                      })}
                      className="peer w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder=" "
                    />
                    <label className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-valid:-top-3 peer-valid:left-4 peer-valid:text-xs peer-valid:bg-white peer-valid:px-2">
                      Email Address
                    </label>
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  {/* Country */}
                  <div>
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
                          boxShadow: state.isFocused ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
                          padding: '8px',
                          '&:hover': { borderColor: '#3b82f6' },
                        }),
                      }}
                      isSearchable
                    />
                  </div>

                  {/* City */}
                  <div className="relative">
                    <input
                      type="text"
                      {...register('city', { required: 'City is required' })}
                      className="peer w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder=" "
                    />
                    <label className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-valid:-top-3 peer-valid:left-4 peer-valid:text-xs peer-valid:bg-white peer-valid:px-2">
                      City
                    </label>
                    {errors.city && <span className="text-red-500 text-xs mt-1 block">{errors.city.message}</span>}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <ReactSelect
                      options={timeOptions}
                      onChange={(opt) => setValue('time', opt?.value || '', { shouldValidate: true })}
                      placeholder="Preferred time to call"
                      className="react-select-container text-slate-600"
                      classNamePrefix="react-select"
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderRadius: '12px',
                          borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
                          boxShadow: state.isFocused ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
                          padding: '8px',
                          '&:hover': { borderColor: '#3b82f6' },
                        }),
                      }}
                      isSearchable={false}
                    />
                  </div>

                  {/* Description (Auto-expanding Textarea) */}
                  <div className="relative">
                    <textarea
                      {...register('description')}
                      rows="3"
                      className="text-gray-800 peer w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                      placeholder=" "
                    />
                    <label className="absolute left-5 top-4 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-valid:-top-3 peer-valid:left-4 peer-valid:text-xs peer-valid:bg-white peer-valid:px-2 text-slate-700">
                      Description (Optional)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleFormSubmit}
                    className="w-full py-5 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Submitting...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </motion.button>
                </form>

                {/* Close Button */}
                <motion.button
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}