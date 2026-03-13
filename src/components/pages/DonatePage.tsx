import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  TrendingUp, 
  Utensils, 
  Leaf, 
  Users, 
  CreditCard, 
  Calendar, 
  Building2,
  ArrowRight,
  Mail,
  MapPin
} from 'lucide-react';
import { Button } from '../ui/button';

export default function DonatePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?q=80&w=2070&auto=format&fit=crop"
            alt="Donation hands"
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
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-[0.9] text-foreground">
                Give Today, <br />
                <span className="text-secondary italic">Change</span> Tomorrow.
              </h1>
              <p className="text-xl text-textbody/70 leading-relaxed mb-8">
                Every dollar you give helps us provide nutritious meals and essential support to families in need. Monetary donations allow us to respond quickly to community needs, source fresh produce, and expand our programs to reach more people.
              </p>
              <p className="text-lg text-textbody/50 italic mb-10">
                With your generosity, we can turn hunger into hope.
              </p>
              <Button 
                className="px-10 py-8 text-lg uppercase tracking-[0.2em] bg-secondary text-white hover:bg-secondary/90"
                onClick={() => document.getElementById('giving-options')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Donate Now
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                alt="Giving back to community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md border border-secondary/10 rounded-2xl">
                <p className="text-secondary font-heading text-2xl mb-2">Impact Highlight</p>
                <p className="text-textbody/60 text-sm">Your donation is the most effective way to make a lasting difference in our community.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stretching Every Dollar Section */}
      <section className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border border-secondary/30 rounded-full text-secondary text-xs uppercase tracking-[0.2em] mb-6"
            >
              Stretching Every Dollar
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Your contributions have a far-reaching impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "$1 = 3 Meals",
                desc: "$1 can help provide 3 meals to families in need."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Fresh Rescue",
                desc: "Donations allow us to rescue and purchase fresh, nutritious food."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Sustainability",
                desc: "Financial support ensures our programs remain sustainable and impactful."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lasting Change",
                desc: "Your donation is the most effective way to make a lasting difference."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 border border-bordersubtle/20 rounded-2xl text-center hover:border-secondary transition-colors"
              >
                <div className="text-secondary mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading mb-4">{item.title}</h3>
                <p className="text-textlight text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Gift Helps To Section */}
      <section className="py-24 bg-background border-b border-bordersubtle/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading mb-20 text-center text-foreground">Your Gift Helps To</h2>
          
          <div className="space-y-12">
            {[
              {
                stat: "250,000+",
                label: "Meals Annually",
                title: "Provide over 250,000 meals annually",
                desc: "Each meal represents more than nourishment—it offers comfort, stability, and hope to individuals and families during challenging times. Your generosity ensures no one in our community has to face hunger alone.",
                icon: <Utensils className="w-12 h-12" />
              },
              {
                stat: "380,000",
                label: "Pounds Rescued",
                title: "Rescue and distribute 380,000 annually pounds of food",
                desc: "By turning surplus food into sustenance, your donations help us fight waste and feed thousands. This not only fills empty plates but also supports a more sustainable future.",
                icon: <Leaf className="w-12 h-12" />
              },
              {
                stat: "Essential",
                label: "Resources",
                title: "Support families with essential resources",
                desc: "Beyond food, your contributions help fund vital programs that empower individuals, from job training to community support initiatives. Together, we address the root causes of insecurity.",
                icon: <Users className="w-12 h-12" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-center bg-secondary/5 p-8 md:p-12 rounded-3xl border border-secondary/10 shadow-sm"
              >
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div className="text-6xl font-heading text-secondary mb-2">{item.stat}</div>
                  <div className="text-sm uppercase tracking-[0.3em] text-textbody/40">{item.label}</div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-secondary/10 rounded-full text-secondary border border-secondary/20">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-heading text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-textbody/70 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Options Section */}
      <section id="giving-options" className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading mb-8 opacity-20 uppercase tracking-[0.5em]"
            >
              Donate
            </motion.h2>
            <p className="text-xl text-textbody/80 max-w-3xl mx-auto leading-relaxed">
              We believe giving should be as meaningful as the impact it creates, so we've made it simple for you to support our mission in a way that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CreditCard className="w-10 h-10" />,
                title: "One-Time Donation",
                desc: "Make a powerful and immediate difference today. Every dollar brings hope, nourishment, and dignity to those who need it most."
              },
              {
                icon: <Calendar className="w-10 h-10" />,
                title: "Monthly Giving",
                desc: "Join a dedicated community of donors committed to creating lasting change. With your steady support, we can ensure no family is left behind."
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Corporate Matching",
                desc: "Double the impact of your generosity through your employer's matching program, extending your gift to help even more lives."
              }
            ].map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background/10 border border-white/10 p-10 rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-heading mb-4 text-white">{option.title}</h3>
                <p className="text-textbody/70 text-sm leading-relaxed mb-8">
                  {option.desc}
                </p>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-primary uppercase tracking-widest">
                  Select Option
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-textbody/60 italic">
              No matter how you choose to give, your contribution is a beacon of hope, transforming lives and strengthening our community. Together, we can create a future where no one faces hunger alone.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Section */}
      <section className="py-24 bg-background border-t border-bordersubtle/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading mb-8 text-foreground">Want to Make a Difference?</h2>
            <p className="text-xl text-textbody/70 mb-12 leading-relaxed">
              Your donation helps fill shelves, fridges, and hearts. Whether it's a one-time gift or ongoing support, every dollar plants seeds of hope for a neighbor in need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-secondary/5 border border-secondary/10 p-8 rounded-2xl flex flex-col items-center shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 border border-secondary/20">
                  <Mail size={24} />
                </div>
                <h4 className="font-heading text-xl mb-4 text-foreground">E-Transfer</h4>
                <p className="text-textbody/50 text-sm mb-2">Send transfers to:</p>
                <p className="font-bold text-lg text-foreground">TBD</p>
              </div>
              
              <div className="bg-secondary/5 border border-secondary/10 p-8 rounded-2xl flex flex-col items-center shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 border border-secondary/20">
                  <MapPin size={24} />
                </div>
                <h4 className="font-heading text-xl mb-4 text-foreground">Physical Donations</h4>
                <p className="text-textbody/50 text-sm mb-6 text-center">Visit our Contact page for drop-off details and hours.</p>
                <Button variant="outline" className="uppercase tracking-widest text-xs border-primary/20 text-foreground hover:bg-primary/5">
                  View Drop-off Details <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>

            <p className="text-2xl font-heading text-secondary italic">
              Thank you for helping us feed, teach, and empower — together. 🙏
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
