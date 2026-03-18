import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Users, BookOpen, ArrowRight, Leaf, Utensils, Mail, ShieldAlert, Recycle, GraduationCap, HeartPulse, Heart } from 'lucide-react';
import { Image } from '../ui/image';

// --- Types & Interfaces ---
interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon: React.ReactNode;
  index: number;
  link: string;
}

interface EventItemProps {
  date: string;
  title: string;
  location: string;
  time: string;
}

// --- Components ---

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, index, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 border border-bordersubtle/20 bg-white/50 hover:bg-white/80 transition-colors duration-500 rounded-sm overflow-hidden shadow-sm"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="mb-6 text-secondary inline-block p-3 bg-secondary/10 rounded-full border border-secondary/20">
          {icon}
        </div>
        <h3 className="font-bold-heading text-2xl text-primary mb-4">{title}</h3>
        <p className="font-bold-body text-textbody/70 leading-relaxed mb-4">
          {description}
        </p>
        
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-textbody/50">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link to={link} className="flex items-center text-sm font-bold text-secondary uppercase tracking-widest group-hover:text-primary transition-colors">
          Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const EventRow: React.FC<EventItemProps> = ({ date, title, location, time }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-bordersubtle/10 group hover:bg-secondary/5 transition-colors px-4"
    >
      <div className="flex items-start md:items-center gap-6 mb-4 md:mb-0">
        <span className="font-bold-heading text-3xl text-secondary w-24">{date}</span>
        <div>
          <h4 className="font-bold-heading text-xl text-primary group-hover:text-secondary transition-colors">{title}</h4>
          <p className="font-bold-body text-sm text-textbody/60 mt-1">{location}</p>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
        <span className="font-bold-body text-sm text-textbody/80 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">{time}</span>
        <button className="p-2 rounded-full border border-bordersubtle/30 text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="bg-background overflow-clip selection:bg-secondary selection:text-white font-bold-body">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row border-b border-bordersubtle/20">
        
        {/* Left Panel: Content */}
        <div className="w-full lg:w-1/2 bg-primary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-secondary"></span>
              <span className="font-bold-body text-sm uppercase tracking-[0.2em] text-secondary">Belleville Food Bank On Wheels</span>
            </div>
            
            <h1 className="font-bold-heading text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.95] mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Nourishing <br />
              <span className="text-secondary italic">Body</span> & Soul
            </h1>
            
            <p className="font-bold-body text-xl md:text-2xl text-textbody/90 leading-relaxed mb-12 max-w-xl drop-shadow-md">
              A sanctuary where faith meets action. We provide essential sustenance, spiritual growth, and a compassionate community for all who seek it.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link 
                to="/find-support"
                className="group relative px-8 py-4 bg-buttonbackground text-buttonforeground font-bold-body text-sm uppercase tracking-widest overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">Find Support</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              
              <Link 
                to="/events"
                className="group px-8 py-4 border border-bordersubtle text-primary-foreground font-bold-body text-sm uppercase tracking-widest hover:bg-bordersubtle/10 transition-colors"
              >
                View Calendar
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Panel: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto overflow-hidden bg-[#3A4A3A]">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <Image 
              src="https://static.wixstatic.com/media/1560bb_7b29c69f0f9246ae8c7c3d647226d2aa~mv2.png?originWidth=1280&originHeight=704"
              alt="Fresh produce and community gathering"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-primary/20" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-12 left-12 lg:left-12 bg-background/90 backdrop-blur-md p-6 border border-bordersubtle/30 max-w-xs"
          >
            <span className="block font-bold-heading text-secondary text-lg mb-1">Next Distribution</span>
            <span className="block font-bold-body text-textbody text-sm mb-3">Join us this Saturday for our weekly community meal.</span>
            <Link to="/events" className="text-xs uppercase tracking-widest text-primary-foreground border-b border-primary-foreground/50 pb-1 hover:text-white hover:border-white transition-colors">
              Get Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- MARQUEE SEPARATOR --- */}
      <div className="w-full bg-secondary py-4 overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-12 px-6"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-bold-heading text-2xl text-secondary-foreground/90">Faith in Action</span>
              <span className="w-2 h-2 rounded-full bg-secondary-foreground/50" />
              <span className="font-bold-heading text-2xl text-secondary-foreground/90">Community Service</span>
              <span className="w-2 h-2 rounded-full bg-secondary-foreground/50" />
              <span className="font-bold-heading text-2xl text-secondary-foreground/90">Spiritual Growth</span>
              <span className="w-2 h-2 rounded-full bg-secondary-foreground/50" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- MISSION & SERVICES (Sticky Layout) --- */}
      <section className="w-full bg-background py-24 lg:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Sticky Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-bold-heading text-4xl md:text-5xl text-foreground mb-8 leading-tight drop-shadow-lg">
                    Serving the <br />
                    <span className="text-secondary">Whole Person</span>
                  </h2>
                  <h3 className="font-bold-body text-textbody/70 text-lg mb-10 leading-relaxed">
                    Our ministry extends beyond the plate. We believe in nurturing the spirit just as we nourish the body, creating a cycle of hope and renewal.
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-textlight/40">
                      <div className="w-12 h-px bg-secondary/30"></div>
                      <span className="text-sm uppercase tracking-widest">Our Core Pillars</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scrolling Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard 
                index={0}
                title="Food Assistance Program"
                description="Ensures no one goes hungry by providing regular access to nutritious and culturally inclusive food."
                features={["Weekly distribution", "Tailored dietary options", "Serving 3,000+ families monthly"]}
                icon={<Utensils className="w-8 h-8 text-secondary" />}
                link="/find-support"
              />
              <ServiceCard 
                index={1}
                title="Emergency Support Program"
                description="Immediate relief for individuals in crisis, providing essentials to get through tough times."
                features={["Ready-to-eat meals", "Hygiene & baby care packages", "Support for homeless & seniors"]}
                icon={<HeartPulse className="w-8 h-8 text-secondary" />}
                link="/find-support"
              />
              <ServiceCard 
                index={2}
                title="Food Rescue & Sustainability"
                description="Transforming surplus food into life-saving resources while protecting the environment."
                features={["1.7M+ lbs rescued annually", "Reduces greenhouse gases", "Keeps food out of landfills"]}
                icon={<Recycle className="w-8 h-8 text-secondary" />}
                link="/who-we-are"
              />
              <ServiceCard 
                index={3}
                title="Holistic Care & Visitation"
                description="Healing the whole person through faith-based counseling and dedicated visitation for the sick and shut-in."
                features={["Individual Counseling", "Hospital & Home Visits", "Spiritual Guidance"]}
                icon={<Heart className="w-8 h-8 text-secondary" />}
                link="/find-support/holistic-care"
              />
              <ServiceCard 
                index={4}
                title="Educational Programs"
                description="Providing skills and certifications for confidence and stable employment opportunities."
                features={["First Aid CPR Training", "Food Handling Certification", "Job Support Resources"]}
                icon={<GraduationCap className="w-8 h-8 text-secondary" />}
                link="/events"
              />
              <ServiceCard 
                index={4}
                title="Community Engagement"
                description="Bringing people together to fight hunger and build a network of care and support."
                features={["Food & toy drives", "Local partnerships", "Faith-based excursions & trips"]}
                icon={<Users className="w-8 h-8 text-secondary" />}
                link="/events"
              />
              <ServiceCard 
                index={5}
                title="Food for the Spirit"
                description="Nourishing the soul through faith-based resources, community study, and daily encouragement."
                features={["Daily Devotionals", "Weekly Bible Study", "Prayer Support Network"]}
                icon={<BookOpen className="w-8 h-8 text-secondary" />}
                link="/spirit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE: FOOD FOR THE SPIRIT (Parallax Background) --- */}
      <section className="relative w-full py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/1560bb_e0ee9499fd6a4d288399e67c05a7b6d9~mv2.png?originWidth=1152&originHeight=576"
            alt="Open bible on a wooden table"
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Leaf className="w-12 h-12 text-secondary mx-auto mb-8" />
            <h2 className="font-bold-heading text-4xl md:text-6xl text-primary-foreground mb-8">
              Food for the Spirit
            </h2>
            <p className="font-bold-body text-xl text-textbody/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              "Man shall not live by bread alone." Join our digital ministry to receive daily devotionals, prayer requests, and bible study invitations directly to your phone or inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/spirit"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-bold-body font-semibold rounded-sm hover:bg-secondary/90 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                Subscribe to Devotionals
              </Link>
              <Link 
                to="/spirit"
                className="inline-flex items-center justify-center px-8 py-4 border border-bordersubtle text-primary-foreground font-bold-body font-semibold rounded-sm hover:bg-white/5 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Join Bible Study
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- UPCOMING EVENTS (List Layout) --- */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-bordersubtle/10 pb-8">
            <div>
              <h2 className="font-bold-heading text-4xl text-foreground mb-4">Community Calendar</h2>
              <p className="font-bold-body text-textbody/60">Join us at our upcoming gatherings and distributions.</p>
            </div>
            <Link to="/events" className="hidden md:flex items-center text-secondary hover:text-primary transition-colors mt-4 md:mt-0">
              View Full Calendar <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col">
            <EventRow 
              date="OCT 12"
              title="Fall Harvest Distribution"
              location="Belleville Church Hall"
              time="10:00 AM - 2:00 PM"
            />
            <EventRow 
              date="OCT 15"
              title="Virtual Bible Study: Hope"
              location="Online (Zoom)"
              time="7:00 PM - 8:30 PM"
            />
            <EventRow 
              date="NOV 01"
              title="Community Thanksgiving Prep"
              location="Volunteer Center"
              time="9:00 AM - 4:00 PM"
            />
            <EventRow 
              date="NOV 05"
              title="Wellness & Health Screening"
              location="Community Center Annex"
              time="11:00 AM - 3:00 PM"
            />
          </div>
          
          <div className="mt-8 md:hidden">
            <Link to="/events" className="flex items-center justify-center text-secondary hover:text-primary transition-colors w-full py-4 border border-bordersubtle/20 rounded-sm">
              View Full Calendar <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- PARTNERS & IMPACT (Grid) --- */}
      <section className="w-full bg-[#2A382A] py-24 border-t border-bordersubtle/10">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold-heading text-3xl md:text-4xl text-primary-foreground mb-6">
                Stronger Together
              </h2>
              <p className="font-bold-body text-textbody/70 mb-8 leading-relaxed">
                We are proud to work alongside dedicated organizations that share our vision of a hunger-free community. Through these partnerships, we extend our reach and deepen our impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-primary border border-bordersubtle/20 flex items-center justify-center h-32 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="font-bold-heading text-xl text-center text-primary-foreground">Specialty<br/>Food Bank</span>
                </div>
                <div className="p-6 bg-primary border border-bordersubtle/20 flex items-center justify-center h-32 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="font-bold-heading text-xl text-center text-primary-foreground">Local<br/>Farms Co-op</span>
                </div>
                <div className="p-6 bg-primary border border-bordersubtle/20 flex items-center justify-center h-32 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="font-bold-heading text-xl text-center text-primary-foreground">Community<br/>Health Alliance</span>
                </div>
                <div className="p-6 bg-primary border border-bordersubtle/20 flex items-center justify-center h-32 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="font-bold-heading text-xl text-center text-primary-foreground">Belleville<br/>Outreach</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] w-full overflow-hidden rounded-sm">
               <Image 
                src="https://static.wixstatic.com/media/1560bb_757b469d76bb425496a3a33d50d388f7~mv2.png?originWidth=768&originHeight=448"
                alt="Volunteers working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-12">
                <div className="max-w-xs">
                  <div className="text-5xl font-bold-heading text-secondary mb-2">1,200+</div>
                  <div className="text-xl text-primary-foreground mb-6">Families Served Monthly</div>
                  <div className="h-px w-16 bg-secondary mb-6"></div>
                  <p className="text-textbody/80 text-sm">Your donations make this possible. Every dollar contributes directly to purchasing fresh food and supplies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full py-32 px-6 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-secondary/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold-heading text-5xl md:text-7xl text-foreground mb-8">
              Thanks Be to God
            </h2>
            <p className="font-bold-body text-xl text-textbody/70 mb-12 max-w-2xl mx-auto">
              We couldn’t do this work without the grace of God and the unwavering support of our community. Every dollar donated, every hour volunteered, and every meal provided is a testament to His love at work through all of us. We invite you to join this mission of faith and compassion. Together, we can continue to make a difference, one meal and one heart at a time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/donate"
                className="px-10 py-5 bg-secondary text-white font-bold-body text-lg font-semibold rounded-sm hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
              >
                Donate Now
              </Link>
              <Link 
                to="/join-mission"
                className="px-10 py-5 bg-transparent border-2 border-primary/20 text-primary font-bold-body text-lg font-semibold rounded-sm hover:border-primary hover:bg-primary/5 transition-all"
              >
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
