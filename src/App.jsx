import './App.css'

/**
 * Main App component for the Med Spa Homepage
 * This component serves as the main container for all sections of the homepage
 */
function App() {
  return (
    <div className="app">
      {/* Hero Section: First impression with headline and CTA */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Main headline to grab attention */}
          <h1 className="hero-title">Rejuvenate Your Body and Mind</h1>
          
          {/* Subheadline explaining services */}
          <p className="hero-subtitle">
            Experience premium wellness and med spa services tailored to your unique needs. 
            Discover a sanctuary where beauty meets well-being.
          </p>
          
          {/* Call-to-action button */}
          <button className="cta-button">Book an Appointment</button>
        </div>
      </section>

      {/* About Us Section: Introduction to the med spa */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          
          {/* Description of the med spa */}
          <p className="about-description">
            Welcome to our premier wellness clinic and med spa, where we combine 
            cutting-edge treatments with holistic care. Our team of experienced 
            professionals is dedicated to helping you achieve your wellness goals 
            in a serene and luxurious environment. We believe that true beauty 
            comes from feeling your best, inside and out.
          </p>
          
          {/* Placeholder for an image */}
          <div className="about-image-placeholder">
            <span className="image-text">Beautiful Spa Environment</span>
          </div>
        </div>
      </section>

      {/* Services Section: Display available services */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        
        {/* Container for service cards */}
        <div className="services-grid">
          {/* Service 1: Massage Therapy */}
          <div className="service-card">
            {/* Icon placeholder using emoji */}
            <div className="service-icon">💆</div>
            <h3 className="service-name">Massage Therapy</h3>
            <p className="service-description">
              Relax and unwind with our therapeutic massage treatments designed 
              to relieve tension and promote deep relaxation.
            </p>
          </div>

          {/* Service 2: Skin Care */}
          <div className="service-card">
            {/* Icon placeholder using emoji */}
            <div className="service-icon">✨</div>
            <h3 className="service-name">Skin Care</h3>
            <p className="service-description">
              Rejuvenate your skin with our advanced facial treatments and 
              personalized skincare regimens for a radiant glow.
            </p>
          </div>

          {/* Service 3: Wellness Consultation */}
          <div className="service-card">
            {/* Icon placeholder using emoji */}
            <div className="service-icon">🌿</div>
            <h3 className="service-name">Wellness Consultation</h3>
            <p className="service-description">
              Receive expert guidance on your wellness journey with personalized 
              consultations tailored to your health and beauty goals.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section: Contact information and social media */}
      <footer className="footer">
        <div className="footer-content">
          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-info">📞 Phone: (555) 123-4567</p>
            <p className="footer-info">📍 Address: 123 Wellness Ave, Spa City, SC 12345</p>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              {/* Placeholder social media links */}
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#instagram" className="social-link">Instagram</a>
              <a href="#twitter" className="social-link">Twitter</a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="footer-bottom">
          <p>&copy; 2026 Wellness Med Spa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
