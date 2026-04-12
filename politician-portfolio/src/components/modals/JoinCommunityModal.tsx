import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  district: string;
  message: string;
}

interface JoinCommunityModalProps {
  open: boolean;
  onClose: () => void;
}

export default function JoinCommunityModal({ open, onClose }: JoinCommunityModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Join Community form:', data);
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
                <p className="font-kannada text-saffron text-sm mb-1">ನಮ್ಮ ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ</p>
                <h3 className="font-poppins font-bold text-xl text-white">Join Our Community</h3>
                <p className="text-gray-300 text-sm font-inter mt-1">
                  Be part of Karnataka's positive change movement
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
                    Welcome to the Community!
                  </h4>
                  <p className="text-gray-500 font-inter text-sm mb-6">
                    Thank you for joining Basanagouda Badarli's movement for a better Karnataka. We
                    will be in touch with you soon.
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

                  {/* District */}
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                      District / Taluk <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('district', { required: 'District is required' })}
                      placeholder="e.g. Sindhanur, Raichur District"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                    />
                    {errors.district && (
                      <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder="Any message for Basanagouda Badarli..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all resize-none"
                    />
                  </div>

                  <p className="text-xs text-gray-400 font-inter">
                    By joining, you agree to receive updates about Badarli's work and events. Your
                    information will not be shared with third parties.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-saffron hover:bg-saffron-dark disabled:opacity-60 text-white font-semibold font-poppins py-3.5 rounded-full transition-all hover:shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Community'}
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
