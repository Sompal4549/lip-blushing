/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

const testimonials = [
  {
    name: 'Sneha Kapoor',
    location: 'South Delhi',
    quote:
      'My lips look naturally brighter every morning. The shape is cleaner, the color is soft, and I barely reach for lipstick now.',
  },
  {
    name: 'Priya Malhotra',
    location: 'Gurgaon',
    quote:
      'The appointment was calm, hygienic, and much more comfortable than I expected. Healing was smooth and the final tint looks beautiful.',
  },
  {
    name: 'Riya Bansal',
    location: 'Noida',
    quote:
      'I wanted subtle definition, not an overdone result, and that is exactly what I got. It still feels like me, just more polished.',
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, you'd send this to a backend or Google Sheet
  };

  return (
    <div className="min-h-screen selection:bg-brand-gold/30 selection:text-brand-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
              E
            </div>
            <span className="font-serif text-2xl tracking-tighter font-semibold">ELITE<span className="text-brand-gold">PMU</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-brand-gold transition-colors">About</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-brand-gold transition-colors">Benefits</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-brand-gold transition-colors">Results</button>
            <button 
              onClick={() => scrollToSection('book')}
              className="bg-brand-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-gold/90 transition-all active:scale-95"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-left py-2">About Lip Blushing</button>
              <button onClick={() => scrollToSection('benefits')} className="text-lg font-medium text-left py-2">Benefits</button>
              <button onClick={() => scrollToSection('gallery')} className="text-lg font-medium text-left py-2">Results</button>
              <button 
                onClick={() => scrollToSection('book')}
                className="bg-brand-gold text-white px-6 py-4 rounded-xl text-center font-bold"
              >
                Book Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center pt-20 overflow-hidden bg-brand-paper">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3 fill-brand-gold" />
              #1 Permanent Makeup Studio in Delhi
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              Wake Up With <br />
              <span className="text-brand-gold italic">Perfect Lips</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Experience the best <strong className="text-brand-dark">Lip Blushing in Delhi</strong>. Our expert technicians use organic pigments to give you natural, vibrant, and long-lasting lip color.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('book')}
                className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-dark/90 transition-all group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noreferrer"
                className="border-2 border-brand-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-dark hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-paper bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="Customer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-brand-gold" />)}
                </div>
                <p className="text-sm font-medium text-gray-500">500+ Happy Clients in Delhi</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] cta-glow">
              <img 
                src="https://picsum.photos/seed/lipblush/800/1000" 
                alt="Lip Blushing Result"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-8 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section - SEO Optimized */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/beauty1/400/500" alt="Process" referrerPolicy="no-referrer" className="rounded-2xl w-full h-full object-cover aspect-[4/5]" />
                <img src="https://picsum.photos/seed/beauty2/400/500" alt="Process" referrerPolicy="no-referrer" className="rounded-2xl w-full h-full object-cover aspect-[4/5] mt-10" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Transform Your Look</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">
                What is Lip Blushing <br />and why you need it?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Lip Blushing is a semi-permanent makeup procedure that enhances the natural color, shape, and overall appearance of your lips. It's the perfect solution for those who want a "lip tint" look that lasts for up to 2-3 years.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our studio specializes in <strong>Lip Blushing in Delhi</strong>, using the latest techniques and safe, organic pigments tailored to your skin tone. No more re-applying lipstick every hour!
              </p>
              <ul className="space-y-4">
                {[
                  "Natural looking color boost",
                  "Defined lip borders & improved symmetry",
                  "Covers lip pigmentation & dark spots",
                  "Painless procedure with local numbing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-24 bg-brand-paper">
        <div className="max-w-7xl mx-auto px-6 text-center text-brand-dark mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 uppercase">Why Choose Our Delhi Studio?</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Hygienic & Safe",
              desc: "We follow strict sterilization protocols and use single-use disposable tools for every client."
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Long Lasting Results",
              desc: "Enjoy beautiful, vibrant lips for up to 3 years with minimal maintenance."
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Conveniently Located",
              desc: "Located in the heart of South Delhi, easily accessible for all our clients."
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-brand-gold/10 hover:shadow-lg transition-shadow">
              <div className="text-brand-gold mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-serif mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">The Treatment Journey</h2>
            <p className="text-gray-400">Simple steps to your dream lips</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your goals and choose the perfect pigment shade." },
              { step: "02", title: "Mapping", desc: "Precise lip mapping to ensure perfect symmetry and shape." },
              { step: "03", title: "Procedure", desc: "Gentle pigment application using specialized PMU tools." },
              { step: "04", title: "Aftercare", desc: "Detailed instructions to ensure optimal healing and color." }
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-serif text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors mb-4">{s.step}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-[2.5rem] -right-4 w-8 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Client Love</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-4">Testimonials From Real Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Honest feedback from women who wanted softer color, better definition, and a lip tint look that still feels natural.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-[2rem] border border-brand-gold/15 bg-brand-paper p-8 shadow-sm"
              >
                <div className="flex text-brand-gold mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">"{testimonial.quote}"</p>
                <div className="pt-5 border-t border-brand-gold/10">
                  <p className="font-semibold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form - Conversion Focus */}
      <section id="book" className="py-24 bg-brand-paper relative">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif mb-2">Claim Your Free Consultation</h2>
              <p className="text-gray-500 font-medium">Limited slots available for this month in Delhi</p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">Our expert will call you within 24 hours to schedule your session.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="e.g. Anjali Sharma" 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="+91-XXXXX-XXXXX" 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-gold transition-all shadow-xl active:scale-95"
                >
                  Book My Free Consultation
                </button>
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold pt-4">
                  <ShieldCheck className="w-3 h-3 inline mr-1" /> Your data is 100% secure & private
                </p>
              </form>
            )}
          </div>
          
          {/* Floating reviews */}
          {/* <div className="hidden lg:block absolute -left-48 top-20 w-64 bg-white p-4 rounded-2xl shadow-lg animate-float">
            <div className="flex text-brand-gold mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-brand-gold" />)}
            </div>
            <p className="text-sm font-medium italic underline decoration-brand-gold/30">"Best experience ever. Natural looking lips finally!"</p>
            <p className="text-xs font-bold mt-2">- Sneha K., Delhi</p>
          </div>
          <div className="hidden lg:block absolute -right-48 bottom-40 w-64 bg-white p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex text-brand-gold mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-brand-gold" />)}
            </div>
            <p className="text-sm font-medium italic underline decoration-brand-gold/30">"The pain was minimal and results are incredible."</p>
            <p className="text-xs font-bold mt-2">- Priya M., Gurgaon</p>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-20 pb-24 md:pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif text-lg font-bold">E</div>
              <span className="font-serif text-2xl tracking-tighter">ELITEPMU</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Premium Permanent Makeup Studio in South Delhi. Specializing in Lip Blushing, Microblading, and Permanent Eyeliner. Experience the elite standard of beauty.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Us</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
                South Extension II, <br />New Delhi, 110049
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold" />
                +91 99999 99999
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-gold" />
                Mon - Sat: 10:00 - 19:00
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <div className="space-y-3 text-gray-400 text-sm flex flex-col">
              <button onClick={() => scrollToSection('about')} className="hover:text-brand-gold text-left">About Lip Blushing</button>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-brand-gold text-left">Our Benefits</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-brand-gold text-left">Testimonials</button>
              <button onClick={() => scrollToSection('book')} className="hover:text-brand-gold text-left">Privacy Policy</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            &copy; 2026 Elite PMU Studio Delhi. All Rights Reserved.
          </p>
          <div className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            SEO optimized for: <span className="text-gray-400">Lip Blushing in Delhi</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Integration */}
      <a 
        href="https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20Lip%20Blushing%20services%20in%20Delhi." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Chat on WhatsApp
        </span>
      </a>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-nav p-4 flex gap-3">
        <a 
          href="tel:+919999999999" 
          className="flex-1 bg-white border border-brand-dark text-brand-dark py-4 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <button 
          onClick={() => scrollToSection('book')}
          className="flex-1 bg-brand-gold text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
