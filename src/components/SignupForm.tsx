import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="email" className="block text-xs font-bold text-secondary mb-3 uppercase tracking-[0.2em]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-white/5 border border-bordersubtle/30 px-6 py-4 rounded-sm font-paragraph text-foreground placeholder:text-textbody/20 focus:outline-none focus:border-secondary transition-all"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 bg-secondary text-white font-paragraph font-bold uppercase tracking-widest rounded-sm hover:bg-secondary/90 disabled:opacity-50 transition-all shadow-lg shadow-secondary/10"
        >
          {status === 'loading' ? 'Processing...' : 'Subscribe'}
        </button>
        
        {status === 'success' && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-paragraph text-sm text-center mt-4"
          >
            Welcome to our digital ministry.
          </motion.p>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
