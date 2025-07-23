'use client';

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    label: "Parent's Full Name",
    name: 'parentName',
    type: 'text',
    required: true,
  },
  {
    label: "Student's Full Name",
    name: 'studentName',
    type: 'text',
    required: true,
  },
  {
    label: 'Mobile Number (WhatsApp)',
    name: 'mobileNumber',
    type: 'tel',
    required: true,
  },
  {
    label: 'Email Address (Optional)',
    name: 'email',
    type: 'email',
    required: false,
  },
  {
    label: "Student's Class",
    name: 'studentClass',
    type: 'select',
    options: ['11', '12', 'Dropper'],
    required: true,
  },
  {
    label: 'Exam Target',
    name: 'examTarget',
    type: 'select',
    options: ['JEE Main', 'JEE Advanced', 'NEET', 'Boards'],
    required: true,
  },
  {
    label: 'Current Coaching (Optional)',
    name: 'currentCoaching',
    type: 'text',
    required: false,
  },
  {
    label: 'Concerns / Expectations (Optional)',
    name: 'concerns',
    type: 'textarea',
    required: false,
  },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const current = questions[step];
  const isLast = step === questions.length - 1;

  const next = async () => {
    const valid = await trigger(current.name);
    if (valid && !isLast) setStep((prev) => prev + 1);
  };

  const prev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: any) => {
    if (!isValid) return;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@chemisphere.in';

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value as string;
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

    document.body.appendChild(form);
    setSubmitted(true);
    form.submit();
  };

  

  return (
    <div className=" max-w-screen h-screen overflow-hidden">
      <div className=" rounded-2xl p-8  mx-14 max-w-screen">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Admission Enquiry Form</h2>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500 text-white px-4 py-3 rounded-lg mb-4"
          >
            ✅ Your form has been submitted! Our team will reach out to you shortly.
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <label className="text-left block text-gray-700 font-medium text-lg">
                {current.label}
              </label>

              {current.type === 'select' ? (
                <select
                  {...register(current.name, { required: current.required })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  type={current.type}
                  {...register(current.name, { required: current.required })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}

              {errors[current.name] && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </motion.div>
          </AnimatePresence>
{!isLast ? (
              <button
                type="button"
                onClick={next}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isValid}
                className={`px-6 py-2 rounded-lg ${
                  isValid
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit
              </button>
            )}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={step === 0}
              className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
            >
              Back
            </button>

         
          </div>
        </form>
      </div>
    </div>
  );
}
