import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Home, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function HolisticCarePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518391846015-55a9cb0bb4ce?q=80&w=2070&auto=format&fit=crop"
            alt="Compassionate care"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block font-heading text-secondary text-xl mb-4 uppercase tracking-[0.3em]">Spiritual Support</span>
              <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">Holistic Care & <span className="text-secondary italic">Visitation</span></h1>
              <p className="text-2xl text-textbody/90 leading-relaxed mb-10 drop-shadow-md">
                Healing the whole person through faith-based counseling, compassionate presence, and dedicated visitation for those who cannot come to us.
              </p>
              <Button 
                className="px-10 py-8 text-lg uppercase tracking-widest bg-secondary text-white hover:bg-secondary/90"
                onClick={() => document.getElementById('care-request')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Support
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex p-4 bg-secondary/10 rounded-2xl text-secondary">
                <MessageCircle size={32} />
              </div>
              <h2 className="text-4xl font-heading text-foreground">Faith-Based Counseling</h2>
              <p className="text-lg text-textbody/70 leading-relaxed">
                We offer individual and family counseling rooted in biblical principles. Our compassionate counselors provide a safe space to navigate life's challenges, find spiritual clarity, and experience emotional healing through the grace of God.
              </p>
              <ul className="space-y-4">
                {['Individual Spiritual Guidance', 'Family & Marriage Support', 'Grief & Loss Counseling', 'Youth Mentorship'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-textbody/80">
                    <CheckCircle2 className="text-secondary w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex p-4 bg-secondary/10 rounded-2xl text-secondary">
                <Home size={32} />
              </div>
              <h2 className="text-4xl font-heading text-foreground">Visitation Ministry</h2>
              <p className="text-lg text-textbody/70 leading-relaxed">
                No one should feel forgotten. Our visitation team brings the ministry to those who are shut-in, sick, or hospitalized. We provide prayer, companionship, and a tangible connection to the community for those unable to attend in person.
              </p>
              <ul className="space-y-4">
                {['Hospital Bedside Visits', 'Home Visits for Shut-ins', 'Nursing Home Outreach', 'Phone Call Ministry'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-textbody/80">
                    <CheckCircle2 className="text-secondary w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Care Request Form */}
      <section id="care-request" className="py-24 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background border border-bordersubtle/20 rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="text-center mb-16">
              <Heart className="mx-auto mb-6 text-secondary" size={64} />
              <h2 className="text-4xl font-heading mb-4 text-foreground">Request Holistic Support</h2>
              <p className="text-textbody/60">
                If you or a loved one needs counseling or a visit, please let us know. All requests are handled with the utmost confidentiality and prayerful consideration.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Full Name <span className="text-destructive">*</span></label>
                  <input required type="text" className="w-full bg-white/5 border border-bordersubtle/30 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Phone Number <span className="text-destructive">*</span></label>
                  <input required type="tel" className="w-full bg-white/5 border border-bordersubtle/30 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-foreground">Type of Support Needed <span className="text-destructive">*</span></label>
                <select required className="w-full bg-white/5 border border-bordersubtle/30 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors appearance-none text-foreground">
                  <option value="">Select an option</option>
                  <option>Individual Counseling</option>
                  <option>Family Counseling</option>
                  <option>Hospital Visit</option>
                  <option>Home Visit (Shut-in)</option>
                  <option>Prayer Request Only</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-foreground">Brief Description of Need</label>
                <textarea rows={4} placeholder="How can we best support you?" className="w-full bg-white/5 border border-bordersubtle/30 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
              </div>

              <div className="p-6 bg-secondary/5 rounded-xl border border-secondary/10">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-secondary shrink-0 mt-1" />
                  <p className="text-sm text-textbody/60 leading-relaxed">
                    Your privacy is sacred. Information shared here is only accessible to our pastoral care team and is used solely to coordinate the support you've requested.
                  </p>
                </div>
              </div>

              <Button className="w-full py-8 text-lg uppercase tracking-[0.2em] font-bold shadow-xl shadow-secondary/20 group bg-secondary text-white hover:bg-secondary/90">
                Submit Request <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Support */}
      <section className="py-12 text-center">
        <Link to="/find-support" className="text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 font-heading">
          <ArrowRight className="rotate-180 w-4 h-4" /> Back to All Support Services
        </Link>
      </section>
    </div>
  );
}
