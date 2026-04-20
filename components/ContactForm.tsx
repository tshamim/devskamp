'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  message: string
}

const services = [
  'Software Development',
  'Cloud Services (AWS / GCP)',
  'AI & Machine Learning',
  'IoT & Embedded Systems',
  'Digital Marketing & Growth',
  'Cybersecurity',
  'Data Engineering & Analytics',
  'Blockchain & Web3',
  'Staff Augmentation',
  'IT Consulting & Strategy',
  'Multiple Services / Full Partnership',
]

const budgets = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Let\'s Discuss',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (json.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again or email us directly at hello@devskamp.com')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-navy-800 border border-sky-500/30 rounded-2xl p-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-3xl mb-6">
          ✅
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-3">Message Sent!</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
          Thanks for reaching out. We've received your inquiry and will respond within 24 hours.
          Check your inbox — we've also sent you a confirmation email.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-navy-800 border border-navy-700/80 rounded-2xl p-8 relative overflow-hidden"
      noValidate
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <h3 className="font-heading font-bold text-white text-lg mb-6">Tell us about your project</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-sky-400">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="John Smith"
            className={`w-full bg-navy-900 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all ${
              errors.name ? 'border-red-500/60' : 'border-navy-700/80 focus:border-sky-500/50'
            }`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-sky-400">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
            type="email"
            placeholder="john@company.com"
            className={`w-full bg-navy-900 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all ${
              errors.email ? 'border-red-500/60' : 'border-navy-700/80 focus:border-sky-500/50'
            }`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Company Name
          </label>
          <input
            {...register('company')}
            type="text"
            placeholder="Acme Inc. (optional)"
            className="w-full bg-navy-900 border border-navy-700/80 focus:border-sky-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+1 (555) 000-0000 (optional)"
            className="w-full bg-navy-900 border border-navy-700/80 focus:border-sky-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Service of Interest <span className="text-sky-400">*</span>
          </label>
          <select
            {...register('service', { required: 'Please select a service' })}
            className={`w-full bg-navy-900 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all appearance-none ${
              errors.service ? 'border-red-500/60' : 'border-navy-700/80 focus:border-sky-500/50'
            }`}
            defaultValue=""
          >
            <option value="" disabled className="text-slate-600">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-navy-900 text-white">{s}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Project Budget
          </label>
          <select
            {...register('budget')}
            className="w-full bg-navy-900 border border-navy-700/80 focus:border-sky-500/50 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all appearance-none"
            defaultValue=""
          >
            <option value="" className="text-slate-600">Select budget range...</option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-navy-900 text-white">{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Project Description <span className="text-sky-400">*</span>
        </label>
        <textarea
          {...register('message', {
            required: 'Please describe your project',
            minLength: { value: 20, message: 'Please provide more detail (min 20 characters)' },
          })}
          rows={5}
          placeholder="Tell us about your project — what you're building, your timeline, key challenges, and what success looks like..."
          className={`w-full bg-navy-900 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none ${
            errors.message ? 'border-red-500/60' : 'border-navy-700/80 focus:border-sky-500/50'
          }`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-xs">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-200 font-heading flex items-center justify-center gap-2 text-sm"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>

      <p className="text-slate-600 text-xs text-center mt-4">
        We respond within 24 hours · No spam, ever · Your data stays private
      </p>
    </form>
  )
}
