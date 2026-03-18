import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/button';

export default function EventsPage() {
  const events = [
    {
      title: 'Weekly Food Distribution',
      date: 'Every Wednesday',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Community Center',
      desc: 'Join us for our weekly distribution of fresh produce and pantry staples to the community.'
    },
    {
      title: 'Community Bible Study',
      date: 'Every Tuesday',
      time: '6:30 PM - 8:00 PM',
      location: 'Belleville Food Bank On Wheels Chapel',
      desc: 'A time of spiritual growth and fellowship as we dive into the scriptures together.'
    },
    {
      title: 'Volunteer Orientation',
      date: 'First Saturday of Month',
      time: '9:00 AM - 11:00 AM',
      location: 'Hub Office',
      desc: 'New to Belleville Food Bank On Wheels? Come learn how you can make an impact in our community.'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506784919141-1750400da747?q=80&w=2068&auto=format&fit=crop"
            alt="Calendar and planning"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-9xl font-heading mb-8 leading-[0.9] text-foreground drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                Community <br />
                <span className="text-secondary italic">Gatherings</span>
              </h1>
              <p className="text-2xl text-textbody/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Join us for our community events, food distribution programs, and special gatherings. Every event is an opportunity to grow together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 border border-secondary/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center hover:border-secondary transition-colors shadow-sm"
            >
              <div className="bg-secondary text-white p-6 rounded-xl text-center min-w-[140px]">
                <div className="text-sm uppercase tracking-widest opacity-80 mb-1">Schedule</div>
                <div className="text-lg font-bold leading-tight">{event.date}</div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-heading mb-4 text-foreground">{event.title}</h3>
                <p className="text-textbody/70 mb-6">{event.desc}</p>
                <div className="flex flex-wrap gap-6 text-sm text-textbody/50">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-secondary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    {event.location}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <Button variant="outline" className="w-full md:w-auto uppercase tracking-widest border-primary/20 text-primary hover:bg-primary/5">
                  Register
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
