import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Info,
  Dog,
  UserPlus,
  AlertCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import type { SupportFormSubmission, SupportPetSelection } from '../../lib/supportSubmission';

interface FAQItemProps {
  question: string;
  answer: string;
  key?: number | string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-bordersubtle/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-heading group-hover:text-secondary transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-textlight" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-textlight leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FindSupportPage() {
  const [postalCode, setPostalCode] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPostalCode(value);
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (value && !regex.test(value)) {
      setPostalCodeError('Invalid Canadian postal code format (e.g. K8N 1A1)');
    } else {
      setPostalCodeError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const pets: SupportPetSelection[] = ['Dog', 'Cat', 'Small Animal (Rabbit, Hamster, etc)'].map(pet => ({
      name: pet,
      quantity: Number(formData.get(`PET_QTY_${pet}`) || 0)
    }));

    const submission: SupportFormSubmission = {
      firstName: formData.get('FIRSTNAME') as string,
      lastName: formData.get('LASTNAME') as string,
      email: formData.get('EMAIL') as string,
      phone: `${formData.get('SMS__COUNTRY_CODE')}${formData.get('SMS')}`,
      postalCode: formData.get('POSTAL_CODE') as string,
      ageRanges: Array.from(formData.getAll('AGE_RANGES')) as string[],
      optIn: formData.get('OPT_IN') === 'true',
      pickupOthers: formData.get('PICKUP_OTHERS') as string,
      householdCount: Number(formData.get('HOUSEHOLD_COUNT') || 0),
      dietaryPrefs: Array.from(formData.getAll('DIETARY_PREFS')) as string[],
      dietaryNotes: formData.get('DIETARY_NOTES') as string,
      hygienePrefs: Array.from(formData.getAll('HYGIENE_PREFS')) as string[],
      hygieneNeeds: formData.get('HYGIENE_NEEDS') as string,
      pets,
      petDetails: formData.get('PET_DETAILS') as string,
      additionalInfo: formData.get('ADDITIONAL_INFO') as string,
      confirmations: Array.from(formData.getAll('CONFIRM_ACK')) as string[],
      contactTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setSubmitSuccess(true);
      (e.target as HTMLFormElement).reset();
      setPostalCode('');
      document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    // Brevo Configuration removed as we are using server-side API
  }, []);

