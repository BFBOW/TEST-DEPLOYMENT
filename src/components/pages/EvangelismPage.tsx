import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Flame, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  Calendar
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function EvangelismPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000"
            alt="Community gathering"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block font-heading text-secondary text-xl mb-4 uppercase tracking-[0.3em]">Join the Mission</span>
              <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight">Community <br /><span className="text-secondary italic">Evangelism</span></h1>
              <p className="text-xl text-textbody/70 leading-relaxed mb-10">
                Spreading the Word through action, study, and community projects. Join us as we share the message of hope and faith across Belleville.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button 
                  className="px-10 py-8 text-lg uppercase tracking-widest bg-secondary text-white hover:bg-secondary/90"
                  onClick={() => document.getElementById('evangelism-signup')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Involved
                </Button>
                <Link to="/events" className="px-10 py-8 border border-bordersubtle text-primary font-heading uppercase tracking-widest hover:bg-secondary/5 transition-colors flex items-center">
                  View Events
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000"
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <Flame className="mb-4 w-8 h-8" />
                <p className="font-heading text-lg italic">"Go into all the world and preach the gospel to all creation."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6">Ways to Serve</h2>
            <p className="text-textbody/60 max-w-2xl mx-auto">From deep Bible study to hands-on community projects, find the path that speaks to your heart.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={32} />,
                title: "Bible Study Groups",
                desc: "Join our weekly gatherings to dive deep into the Word, share insights, and grow together in faith."
              },
              {
                icon: <Globe size={32} />,
                title: "Outreach Projects",
                desc: "Participate in local missions, from neighborhood cleanups to community workshops that share His love."
              },
              {
                icon: <Users size={32} />,
                title: "Street Ministry",
                desc: "Be the hands and feet of Jesus by meeting people where they are, offering prayer and a listening ear."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-bordersubtle/20 bg-secondary/5 rounded-3xl hover:border-secondary/30 transition-colors group"
              >
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-heading mb-4 text-foreground">{item.title}</h3>
                <p className="text-textbody/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evangelism Signup */}
      <section id="evangelism-signup" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading mb-6">Start Your Journey</h2>
            <p className="text-textbody/80">Sign up to receive updates on upcoming Bible studies, evangelism projects, and training sessions.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 focus:border-secondary outline-none transition-colors text-white placeholder:text-white/40" />
              <input type="text" placeholder="Last Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 focus:border-secondary outline-none transition-colors text-white placeholder:text-white/40" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 focus:border-secondary outline-none transition-colors text-white placeholder:text-white/40" />
            
            <div className="space-y-4">
              <p className="text-sm font-heading uppercase tracking-widest text-secondary">Interests</p>
              <div className="grid grid-cols-2 gap-4">
                {['Bible Study', 'Community Projects', 'Street Ministry', 'Youth Outreach', 'Digital Evangelism'].map((interest) => (
                  <label key={interest} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="accent-secondary w-5 h-5" />
                    <span className="text-textbody/80 group-hover:text-white transition-colors">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button className="w-full py-8 text-lg uppercase tracking-[0.2em] font-bold bg-secondary text-white hover:bg-secondary/90 transition-all mt-8">
              Join the Mission <ArrowRight className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Back to Join Mission */}
      <section className="py-12 text-center">
        <Link to="/join-mission" className="text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 font-heading">
          <ArrowRight className="rotate-180 w-4 h-4" /> Back to Join Our Mission
        </Link>
      </section>
    </div>
  );
}
