import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-background border-t border-bordersubtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading tracking-wider mb-6">BELLEVILLE FOOD BANK ON WHEELS</h3>
            <p className="text-textlight max-w-md">
              A sanctuary where faith meets action. We provide essential sustenance, spiritual growth, and a compassionate community for all who seek it.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/who-we-are" className="text-textlight hover:text-foreground transition-colors">Who We Are</Link></li>
              <li><Link to="/events" className="text-textlight hover:text-foreground transition-colors">Events</Link></li>
              <li><Link to="/find-support" className="text-textlight hover:text-foreground transition-colors">Find Support</Link></li>
              <li><Link to="/join-mission" className="text-textlight hover:text-foreground transition-colors">Join Our Mission</Link></li>
              <li><Link to="/donate" className="text-textlight hover:text-foreground transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-textlight">
              <li>123 Faith Lane</li>
              <li>Community City, ST 12345</li>
              <li>info@bellevillefoodbankonwheels.org</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-bordersubtle text-center text-textlight text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Belleville Food Bank On Wheels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
