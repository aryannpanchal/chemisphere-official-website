'use client';

import { useUser } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementMarquee from './AnnouncementMarquee';

const questions = [
  { label: "Parent's Full Name", name: 'parentName', type: 'text', required: true },
  { label: "Student's Full Name", name: 'studentName', type: 'text', required: true },
  { label: 'Mobile Number (WhatsApp)', name: 'mobileNumber', type: 'tel', required: true },
  { label: 'Email Address (Optional)', name: 'email', type: 'email', required: false },
  { label: "Student's Class", name: 'studentClass', type: 'select', options: ['11', '12', 'Dropper'], required: true },
  { label: 'Exam Target', name: 'examTarget', type: 'select', options: ['JEE Main', 'JEE Advanced', 'NEET', 'Boards'], required: true },
  { label: 'Subjects Interested In', name: 'subjects', type: 'multiselect', options: ['Physics', 'Chemistry', 'Maths'], required: true },
  { label: 'Current Coaching (Optional)', name: 'currentCoaching', type: 'text', required: false },
  { label: 'Concerns / Expectations (Optional)', name: 'concerns', type: 'textarea', required: false },
];

export default function DashboardForm() {
  const { user } = useUser();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const isLast = step === questions.length;
  const current = questions[step];

  const next = async () => {
    const valid = await trigger(current.name);
    if (valid && step < questions.length) setStep((prev) => prev + 1);
  };

  const prev = () => step > 0 && setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    if (!isValid) return;

    // Convert multiselect array to comma-separated string
    if (data.subjects && Array.isArray(data.subjects)) {
      data.subjects = data.subjects.join(', ');
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@chemisphere.in';
    form.target = 'hidden-tab';

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    const configInputs = [
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'table' },
      { name: '_subject', value: 'New Chemisphere Enquiry' },
    ];

    configInputs.forEach(({ name, value }) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    const popup = window.open('', 'hidden-tab');
    document.body.appendChild(form);
    setSubmitted(true);
    form.submit();

    setTimeout(() => window.focus(), 300);
  };

  return (
    <>
      <AnnouncementMarquee />
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start pb-12 px-4 mt-0">
        <div className="w-full h-fit max-w-7xl grid md:grid-cols-2 mt-12 gap-8">
          {/* Left: Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white backdrop-blur-lg h-fit rounded-3xl shadow-lg p-8 md:p-10 border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Admission Enquiry Form
            </h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-6 text-center"
              >
                ✅ Form submitted! Our team will get back to you shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {!isLast && current && (
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <label className="block text-sm font-medium text-gray-700">
                      {current.label}
                    </label>

                    {current.type === 'select' ? (
                      <select
                        {...register(current.name, { required: current.required })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2"
                      >
                        <option value="">Select</option>
                        {current.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : current.type === 'multiselect' ? (
                      <select
                        multiple
                        {...register(current.name, { required: current.required })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2"
                      >
                        {current.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : current.type === 'textarea' ? (
                      <textarea
                        {...register(current.name)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2"
                      />
                    ) : (
                      <input
                        type={current.type}
                        {...register(current.name, {
                          required: current.required,
                          ...(current.name === 'mobileNumber' && {
                            pattern: {
                              value: /^\+?\d{1,3}?[-.\s]?\d{10}$/,
                              message: 'Enter a valid 10-digit number with optional country code',
                            },
                          }),
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2"
                      />
                    )}

                    {errors[current.name] && (
                      <p className="text-red-500 text-sm">
                        {errors[current.name].message || 'This field is required'}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between items-center">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 0}
                  className="px-5 py-2 rounded-lg border border-gray-400 text-gray-800 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                >
                  Back
                </button>

                {!isLast ? (
                  <button
                    type="button"
                    onClick={next}
                    className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-chemisphere via-indigo-600 to-purple-700 hover:brightness-110 transition-all"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      isValid
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:brightness-110'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Schedule My Consultation Now!
                  </button>
                )}
              </div>
            </form>

            {/* Extra Assurance Info */}
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span>Trusted by 25,000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 9v2m0 4h.01" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5h18M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    <path d="M12 11v6m0 0l-2-2m2 2l2-2" />
                  </svg>
                  <span>No Spam, No Promotions</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-center text-gray-500">
                We respect your privacy. Your data is <strong>never shared</strong> with third parties.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-full min-h-[600px] bg-[url('/newChemisphereHeroPhoto.svg')] bg-contain bg-no-repeat bg-center rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