  const faqs = [
    {
      question: "Who can access the Belleville Food Bank On Wheels?",
      answer: "Our doors are open to anyone in need who has been referred to us. This includes individuals and families from various backgrounds, such as schools, social services, survivors of domestic violence, the homeless, and the unemployed."
    },
    {
      question: "What should I bring with me when I visit?",
      answer: "Please bring a piece of identification and proof of address if possible. If you were referred by an organization, bringing that referral information is also helpful."
    },
    {
      question: "How often can I access food and services?",
      answer: "We typically provide bi-weekly healthy food boxes. Specific schedules can be discussed during your intake process."
    },
    {
      question: "Are there any fees or requirements to receive support?",
      answer: "There are no fees for our services. We require a completed membership application and we prioritize those with demonstrated need or referrals."
    },
    {
      question: "What types of food does the Belleville Food Bank On Wheels provide?",
      answer: "We provide bi-weekly healthy food boxes filled with local produce, meats, and pantry staples. We also offer specialized options for various dietary restrictions."
    },
    {
      question: "Are there specific services for people with dietary restrictions?",
      answer: "Yes! We offer a wide range of options including gluten-free, diabetic-friendly, nut-free, vegan, vegetarian, and halal-based meals. We also cater to specific medical needs like hypertension or celiac disease."
    },
    {
      question: "Do you provide hygiene products?",
      answer: "Yes, we provide toiletries and hygiene products, though these are in limited supply. We aim to ensure those in need get access to these items at least once every 5 weeks."
    },
    {
      question: "Do you provide meals for homeless individuals?",
      answer: "Yes, we strive to provide nourishing and healthy food products to everyone, including those currently experiencing homelessness."
    },
    {
      question: "Are there programs for children?",
      answer: "We provide family-sized boxes and work with local schools to ensure children have access to the nutrition they need."
    },
    {
      question: "Do you support seniors?",
      answer: "Absolutely. We have specific programming and support needs dedicated to various age groups, including seniors, across our food bank community."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 bg-background border-b border-bordersubtle/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="Hands reaching out"
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading mb-8 text-foreground leading-[0.9]">Help When You <br /><span className="text-secondary italic">Need</span> It</h1>
              <p className="text-xl text-textbody/70 leading-relaxed mb-6">
                At the Belleville Food Bank On Wheels, we understand that everyone faces challenges. 
              </p>
              <p className="text-lg text-textbody/50 mb-10">
                Whether you need food for your family or help navigating tough situations, we're here to offer support with dignity and care. Through his grace, we can provide.
              </p>
              <Button 
                className="px-10 py-8 text-lg uppercase tracking-widest bg-secondary text-white hover:bg-secondary/90"
                onClick={() => document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply for Support
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everyone is Welcome */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-3 bg-secondary/10 rounded-full text-secondary mb-6 shadow-lg border border-secondary/20">
                <Users size={32} />
              </div>
              <h2 className="text-4xl font-heading mb-6 text-foreground">Everyone Is Welcome</h2>
              <p className="text-lg text-textlight leading-relaxed mb-8">
                Our doors are open to anyone in need, regardless of age, background, or circumstance. Whether you're a single parent, a senior, or a newcomer, we provide the resources you need to regain stability and hope.
              </p>
              <div className="bg-secondary/5 border border-bordersubtle/20 p-8 rounded-2xl">
                <div className="text-4xl font-heading text-secondary mb-2">250,000+</div>
                <p className="text-textlight">Meals provided annually to ensure no one in our community goes hungry.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-video border border-bordersubtle/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000"
                alt="Community support"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background border-y border-bordersubtle/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-heading text-xl mb-4 opacity-50 uppercase tracking-[0.5em]"
            >
              Learn More About Support
            </motion.div>
            <h2 className="text-4xl font-heading text-foreground">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Access Support Today Info */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-heading mb-8 opacity-20 uppercase tracking-[0.3em]">Access Support Today</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We're thrilled to support you and your family's needs with our bi-weekly healthy food boxes. Each box is filled with nourishing items, including local produce, meats, toiletries, diet-friendly meals, and even pet food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-heading text-white">Compassionate Care</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                At our food bank, we're here to help anyone in need who has been referred to us. Our clients come from various backgrounds, such as schools, social services, survivors of domestic violence, the homeless, and the unemployed.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-heading text-white">Dietary Respect</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We understand the importance of individual dietary restrictions and respect cultural and social dietary requirements. We offer gluten-free, diabetic-friendly, nut-free, vegan, vegetarian, and halal options.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                <Info size={24} />
              </div>
              <h3 className="text-2xl font-heading text-white">Secure & Private</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Rest assured that any information you provide will be kept safe and secure, accessible only to authorized senior personnel at BFBOW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section id="support-form" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/5 border border-secondary/10 rounded-3xl p-8 md:p-16 shadow-xl">
              <div className="text-center mb-16">
                <UserPlus className="mx-auto mb-6 text-secondary" size={64} />
                <h2 className="text-4xl font-heading mb-4 text-foreground">Signing Up</h2>
                <p className="text-textbody/60">
                  Please fill out your membership application form to get started. Once submitted, a member of our Belleville Food Bank On Wheels team will review your information and reach out shortly!
                </p>
              </div>

              <form 
                id="sib-form" 
                onSubmit={handleSubmit}
                className="space-y-10"
              >
              {/* Name Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Name</h3>
                <p className="text-xs text-textbody/40 italic">Please provide your first and last name</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">First Name <span className="text-destructive">*</span></label>
                    <input required type="text" id="FIRSTNAME" name="FIRSTNAME" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">Last Name <span className="text-destructive">*</span></label>
                    <input required type="text" id="LASTNAME" name="LASTNAME" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                </div>
              </div>

              {/* Age Range Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Age Range</h3>
                <p className="text-xs text-textbody/60 leading-relaxed">
                  Please select the age range(s) applicable to you. This helps us and our distribution partners tailor support and programming to various age groups in our community.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['0-18', '19-30', '31-50', '51-64', '65+'].map((range) => (
                    <div key={range} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={`age-${range}`}
                        name="AGE_RANGES" 
                        value={range} 
                        className="accent-secondary"
                      />
                      <label htmlFor={`age-${range}`} className="text-xs text-textbody/60">{range}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Contact Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">Email <span className="text-destructive">*</span></label>
                    <input required type="email" id="EMAIL" name="EMAIL" placeholder="jane.doe@email.com" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  <div className="flex items-center gap-2 mt-2">
                      <input 
                        type="checkbox" 
                        id="news"
                        name="OPT_IN" 
                        value="true" 
                        className="accent-secondary" 
                      />
                      <label htmlFor="news" className="text-xs text-textbody/60">Sign up for news and updates</label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-foreground">Phone Number</label>
                      <div className="flex gap-2">
                        <select name="SMS__COUNTRY_CODE" className="bg-white/5 border border-secondary/10 rounded-lg px-2 py-3 focus:border-secondary outline-none transition-colors text-foreground text-xs">
                          <option value="+1">+1 CA/US</option>
                          <option value="+44">+44 UK</option>
                          {/* Add more as needed or keep it simple */}
                        </select>
                        <input type="tel" id="SMS" name="SMS" className="flex-grow bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-foreground">Postal Code <span className="text-destructive">*</span></label>
                      <input 
                        required 
                        type="text" 
                        id="POSTAL_CODE" 
                        name="POSTAL_CODE" 
                        placeholder="L1E1V8" 
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                        className={`w-full bg-white/5 border ${postalCodeError ? 'border-destructive' : 'border-secondary/10'} rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors uppercase text-foreground`} 
                      />
                      {postalCodeError && <p className="text-[10px] text-destructive mt-1">{postalCodeError}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Household Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Household Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">Picking up for others?</label>
                    <select id="PICKUP_OTHERS" name="PICKUP_OTHERS" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors appearance-none text-foreground">
                      <option value="">Select an option</option>
                      <option value="No, just my household">No, just my household</option>
                      <option value="Yes, another person/household">Yes, another person/household</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground">People in household</label>
                    <input type="number" id="HOUSEHOLD_COUNT" name="HOUSEHOLD_COUNT" min="1" className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground" />
                  </div>
                </div>
              </div>

              {/* Dietary Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Dietary Restrictions</h3>
                <p className="text-xs text-textbody/60 leading-relaxed">
                  Please select any dietary restrictions or statements most applicable to your household.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Gluten-Free', 'Diabetic-Friendly', 'Nut-Free', 'Vegan', 'Vegetarian', 'Halal', 'Hypertension', 'Celiac', 'No Restrictions'].map((diet) => (
                    <div key={diet} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={`diet-${diet.replace(/\s+/g, '-')}`}
                        name="DIETARY_PREFS" 
                        value={diet} 
                        className="accent-secondary" 
                      />
                      <label htmlFor={`diet-${diet.replace(/\s+/g, '-')}`} className="text-xs text-textbody/60">{diet}</label>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Additional Preferences</label>
                  <textarea id="DIETARY_NOTES" name="DIETARY_NOTES" rows={3} className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
                </div>
              </div>

              {/* Hygiene Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Nurturing, Hygiene & Clothing</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Soap/Body Wash', 'Shampoo', 'Toothpaste', 'Deodorant', 'Feminine Hygiene', 'Diapers', 'Baby Wipes', 'Clothing Items'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={`hygiene-${item.replace(/\s+/g, '-')}`}
                        name="HYGIENE_PREFS" 
                        value={item} 
                        className="accent-secondary" 
                      />
                      <label htmlFor={`hygiene-${item.replace(/\s+/g, '-')}`} className="text-xs text-textbody/60">{item}</label>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Additional Preferences (Hygiene/Clothing)</label>
                  <textarea id="HYGIENE_NEEDS" name="HYGIENE_NEEDS" rows={2} placeholder="Sizes, specific needs, etc." className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
                </div>
              </div>

              {/* Pets Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2 flex items-center gap-2">
                  <Dog size={16} /> Pets and Animals
                </h3>
                <p className="text-xs text-textbody/60 leading-relaxed">
                  Please select the pet you have and the amount so we can provide supplies when on hand.
                </p>
                <div className="space-y-4">
                  {['Dog', 'Cat', 'Small Animal (Rabbit, Hamster, etc)'].map((pet) => (
                    <div key={pet} className="flex items-center justify-between gap-4 p-4 bg-white/5 border border-secondary/10 rounded-xl">
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id={`pet-${pet.replace(/\s+/g, '-')}`}
                          name="PET_INFO" 
                          value={pet} 
                          className="accent-secondary" 
                        />
                        <label htmlFor={`pet-${pet.replace(/\s+/g, '-')}`} className="text-sm text-foreground">{pet}</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor={`qty-${pet}`} className="text-xs text-textbody/60">Qty:</label>
                        <input 
                          type="number" 
                          id={`qty-${pet}`}
                          name={`PET_QTY_${pet}`}
                          min="0"
                          defaultValue="0"
                          className="w-16 bg-white/10 border border-secondary/20 rounded px-2 py-1 text-sm outline-none focus:border-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Pet Details (Types, Ages, Special Needs)</label>
                  <textarea id="PET_DETAILS" name="PET_DETAILS" rows={3} placeholder="Please provide more details about your pets..." className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
                </div>
              </div>

              {/* Additional Info Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Additional Information</h3>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground">Is there anything else we should know?</label>
                  <textarea id="ADDITIONAL_INFO" name="ADDITIONAL_INFO" rows={4} placeholder="Any other details that might help us support you better..." className="w-full bg-white/5 border border-secondary/10 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-colors text-foreground"></textarea>
                </div>
              </div>

              {/* Confirmation Section */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-2">Confirmation & Acknowledgment</h3>
                <div className="space-y-4">
                  {[
                    "I confirm that the information provided is accurate to the best of my knowledge.",
                    "I understand that food, clothing and hygiene items are subject to availability.",
                    "I agree to the storage of my data for the purpose of providing support services.",
                    "I acknowledge that BFBOW authorized personnel will handle my information securely."
                  ].map((agreement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <input 
                        required 
                        type="checkbox" 
                        id={`agree-${i}`} 
                        name="CONFIRM_ACK"
                        value={agreement}
                        className="mt-1 accent-secondary" 
                      />
                      <label htmlFor={`agree-${i}`} className="text-xs text-textbody/60 leading-relaxed">{agreement}</label>
                    </div>
                  ))}
                </div>
              </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-8 text-lg uppercase tracking-[0.2em] font-bold shadow-xl shadow-secondary/20 group bg-secondary text-white hover:bg-secondary/90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit My Form'} 
                  {!isSubmitting && <CheckCircle2 className="ml-2 group-hover:scale-110 transition-transform" />}
                </Button>

                {submitError && (
                  <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
                    <div className="flex items-center gap-3">
                      <AlertCircle size={20} />
                      <span>{submitError}</span>
                    </div>
                  </div>
                )}

                {submitSuccess && (
                  <div className="mt-6 p-4 rounded-lg bg-secondary/10 border border-secondary text-secondary text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span>Your support application has been submitted successfully.</span>
                    </div>
                  </div>
                )}
              </form>
          </div>
        </div>
      </section>
    </div>
  );
}
