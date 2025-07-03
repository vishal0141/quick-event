import { Menu, X, ChevronDown, Phone, Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function QuickEventsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Demo request submitted successfully!');
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: false
    });
  };

  return (
    <div className="bg-white">
      {/* Top Bar */}
      <div className="bg-[#0E3044] from-slate-800 to-slate-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm space-y-2 sm:space-y-0">
          {/* Left Links */}
          <div className="flex text-[16px] flex-col ml-5 sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Our Work</a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Blog</a>
          </div>

          {/* Right Contacts */}
          <div className="flex flex-col text-[16px] mr-8 sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span>+91-9376195533</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span>Piyushkakhesor@Quickevents.Co.In</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold">
                  <span className="text-slate-800">Quick</span>
                  <span className="text-green-500">Events</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Solution Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-green-600 transition-all duration-300 font-medium py-2"
                  onClick={() => handleDropdown('solution')}
                >
                  Solution
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'solution' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${activeDropdown === 'solution' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="p-4 space-y-2">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Registration Management</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Check-In System</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Badge Technology</a>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-green-600 transition-all duration-300 font-medium py-2"
                  onClick={() => handleDropdown('resources')}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${activeDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="p-4 space-y-2">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Case Studies</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Documentation</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Support</a>
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-green-600 transition-all duration-300 font-medium py-2"
                  onClick={() => handleDropdown('company')}
                >
                  Company
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="p-4 space-y-2">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">About Us</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Team</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:translate-x-1">Careers</a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Book a Demo Button */}
              <button 
                onClick={togglePopup}
                className="relative group bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-green-500 text-white px-7 py-2 rounded-full font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-emerald-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Sparkle effects */}
                <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
                </div>
                <div className="absolute bottom-1 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                </div>
                
                {/* Button content */}
                <span className="relative group-hover:animate-pulse">Book a Demo</span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 animate-ping"></div>
              </button>

              {/* Login Button */}
              <button className="hidden lg:block px-5 py-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Login
              </button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-green-50">
                  {isMenuOpen ? (
                    <X className="w-6 h-6 animate-spin" />
                  ) : (
                    <Menu className="w-6 h-6 hover:animate-pulse" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-2'
          } overflow-hidden`}>
            <div className="px-2 pt-4 pb-6 space-y-3 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl mt-4 shadow-lg border border-gray-100">
              
              {/* Mobile Solution */}
              <div className="space-y-2">
                <button 
                  onClick={() => handleDropdown('mobile-solution')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-white/80 rounded-lg transition-all duration-300 font-medium"
                >
                  Solution
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-solution' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-solution' && (
                  <div className="pl-4 space-y-1">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1"> Event Registration</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Check-In System</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Badge Technology</a>
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2">
                <button 
                  onClick={() => handleDropdown('mobile-resources')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-white/80 rounded-lg transition-all duration-300 font-medium"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-resources' && (
                  <div className="pl-4 space-y-1">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Case Studies</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Documentation</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Support</a>
                  </div>
                )}
              </div>

              {/* Mobile Company */}
              <div className="space-y-2">
                <button 
                  onClick={() => handleDropdown('mobile-company')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-white/80 rounded-lg transition-all duration-300 font-medium"
                >
                  Company
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-company' && (
                  <div className="pl-4 space-y-1">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">About Us</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Team</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-white/60 rounded-lg transition-all duration-300 transform hover:translate-x-1">Careers</a>
                  </div>
                )}
              </div>

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-3">
                <button 
                  onClick={togglePopup}
                  className="w-full px-6 py-3 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo
                </button>
                
                {/* Mobile Login Button */}
                <button className="relative group w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-green-500 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-emerald-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  </div>
                  
                  {/* Button content */}
                  <span className="relative group-hover:animate-pulse text-lg">Login</span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 animate-ping"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Book a Demo Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 animate-in fade-in-0 zoom-in-95"
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3044] mb-2">
                  Book a Demo
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill your details, and our team will get back to you shortly.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600 leading-relaxed">
                    I would like to receive the newsletter.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}