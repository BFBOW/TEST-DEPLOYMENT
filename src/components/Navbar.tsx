import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <header className="bg-primary border-b border-bordersubtle sticky top-0 z-40">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="font-heading text-2xl lg:text-3xl text-primary-foreground">
                Belleville Food Bank On Wheels
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Events
              </Link>
              <Link 
                to="/spirit" 
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Food for the Spirit
              </Link>
              
              {/* Find Support Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors h-20"
                >
                  <span>Find Support</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute left-0 top-full w-64 bg-primary border border-bordersubtle shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex flex-col py-2">
                    <Link 
                      to="/find-support" 
                      className="px-6 py-3 font-paragraph text-sm text-textbody hover:bg-secondary/10 hover:text-primary-foreground transition-colors"
                    >
                      Main Page
                    </Link>
                    <Link 
                      to="/find-support" 
                      className="px-6 py-3 font-paragraph text-sm text-textbody hover:bg-secondary/10 hover:text-primary-foreground transition-colors"
                    >
                      Apply for Support
                    </Link>
                    <Link 
                      to="/find-support/holistic-care" 
                      className="px-6 py-3 font-paragraph text-sm text-textbody hover:bg-secondary/10 hover:text-primary-foreground transition-colors"
                    >
                      Holistic Care
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/who-we-are" 
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Who We Are
              </Link>

              {/* Join Our Mission Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors h-20"
                >
                  <span>Join Our Mission</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute left-0 top-full w-64 bg-primary border border-bordersubtle shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex flex-col py-2">
                    <Link 
                      to="/join-mission" 
                      className="px-6 py-3 font-paragraph text-sm text-textbody hover:bg-secondary/10 hover:text-primary-foreground transition-colors"
                    >
                      Main Page
                    </Link>
                    <Link 
                      to="/join-mission" 
                      className="px-6 py-3 font-paragraph text-sm text-textbody hover:bg-secondary/10 hover:text-primary-foreground transition-colors"
                    >
                      Become a Partner or Volunteer
                    </Link>
                    <Link 
                      to="/join-mission/evangelism" 
                      className="px-6 py-3 font-paragraph text-sm text-textbody hover:bg-secondary/10 hover:text-primary-foreground transition-colors"
                    >
                      Evangelism Sign-up
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/donate" 
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-textbody hover:text-primary-foreground transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-6 space-y-4 border-t border-bordersubtle">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                to="/events" 
                onClick={() => setIsMenuOpen(false)}
                className="block font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
              >
                Events
              </Link>
              <Link 
                to="/spirit" 
                onClick={() => setIsMenuOpen(false)}
                className="block font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
              >
                Food for the Spirit
              </Link>
              
              {/* Find Support Mobile Dropdown */}
              <div className="space-y-2">
                <button 
                  onClick={() => toggleDropdown('find-support')}
                  className="flex items-center justify-between w-full font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
                >
                  <span>Find Support</span>
                  <ChevronDown size={16} className={`${activeDropdown === 'find-support' ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {activeDropdown === 'find-support' && (
                  <div className="pl-4 space-y-2 border-l border-bordersubtle ml-2">
                    <Link 
                      to="/find-support" 
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-sm text-textbody hover:text-primary-foreground transition-colors py-2"
                    >
                      Main Page
                    </Link>
                    <Link 
                      to="/find-support" 
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-sm text-textbody hover:text-primary-foreground transition-colors py-2"
                    >
                      Apply for Support
                    </Link>
                    <Link 
                      to="/find-support/holistic-care" 
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-sm text-textbody hover:text-primary-foreground transition-colors py-2"
                    >
                      Holistic Care
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/who-we-are" 
                onClick={() => setIsMenuOpen(false)}
                className="block font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
              >
                Who We Are
              </Link>

              {/* Join Our Mission Mobile Dropdown */}
              <div className="space-y-2">
                <button 
                  onClick={() => toggleDropdown('join-mission')}
                  className="flex items-center justify-between w-full font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
                >
                  <span>Join Our Mission</span>
                  <ChevronDown size={16} className={`${activeDropdown === 'join-mission' ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {activeDropdown === 'join-mission' && (
                  <div className="pl-4 space-y-2 border-l border-bordersubtle ml-2">
                    <Link 
                      to="/join-mission" 
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-sm text-textbody hover:text-primary-foreground transition-colors py-2"
                    >
                      Main Page
                    </Link>
                    <Link 
                      to="/join-mission" 
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-sm text-textbody hover:text-primary-foreground transition-colors py-2"
                    >
                      Become a Partner or Volunteer
                    </Link>
                    <Link 
                      to="/join-mission/evangelism" 
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-sm text-textbody hover:text-primary-foreground transition-colors py-2"
                    >
                      Evangelism Sign-up
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/donate" 
                onClick={() => setIsMenuOpen(false)}
                className="block font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
              >
                Donate
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
