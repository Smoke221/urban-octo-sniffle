import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface TicketFormData {
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
  'Other',
];

interface RaiseTicketModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RaiseTicketModal({ open, onClose }: RaiseTicketModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TicketFormData>();

  const onSubmit = async (data: TicketFormData) => {
    console.log('Raise Ticket form:', data);
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    reset();
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy px-6 py-5 flex items-start justify-between">
              <div>
                <p className="font-kannada text-saffron text-sm mb-1">ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ</p>
                <h3 className="font-poppins font-bold text-xl text-white">Raise a Support Ticket</h3>
                <p className="text-gray-300 text-sm font-inter mt-1">
                  We are here to help. Share your issue with us.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/60 hover:text-white mt-0.5 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={56} className="text-congress-green mx-auto mb-4" />
                  <h4 className="font-poppins font-bold text-xl text-navy mb-2">
                    Ticket Raised Successfully!
                  </h4>
                  <p className="text-gray-500 font-inter text-sm mb-6">
                    Your concern has been registered. Our team will contact you within 2–3 working
                    days. Thank you for trusting Basanagouda Badarli's office.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins px-8 py-3 rounded-full transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
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

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Phone is required',
                        pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' },
                      })}
                      placeholder="10-digit mobile number"
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Category */}
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
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
                    )}
                  </div>

                  {/* Issue */}
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                      Describe Your Issue <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('issue', {
                        required: 'Please describe your issue',
                        minLength: { value: 20, message: 'Please provide more details (min 20 characters)' },
                      })}
                      rows={4}
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
                    className="w-full bg-saffron hover:bg-saffron-dark disabled:opacity-60 text-white font-semibold font-poppins py-3.5 rounded-full transition-all hover:shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
