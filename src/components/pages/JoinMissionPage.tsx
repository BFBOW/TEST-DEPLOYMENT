import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Handshake, 
  Target, 
  Award, 
  Users2, 
  Globe, 
  HeartHandshake,
  ArrowRight,
  Info
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function JoinMissionPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-bordersubtle/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#8A9A5B_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight text-foreground">
                Partnerships That Make a <span className="text-secondary italic">Difference</span>.
              </h1>
              <p className="text-xl text-textbody/70 leading-relaxed mb-10">
                Your organization has the power to create meaningful change in our community. By partnering with the <span className="text-foreground font-semibold">Belleville Food Bank On Wheels</span>, you're not only fighting hunger but also supporting sustainable practices that uplift families and protect the planet.
              </p>
              <p className="text-lg text-textbody/50 leading-relaxed mb-12">
                Together, we can rescue surplus food, distribute meals, and bring hope to thousands of lives each week. Your partnership strengthens the foundation of a healthier, more compassionate community, ensuring that no one is left behind.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="px-8 py-6 uppercase tracking-widest bg-secondary text-white hover:bg-secondary/90" onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Become a Partner
                </Button>
                <Link to="/join-mission/evangelism" className="px-8 py-6 uppercase tracking-widest border border-secondary text-secondary hover:bg-secondary/5 transition-colors flex items-center rounded-sm font-heading">
                  Community Evangelism
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border border-secondary/30 rounded-full text-secondary text-xs uppercase tracking-[0.2em] mb-6"
            >
              Your Impact Amplified
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading mb-6 text-foreground">Creating Real Change Together</h2>
            <p className="text-textlight max-w-2xl mx-auto text-lg">
              When you partner with us, your impact resonates far beyond our walls, amplifying hope and creating real change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Community Impact",
                desc: "Join us in rescuing over 1.7 million pounds of food annually and supporting more than 3,000 families every month. Your partnership directly impacts local lives and demonstrates your commitment to social responsibility."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Brand Recognition",
                desc: "Showcase your organization as a leader in community care and sustainability. Your involvement will be highlighted through our events, social media, and campaigns, strengthening your brand's reputation as a force for good."
              },
              {
                icon: <Users2 className="w-10 h-10" />,
                title: "Employee Engagement",
                desc: "Provide your team with meaningful volunteer opportunities. Group volunteer days foster teamwork, boost morale, and inspire a shared sense of purpose within your organization."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/5 p-10 border border-bordersubtle/20 rounded-2xl hover:border-secondary transition-colors group"
              >
                <div className="text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading mb-4 text-foreground">{item.title}</h3>
                <p className="text-textlight leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section (General Statement as requested to exclude names) */}
      <section className="py-24 bg-background border-b border-bordersubtle/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading mb-8 text-foreground">Partners Making An Impact</h2>
              <p className="text-lg text-textbody/70 leading-relaxed mb-8">
                The <span className="text-foreground font-semibold">Belleville Food Bank On Wheels</span> is proud to collaborate with businesses and organizations that share our vision of a hunger-free community. Together, we've accomplished incredible milestones.
              </p>
              <p className="text-textbody/50 mb-10">
                Join the growing list of partners making a difference, and be part of a success story that transforms lives and strengthens communities.
              </p>
              <div className="flex items-center gap-4 p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                <Info className="text-secondary shrink-0" />
                <p className="text-sm italic text-textbody/60">
                  We are currently updating our partner showcase. Your organization could be featured here soon!
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-white/5 border border-dashed border-secondary/20 rounded-2xl flex items-center justify-center p-8 text-center shadow-sm">
                <p className="text-xs uppercase tracking-widest opacity-40 text-foreground">Your Logo Here</p>
              </div>
              <div className="aspect-square bg-white/5 border border-dashed border-secondary/20 rounded-2xl flex items-center justify-center p-8 text-center shadow-sm">
                <p className="text-xs uppercase tracking-widest opacity-40 text-foreground">Your Logo Here</p>
              </div>
              <div className="aspect-square bg-white/5 border border-dashed border-secondary/20 rounded-2xl flex items-center justify-center p-8 text-center shadow-sm">
                <p className="text-xs uppercase tracking-widest opacity-40 text-foreground">Your Logo Here</p>
              </div>
              <div className="aspect-square bg-white/5 border border-dashed border-secondary/20 rounded-2xl flex items-center justify-center p-8 text-center shadow-sm">
                <p className="text-xs uppercase tracking-widest opacity-40 text-foreground">Your Logo Here</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ways to Partner */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading mb-16 text-foreground">Ways to Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Sponsorships", desc: "Financial support for specific programs or events." },
              { title: "Food Donations", desc: "Corporate food drives or surplus food rescue." },
              { title: "Volunteer Days", desc: "Team building through community service." }
            ].map((way, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mb-6 border border-secondary/20">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-heading mb-4 text-foreground">{way.title}</h4>
                <p className="text-textlight text-sm max-w-xs">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="partner-form" className="py-24 bg-background border-t border-bordersubtle/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/5 border border-secondary/10 rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="text-center mb-16">
              <HeartHandshake className="mx-auto mb-6 text-secondary" size={64} />
              <h2 className="text-4xl font-heading mb-4 text-foreground">Join Our Mission</h2>
              <p className="text-textbody/60">
                We offer flexible and impactful ways for your business to partner with us, tailored to fit your goals and strengths. Join us in creating a stronger, healthier, and more compassionate community.
              </p>
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              {/* Name Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input required type="text" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input required type="text" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input required type="email" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="w-20 bg-secondary/10 border border-secondary/20 rounded-lg px-3 py-3 text-center text-sm flex items-center justify-center text-foreground">
                        +1
                      </div>
                      <input required type="tel" className="flex-grow bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Organization Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Organization Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      Organization Name <span className="text-destructive">*</span>
                    </label>
                    <input required type="text" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      Role / Affiliation <span className="text-destructive">*</span>
                    </label>
                    <input required type="text" placeholder="Ex: Owner, C-Level, Manager, etc" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Country</label>
                  <div className="w-full bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3 flex items-center gap-2 text-foreground">
                    <Globe size={16} className="text-secondary" />
                    <span>Canada</span>
                  </div>
                </div>
              </div>

              {/* Partnership Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Partnership Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                      Partnership Type <span className="text-destructive">*</span>
                    </label>
                    <select required className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors appearance-none text-foreground">
                      <option value="">Select an option</option>
                      <option>Sponsorship</option>
                      <option>Food Donation</option>
                      <option>Volunteer Program</option>
                      <option>Logistical Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">Preferred Level of Involvement</label>
                    <select className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors appearance-none text-foreground">
                      <option value="">Select an option</option>
                      <option>One-time project</option>
                      <option>Ongoing monthly support</option>
                      <option>Annual partnership</option>
                      <option>Event-based</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">Estimated Resources</label>
                    <input type="text" placeholder="What can you estimate donating?" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">Contribution Focus</label>
                    <input type="text" placeholder="How do you foresee contributing?" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                </div>
              </div>

              {/* Message Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Additional Information</h3>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 text-foreground">
                    About Your Organization <span className="text-destructive">*</span>
                  </label>
                  <textarea required rows={4} placeholder="Briefly describe your organization's mission..." className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Comments or Questions</label>
                  <textarea rows={3} placeholder="Anything else you'd like to share?" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
                </div>
              </div>

              <Button className="w-full py-8 text-lg uppercase tracking-[0.2em] font-bold shadow-xl shadow-secondary/20 group bg-secondary text-white hover:bg-secondary/90">
                Ready to Join <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
