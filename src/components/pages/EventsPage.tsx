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
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading mb-6 text-foreground"
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-textbody/70 max-w-2xl mx-auto"
          >
            Join us for our community events, food distribution programs, and special gatherings.
          </motion.p>
        </div>

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
