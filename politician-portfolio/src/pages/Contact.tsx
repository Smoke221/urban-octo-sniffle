import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';
import SectionTitle from '../components/ui/SectionTitle';

interface ContactFormData {
  name: string;
  phone: string;
  category: string;
  issue: string;
}

const categories = [
  'Agriculture',
  'Education',
  'Healthcare',
  'Police & Safety',
  'Revenue & Administration',
  'Infrastructure',
  'General Query',
  'Other',
];

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['Jana Spandana Office, Sindhanur', 'Raichur District, Karnataka – 584128'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 94480 00000'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@basanagoudabadarli.com'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Sat: 10:00 AM – 5:00 PM', 'Sunday: Closed'],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form:', data);
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full mb-4">
            Contact
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white mb-4">
            Get In <span className="text-saffron">Touch</span>
          </h1>
          <p className="text-gray-300 font-inter text-base max-w-xl mx-auto leading-relaxed">
            Reach out to Basanagouda Badarli's office for support, queries, or to raise a ticket
            about any issue in Raichur district.
          </p>
        </div>
      </div>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact details */}
            <FadeInSection direction="left">
              <div>
                <SectionTitle tag="Reach Us" title="Contact" titleHighlight="Details" />
                <div className="space-y-6">
                  {contactDetails.map(detail => (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                        <detail.icon size={20} className="text-saffron" />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-navy text-sm mb-1">{detail.title}</p>
                        {detail.lines.map((line, i) => (
                          <p key={i} className="text-gray-500 font-inter text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200">
                  <div className="h-56 bg-gradient-to-br from-navy to-navy-light flex flex-col items-center justify-center text-center p-6">
                    <MapPin size={32} className="text-saffron mb-3" />
                    <p className="font-poppins font-semibold text-white text-sm mb-1">Sindhanur, Raichur</p>
                    <p className="text-gray-400 text-xs font-inter">Karnataka, India</p>
                    <a
                      href="https://maps.google.com/?q=Sindhanur,Raichur,Karnataka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-xs text-saffron hover:text-saffron-light font-inter underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Form */}
            <FadeInSection direction="right" className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-7 lg:p-10 shadow-sm border border-gray-100">
                <SectionTitle tag="Support" title="Raise a" titleHighlight="Ticket" />

                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle size={56} className="text-congress-green mx-auto mb-4" />
                    <h4 className="font-poppins font-bold text-xl text-navy mb-2">
                      Ticket Submitted!
                    </h4>
                    <p className="text-gray-500 font-inter text-sm mb-6">
                      Your concern has been registered. Our team will contact you within 2–3 working
                      days. Thank you for trusting Basanagouda Badarli's office.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins px-8 py-3 rounded-full transition-all"
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('phone', {
                            required: 'Phone is required',
                            pattern: { value: /^[6-9]\d{9}$/, message: 'Valid 10-digit mobile number' },
                          })}
                          placeholder="10-digit mobile number"
                          type="tel"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('category', { required: 'Please select a category' })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all bg-white"
                      >
                        <option value="">Select category...</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                        Describe Your Issue <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register('issue', {
                          required: 'Please describe your issue',
                          minLength: { value: 20, message: 'Please provide more details (min 20 chars)' },
                        })}
                        rows={5}
                        placeholder="Describe your issue or concern in detail..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all resize-none"
                      />
                      {errors.issue && (
                        <p className="text-red-500 text-xs mt-1">{errors.issue.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-saffron hover:bg-saffron-dark disabled:opacity-60 text-white font-semibold font-poppins py-4 rounded-xl transition-all hover:shadow-lg text-base"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                    </button>
                  </form>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
