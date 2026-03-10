import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  History, 
  Quote, 
  TrendingUp, 
  Utensils, 
  ShieldCheck, 
  Leaf, 
  BookOpen, 
  Users, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function WhoWeArePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-bordersubtle/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-[0.9] text-foreground">
                Guided by Faith, <br />
                <span className="text-secondary italic">Nourishing</span> with Love
              </h1>
              <p className="text-xl text-textbody/70 leading-relaxed mb-10">
                The Belleville Food Bank On Wheels began as an act of faith, a response to the growing need in our community. Inspired by Hebrews 13:1—“Let brotherly love continue”—our mission has always been about more than food. It’s about restoring dignity, offering hope, and sharing God’s love with everyone who walks through our doors.
              </p>
              <p className="text-lg text-textbody/50 max-w-2xl mx-auto">
                What started as a small outreach has grown into a lifeline for thousands, serving over 3,000 families monthly across Belleville and the GTA. Through God’s grace and the kindness of volunteers, donors, and partners, we’ve become a beacon of hope for those in need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="absolute -top-10 -left-10 w-20 h-20 text-secondary/10" />
            <h2 className="text-4xl md:text-5xl font-heading mb-6 italic text-secondary">
              “The Need is Great, The Need is Real.”
            </h2>
            <p className="text-xl font-heading uppercase tracking-widest opacity-60 text-foreground">
              — Marcia White - CBC News Toronto
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-3 bg-secondary/10 rounded-full text-secondary mb-6">
                <History size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading mb-8 text-foreground">Changing by Faith.</h2>
              <p className="text-lg text-textbody/70 leading-relaxed mb-8">
                TBD
              </p>
              
              <div className="space-y-8">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-secondary">Key Milestones</h3>
                {[
                  { year: '20xx', text: 'Opened our first standalone location.' },
                  { year: '2018', text: 'Partnered with Second Harvest to expand food rescue efforts.' },
                  { year: '2023', text: 'Distributed over 48,428 meals in six months, thanks to community support.' }
                ].map((milestone, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="text-2xl font-heading text-secondary shrink-0">{milestone.year}</div>
                    <div className="h-px bg-secondary/20 flex-grow mt-4" />
                    <p className="text-textbody/60 max-w-xs">{milestone.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-xl font-heading italic text-secondary">
                Through each step, our focus has remained on serving with dignity and love.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
                alt="Community history"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Serve Section */}
      <section className="py-24 bg-background text-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-heading mb-8 opacity-5 uppercase tracking-[0.5em] text-secondary"
            >
              Why We Serve
            </motion.h2>
            <h3 className="text-4xl font-heading mb-6 text-foreground">Hunger is More Than a Lack of Food</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              "In 2022, 18% of Canadian families reported experiencing some level of food insecurity, an increase from 16% in 2021.",
              "Approximately 18.7% of Ontario households faced food insecurity, reflecting a growing concern within the province.",
              "In the fiscal year ending June 2024, food bank visits in Toronto surpassed 2.5 million, marking a 51% increase compared to the previous year.",
              "In 2022, 41% of female lone-parent families in Canada experienced food insecurity, underscoring significant disparities."
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/5 border border-bordersubtle/20 p-8 rounded-2xl shadow-sm"
              >
                <TrendingUp className="text-secondary mb-4" />
                <p className="text-textlight leading-relaxed">{stat}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h4 className="text-2xl font-heading text-secondary mb-6">AT BFBOW.</h4>
            <p className="text-xl text-textlight leading-relaxed">
              We believe in addressing these challenges with compassion, providing not only meals but also a sense of belonging and care. Every meal shared is a step toward breaking the cycle of poverty.
            </p>
          </div>
        </div>
      </section>

      {/* Faith Section */}
      <section className="py-24 bg-background border-b border-bordersubtle/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-heading text-xl mb-8 opacity-40 uppercase tracking-[0.2em]"
            >
              Hebrews 13:16 "And do not forget to do good and to share with others, for with such sacrifices God is pleased"
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-heading mb-8 text-foreground">Faith That Moves Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading text-secondary">Guided by Faith, Empowered by Action</h3>
              <p className="text-textbody/70 leading-relaxed">
                Our work is inspired by the teachings of Christ and the belief that faith without action is incomplete. At the Belleville Food Bank On Wheels, we turn prayer into purpose and love into service. Every box packed, every meal shared, and every life touched is a testament to God’s calling.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading text-secondary">Faith in Action, Love in Every Meal</h3>
              <p className="text-textbody/70 leading-relaxed">
                We believe that true faith is demonstrated through serving others. That’s why our programs are rooted in compassion and inclusivity, offering:
              </p>
              <ul className="space-y-4 text-sm text-textbody/60">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Over 48,428 meals distributed in the last six months.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> 516,813 pounds of rescued food repurposed.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Programs for children, seniors, and the homeless.</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading text-secondary">Welcoming Everyone With Open Hearts</h3>
              <p className="text-textbody/70 leading-relaxed">
                Inspired by Proverbs 19:17 “Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.”—we serve all people, regardless of background, faith, or circumstance.
              </p>
              <p className="text-textbody/50 italic">
                We’ve built a community where no one feels alone, and every act of service reflects the unconditional love of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-secondary mb-6">Volunteers Making The Difference</h3>
              <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight text-foreground">Powered by Volunteer Spirit</h2>
              <p className="text-xl text-textlight mb-10 leading-relaxed">
                Be Apart of Something Bigger. Our volunteers are the backbone of everything we do:
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary border border-secondary/20">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-foreground mb-2">850+ hours</h4>
                    <p className="text-textlight">Contributed weekly to sorting, packing, and distributing food.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary border border-secondary/20">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-foreground mb-2">3,000+ Families</h4>
                    <p className="text-textlight">Volunteers ensure these families receive the support they need each week.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary border border-secondary/20">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-foreground mb-2">Strengthening Community</h4>
                    <p className="text-textlight">Every act of service strengthens our community and shares hope with those in need.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-square shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=1000"
                alt="Volunteers working together"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading mb-8 text-foreground">Meet the People Behind the Purpose</h2>
            <p className="text-xl text-textbody/70 max-w-3xl mx-auto leading-relaxed">
              At the Belleville Food Bank On Wheels, our team is united by a shared passion for service. From our leadership to our volunteers, every member brings dedication, compassion, and faith to their role. Together, we make a difference every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-secondary mb-4">The Founding Team</h3>
            <h2 className="text-4xl font-heading text-foreground">Meet The Founding Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-secondary/10 rounded-2xl mb-6 overflow-hidden relative border border-secondary/10">
                  <div className="absolute inset-0 flex items-center justify-center text-secondary/20">
                    <Users size={64} />
                  </div>
                </div>
                <div className="h-8 w-48 bg-secondary/10 rounded mb-2" /> {/* Placeholder for name */}
                <div className="h-4 w-32 bg-secondary/5 rounded" /> {/* Placeholder for title */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
