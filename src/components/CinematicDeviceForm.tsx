'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Link as LucideLink } from 'lucide-react';

export default function CinematicDeviceForm() {
  const [bootState, setBootState] = useState<'off' | 'booting' | 'active'>('off');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    mobileNumber: '',
    service: 'Interior Painting',
    vision: ''
  });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-fidelity phone frame styling
  const frameStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '380px',
    height: 'clamp(650px, 85vh, 780px)',
    background: '#161617', // iPhone titanium-like dark
    borderRadius: '50px',
    padding: '12px',
    position: 'relative',
    boxShadow: '0 50px 100px rgba(0,0,0,0.3), inset 0 0 2px rgba(255,255,255,0.2)',
    border: '1px solid #333',
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  };

  const screenStyle: React.CSSProperties = {
    flex: 1,
    background: bootState === 'active' ? '#fff' : '#000',
    borderRadius: '38px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 1s ease-in-out'
  };

  // Boot logic
  const handleBoot = () => {
    if (bootState !== 'off') return;
    setBootState('booting');
    
    setTimeout(() => {
      setBootState('active');
    }, 2500);
  };

  const handleShutdown = () => {
    setBootState('off');
    setFormState('idle'); // Reset form state on shutdown
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState('idle');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            countryCode: '+1',
            mobileNumber: '',
            service: 'Interior Painting',
            vision: ''
          });
        }, 3000);
      } else {
        setFormState('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
    }
  };

  return (
    <div ref={containerRef} style={{ perspective: '2000px', padding: '40px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        onViewportEnter={() => {
          if (bootState === 'off') handleBoot();
        }}
        onViewportLeave={() => {
          handleShutdown();
        }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={frameStyle}
      >
        {/* Dynamic Island / Notch */}
        <div style={{
          position: 'absolute',
          top: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90px',
          height: '24px',
          background: '#000',
          borderRadius: '20px',
          zIndex: 100
        }} />

        <div style={screenStyle}>
          <AnimatePresence mode="wait">
            {bootState === 'booting' && (
              <motion.div
                key="booting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  background: '#000',
                  zIndex: 50
                }}
              >
                {/* Boot Logo Animation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.05, 1],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    times: [0, 0.2, 0.8, 1],
                    ease: "easeInOut" 
                  }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
                >
                      <div style={{ 
                        position: 'relative', 
                        width: '160px', 
                        height: '80px',
                        filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.1))' 
                      }}>
                        <Image 
                          src="/logo.PNG" 
                          alt="Pixo Logo" 
                          fill 
                          style={{ objectFit: 'contain' }} 
                        />
                      </div>
                </motion.div>
                
                {/* Loading indicator */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '120px' }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                  style={{ height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}
                >
                   <motion.div 
                    style={{ height: '100%', background: '#fff', width: '100%', position: 'absolute', left: 0 }} 
                  />
                </motion.div>
              </motion.div>
            )}

            {bootState === 'active' && (
              <motion.div
                key="active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ 
                  opacity: [1, 0.4, 1, 0],
                  scale: [1, 1, 1.1, 0.9],
                  filter: ['blur(0px)', 'blur(10px)', 'blur(0px)', 'blur(20px)'],
                  transition: { duration: 0.8, times: [0, 0.4, 0.8, 1] }
                }}
                transition={{ duration: 1 }}
                style={{ height: '100%', width: '100%', overflowY: 'hidden' }}
                className="hide-scrollbar"
              >
                <div style={{ padding: '65px 18px 20px' }}>
                  <header style={{ marginBottom: '12px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000', marginBottom: '4px', lineHeight: 1.1 }}>
                      Start Your Masterpiece.
                    </h2>
                    <p style={{ color: '#666', fontSize: '0.75rem', lineHeight: 1.3, opacity: 0.8 }}>
                      Tell us about your architectural vision, and our senior curators will reach out.
                    </p>
                  </header>

                  {formState === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{
                        height: '350px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px'
                      }}
                    >
                      <div style={{ fontSize: '3rem' }}>✨</div>
                      <h3 style={{ color: '#000', fontWeight: 800 }}>Inquiry Received</h3>
                      <p style={{ color: '#666', fontSize: '0.85rem' }}>
                        Our curators have received your vision.<br />We will reach out shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div className="mobile-field">
                          <label>FIRST NAME</label>
                          <input 
                            type="text" 
                            name="firstName"
                            placeholder="Julian" 
                            required 
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mobile-field">
                          <label>LAST NAME</label>
                          <input 
                            type="text" 
                            name="lastName"
                            placeholder="Thorne" 
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="mobile-field">
                        <label>EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="julian@luxury.com" 
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '10px' }}>
                        <div className="mobile-field">
                          <label>COUNTRY</label>
                          <select 
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                          >
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+1">🇨🇦 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+65">🇸🇬 +65</option>
                            <option value="+49">🇩🇪 +49</option>
                            <option value="+33">🇫🇷 +33</option>
                            <option value="+81">🇯🇵 +81</option>
                            <option value="+82">🇰🇷 +82</option>
                          </select>
                        </div>
                        <div className="mobile-field">
                          <label>MOBILE NUMBER</label>
                          <input 
                            type="tel" 
                            name="mobileNumber"
                            placeholder="604-555-0123" 
                            required
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="mobile-field">
                        <label>SERVICE INTEREST</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option>Interior Painting</option>
                          <option>Exterior Coating</option>
                          <option>Cabinet Refinishing</option>
                          <option>Wood Staining</option>
                          <option>Repaint Services</option>
                        </select>
                      </div>

                      <div className="mobile-field">
                        <label>PROJECT VISION</label>
                        <textarea 
                          name="vision"
                          placeholder="Describe your vision..." 
                          rows={2} 
                          required
                          value={formData.vision}
                          onChange={handleInputChange}
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={formState === 'submitting'}
                        style={{
                          background: formState === 'error' ? '#ff3b30' : '#000',
                          color: '#fff',
                          padding: '14px',
                          borderRadius: '14px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          marginTop: '4px',
                          border: 'none',
                          cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                          opacity: formState === 'submitting' ? 0.7 : 1,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {formState === 'submitting' ? 'Sending...' : formState === 'error' ? 'Try Again' : 'Send Inquiry'}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <style jsx>{`
          .mobile-field {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .mobile-field label {
            font-size: 0.6rem;
            font-weight: 800;
            color: #aaa;
            margin-left: 5px;
            letter-spacing: 0.05em;
          }
          .mobile-field input, .mobile-field select, .mobile-field textarea {
            background: #f5f5f7;
            border: 1px solid rgba(0,0,0,0.03);
            padding: 10px 14px;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 500;
            color: #1d1d1f;
            outline: none;
            transition: all 0.2s;
          }
          .mobile-field input:focus {
            background: #fff;
            box-shadow: 0 0 0 4px rgba(0,0,0,0.05);
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </motion.div>
    </div>
  );
}
