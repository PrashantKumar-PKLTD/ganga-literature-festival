import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Bookmark, Send, CheckCircle, AlertCircle, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export default function RegistrationCard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    workshops: [],
    message: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name !== 'agreeTerms') {
      const updatedWorkshops = checked
        ? [...formData.workshops, value]
        : formData.workshops.filter((w) => w !== value);
      setFormData((prev) => ({ ...prev, workshops: updatedWorkshops }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (currentStep) => {
    const tempErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        tempErrors.fullName = 'Full Name is required';
      } else if (formData.fullName.trim().length < 3) {
        tempErrors.fullName = 'Name must be at least 3 characters long';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        tempErrors.email = 'Email address is required';
      } else if (!emailRegex.test(formData.email.trim())) {
        tempErrors.email = 'Please provide a valid email format';
      }
    }

    if (currentStep === 2) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!formData.phone.trim()) {
        tempErrors.phone = 'Mobile number is required';
      } else if (!phoneRegex.test(formData.phone.trim().replace(/[-\s]/g, ''))) {
        tempErrors.phone = 'Please provide a valid 10-digit phone number';
      }

      if (!formData.category) {
        tempErrors.category = 'Please select a registration category';
      }
    }

    if (currentStep === 3) {
      if (!formData.agreeTerms) {
        tempErrors.agreeTerms = 'You must agree to the event guidelines to claim a seat';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          category: '',
          workshops: [],
          message: '',
          agreeTerms: false,
        });
        setStep(1);
        setErrors({});
      }, 2000);
    }
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <section id="register" className="py-20 bg-mesh-gradient overflow-hidden relative">
      
      {/* Decorative meshes */}
      <div className="absolute right-0 top-0 opacity-5 w-96 h-96 bg-radial-gradient from-secondary to-transparent pointer-events-none scale-150 blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-hidden">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Secure Entry
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 mt-4 tracking-tight">
            Claim Your Premium Badge
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-5 font-sans leading-relaxed text-sm sm:text-base">
            Claim complimentary admission. Passes represent access to all main stage keynote segments, workshop tables, and riverfront performances.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative rounded-3xl border border-white/20 bg-white/75 backdrop-blur-md p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[460px]">
          
          {/* Progress Banner */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              <span>Step {step} of 3</span>
              <span className="text-primary">{Math.round(progressPercentage)}% Complete</span>
            </div>
            
            {/* Smooth gold loader bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-secondary"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            
            {/* Step 1: Contact Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-bold font-display text-gray-900">Personal Identification</h3>
                  <p className="text-xs text-gray-400 font-sans">Provide your credentials as you wish them to reflect on the official badge.</p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400"><User className="w-4 h-4" /></div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/70 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all ${
                          errors.fullName ? 'border-red-500 bg-red-50/10' : 'border-gray-200'
                        }`}
                        placeholder="e.g. Dr. Ramesh Prasad"
                      />
                    </div>
                    {errors.fullName && <span className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-1.5"><AlertCircle className="w-3.5 h-3.5" />{errors.fullName}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400"><Mail className="w-4 h-4" /></div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/70 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all ${
                          errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-200'
                        }`}
                        placeholder="name@university.edu"
                      />
                    </div>
                    {errors.email && <span className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-1.5"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</span>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Event Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-bold font-display text-gray-900">Attendance Options</h3>
                  <p className="text-xs text-gray-400 font-sans">Help organizers assign session seating thresholds.</p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Phone input */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Mobile Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400"><Phone className="w-4 h-4" /></div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/70 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all ${
                            errors.phone ? 'border-red-500 bg-red-50/10' : 'border-gray-200'
                          }`}
                          placeholder="10-digit mobile"
                        />
                      </div>
                      {errors.phone && <span className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-1.5"><AlertCircle className="w-3.5 h-3.5" />{errors.phone}</span>}
                    </div>

                    {/* Category input */}
                    <div className="flex flex-col">
                      <label htmlFor="category" className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Select Category</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400"><Bookmark className="w-4 h-4" /></div>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/70 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer ${
                            errors.category ? 'border-red-500 bg-red-50/10' : 'border-gray-200'
                          }`}
                        >
                          <option value="" disabled>Select Category</option>
                          <option value="Student">Student Delegate</option>
                          <option value="Scholar">Research Scholar</option>
                          <option value="Professional">Corporate / Bureaucrat</option>
                          <option value="Sponsor">Sponsor Representative</option>
                        </select>
                      </div>
                      {errors.category && <span className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-1.5"><AlertCircle className="w-3.5 h-3.5" />{errors.category}</span>}
                    </div>
                  </div>

                  {/* Custom Workshop check list */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Workshop Interests (Optional)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { val: 'preservation', text: 'Manuscript Digital Preservation' },
                        { val: 'writing', text: 'Creative Fiction & Poetry Craft' },
                        { val: 'publishing', text: 'Literary Agent Pitch Tables' },
                        { val: 'translation', text: 'Multilingual Translating Methods' },
                      ].map((work) => (
                        <label
                          key={work.val}
                          className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer select-none bg-white transition-all ${
                            formData.workshops.includes(work.val)
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="workshops"
                            value={work.val}
                            checked={formData.workshops.includes(work.val)}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-xs font-semibold">{work.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* Step 3: Message & Consent */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-bold font-display text-gray-900">Message & Consent</h3>
                  <p className="text-xs text-gray-400 font-sans">Verify your details and accept the assembly guidelines.</p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Organizing Inquiry (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all resize-none font-sans text-sm"
                      placeholder="e.g. specific physical access requirements, dietary preferences..."
                    />
                  </div>

                  {/* Agree guidelines checks */}
                  <div className="flex flex-col">
                    <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer select-none bg-white transition-all ${
                      formData.agreeTerms ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-0.5"
                      />
                      <span className="text-xs font-semibold text-gray-600 leading-relaxed font-sans">
                        I hereby declare that I will adhere to the official summit guidelines and coordinate badges appropriately. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.agreeTerms && <span className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-1.5"><AlertCircle className="w-3.5 h-3.5" />{errors.agreeTerms}</span>}
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Action Row */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100 relative z-10">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-600 transition-all focus:outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow transition-all focus:outline-none"
              >
                Next Step
                <ArrowRight className="w-4 h-4 text-secondary" />
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all focus:outline-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Filing Credentials...
                  </>
                ) : (
                  <>
                    Complete Registration
                    <Send className="w-4 h-4 text-secondary" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Success Overlay Modal */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 rounded-3xl bg-[#031326] flex flex-col items-center justify-center text-center p-8 text-white select-none"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                >
                  <CheckCircle className="w-20 h-20 text-secondary mb-6 animate-float" />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                  Badge Dispatched!
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm mt-4 max-w-md leading-relaxed font-sans">
                  Your complimentary delegate pass and Gyan Bhawan entry bar-code have been filed and sent to your email. We look forward to hosting you on the banks of Ganga!
                </p>

                <button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  className="mt-8 px-6 py-2.5 bg-secondary text-primary font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-secondary-hover active:scale-[0.98] transition-all shadow-md focus:outline-none"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
