import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

import sahil from "./images/sahil.webp";
import nike from "./images/nike.webp";
import pizza from "./images/pizza.webp";
import coffee from "./images/coffee.webp";
import perfume from "./images/perfume.webp";

import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [count, setCount] = useState(0);

  const sectionRefs = useRef([]);
  const form = useRef();

  // Contact Form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zv169hr",
        "template_6j0vps8",
        form.current,
        "efJiytaXGcSkPc9Qu"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  // Scroll Reveal + Loader
useEffect(() => {

  const handleScroll = () => {

    sectionRefs.current.forEach((section) => {

      if (section) {

        const position =
          section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

          section.classList.add("show");

        } else {

          section.classList.remove("show");

        }

      }

    });

  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();


  let number = 0;

  const interval = setInterval(() => {

    number += 1;

    setCount(number);

    if (number >= 100) {
      clearInterval(interval);
    }

  }, 25);


  const timer = setTimeout(() => {

    setLoading(false);

  }, 2500);


  return () => {

    window.removeEventListener(
      "scroll",
      handleScroll
    );

    clearInterval(interval);

    clearTimeout(timer);

  };

}, []);

  // Loading Screen
  if (loading) {
    return (
      <div className="loader">
        <h1>Sahil Raza</h1>

        <p>Graphic & Motion Graphic Designer</p>

        <div className="loader-bar">
          <span></span>
        </div>

        <h2 className="count">{count}%</h2>
      </div>
    );
  }

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <h2 className="logo">Sahil Raza</h2>

        

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>
      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero">

        <div className="bg-circle bg1"></div>
        <div className="bg-circle bg2"></div>
        <div className="bg-circle bg3"></div>

        <div className="hero-bg"></div>

        <img
          src={sahil}
          alt="Sahil Raza"
          className="profile"
        />

        <h1>
          Creative <span>Graphic</span> &{" "}
          <span>Motion</span> Designer
        </h1>

        <h2 className="typing">
          <TypeAnimation
            sequence={[
              "Graphic Designer",
              2000,
              "Motion Graphic Designer",
              2000,
              "Product Advertisement Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p>
          I create modern graphic designs, product advertisements,
          branding, social media creatives and engaging motion graphics
          using Adobe Creative Suite.
        </p>

        <div className="buttons">

  <a href="#projects">
    <button type="button">
      View My Work
    </button>
  </a>

  <a href="#contact">
    <button type="button">
      Hire Me
    </button>
  </a>

  <a
    href="/sahilresum.pdf"
    download="Sahil-Raza-Resume.pdf"
  >
    <button type="button">
      Download Resume
    </button>
  </a>

</div>
        <div className="social-links">

          <a
            href="https://www.instagram.com/official_designer_sahil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-raza-863a40408"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.fiverr.com/mdsahilraza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFiverr />
          </a>

        </div>

      </section>


      {/* =========================
          STATS
      ========================= */}

      <section className="stats">

        <div className="stat-box">
          <h2>1+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Creative Designs</p>
        </div>

        <div className="stat-box">
          <h2>20+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Creative Work</p>
        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="about"
      >

        <h2>About Me</h2>

        <p>
          Hi, I'm Sahil Raza, a passionate Graphic & Motion Graphic
          Designer with experience in creating professional branding,
          social media creatives, product advertisements, motion
          graphics and promotional videos.
        </p>

        <div className="timeline">

          <div className="timeline-box">

            <div className="timeline-item">
              <h3>2025</h3>
              <p>Started learning Graphic Design.</p>
            </div>

            <div className="timeline-item">
              <h3>2026</h3>
              <p>
                Started Motion Graphics & Product Advertisement.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Present</h3>
              <p>
                Working as a Freelance Graphic & Motion Graphic Designer.
              </p>
            </div>

          </div>

        </div>

        <div className="whyhire-box">

          <div className="why-card">
            <h3>🎨 Creative Design</h3>
            <p>
              I create modern, unique and eye-catching designs
              for every project.
            </p>
          </div>

          <div className="why-card">
            <h3>⚡ Fast Delivery</h3>
            <p>
              Projects are completed on time without compromising quality.
            </p>
          </div>

          <div className="why-card">
            <h3>🎯 Attention to Detail</h3>
            <p>
              Every design is carefully crafted with precision and creativity.
            </p>
          </div>

          <div className="why-card">
            <h3>🤝 Client Satisfaction</h3>
            <p>
              My priority is delivering designs that exceed client expectations.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================= */}

      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        id="skills"
      >

        <h2>My Skills</h2>

        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe Photoshop</span>
            <span>95%</span>
          </div>

          <div className="progress">
            <span style={{ width: "95%" }}></span>
          </div>

        </div>

        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe Illustrator</span>
            <span>100%</span>
          </div>

          <div className="progress">
            <span style={{ width: "100%" }}></span>
          </div>

        </div>

        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe After Effects</span>
            <span>80%</span>
          </div>

          <div className="progress">
            <span style={{ width: "80%" }}></span>
          </div>

        </div>

        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe Premiere Pro</span>
            <span>90%</span>
          </div>

          <div className="progress">
            <span style={{ width: "90%" }}></span>
          </div>

        </div>

      </section>


      {/* =========================
    SERVICES
========================= */}

<section ref={(el) => sectionRefs.current[2] = el} id="services">

  <h2>My Services</h2>

  <div className="services">

    <div className="service-card">
      <h3>Graphic Design</h3>
      <p>
        Posters, banners, flyers, branding and social media creatives.
      </p>
    </div>

    <div className="service-card">
      <h3>Motion Graphics</h3>
      <p>
        Professional motion graphics, logo animation and reels.
      </p>
    </div>

    <div className="service-card">
      <h3>Product Advertisement</h3>
      <p>
        Creative product ads for brands and social media campaigns.
      </p>
    </div>

  </div>

</section>


{/* =========================
    CERTIFICATES
========================= */}

<section
  ref={(el) => (sectionRefs.current[5] = el)}
  id="certificates"
>

  <h2>My Certificates</h2>

  <div className="certificates">

    <div className="certificate-card">
      <h3>Graphic Design</h3>
      <p>Arena Animation</p>
    </div>

    <div className="certificate-card">
      <h3>Motion Graphics</h3>
      <p>Adobe After Effects Training</p>
    </div>

    <div className="certificate-card">
      <h3>Adobe Photoshop</h3>
      <p>Professional Certification</p>
    </div>

  </div>

</section>


{/* =========================
    TESTIMONIALS
========================= */}

<section
  ref={(el) => (sectionRefs.current[6] = el)}
  id="testimonials"
>

  <h2>Client Testimonials</h2>

  <div className="testimonial-container">

    <div className="testimonial-card">

      <p>⭐⭐⭐⭐⭐</p>

      <h4>Amit Kumar</h4>

      <p>
        Amazing work! Delivered on time with excellent quality.
      </p>

    </div>


    <div className="testimonial-card">

      <p>⭐⭐⭐⭐⭐</p>

      <h4>Rohit Singh</h4>

      <p>
        Very creative designer. Highly recommended.
      </p>

    </div>


    <div className="testimonial-card">

      <p>⭐⭐⭐⭐⭐</p>

      <h4>Priya Sharma</h4>

      <p>
        Professional product advertisements and motion graphics.
      </p>

    </div>

  </div>

</section>


{/* =========================
    PROJECTS
========================= */}

<section
  ref={(el) => (sectionRefs.current[3] = el)}
  id="projects"
>

  <h2>My Projects</h2>

  <div className="project-filter">

    <button
      className={filter === "All" ? "active" : ""}
      onClick={() => setFilter("All")}
    >
      All
    </button>

    <button
      className={filter === "Product Ads" ? "active" : ""}
      onClick={() => setFilter("Product Ads")}
    >
      Product Ads
    </button>

    <button
      className={filter === "Social Media" ? "active" : ""}
      onClick={() => setFilter("Social Media")}
    >
      Social Media
    </button>

    <button
      className={filter === "Branding" ? "active" : ""}
      onClick={() => setFilter("Branding")}
    >
      Branding
    </button>

  </div>


        <div className="projects">

          {/* Nike */}
          {(filter === "All" || filter === "Product Ads") && (
            <div className="card">

              <span className="project-tag">
                Product Ads
              </span>

              <img
                src={nike}
                alt="Nike Poster"
                onClick={() => setSelectedImage(nike)}
              />

              <h3>Nike Advertisement</h3>

              <p>
                Creative sports product advertisement design.
              </p>

              <a
  href={nike}
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Project
</a>

            </div>
          )}


          {/* Pizza */}
          {(filter === "All" || filter === "Social Media") && (
            <div className="card">

              <span className="project-tag">
                Social Media
              </span>

              <img
                src={pizza}
                alt="Pizza Poster"
                onClick={() => setSelectedImage(pizza)}
              />

              <h3>Pizza Advertisement</h3>

              <p>
                Restaurant promotion for social media marketing.
              </p>

              <a
  href={pizza}
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Project
</a>

            </div>
          )}


          {/* Coffee */}
          {(filter === "All" || filter === "Branding") && (
            <div className="card">

              <span className="project-tag">
                Branding
              </span>

              <img
                src={coffee}
                alt="Coffee Poster"
                onClick={() => setSelectedImage(coffee)}
              />

              <h3>Coffee Advertisement</h3>

              <p>
                Modern coffee brand promotional campaign.
              </p>

              <a
  href={coffee}
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Project
</a>

            </div>
          )}


          {/* Perfume */}
          {(filter === "All" || filter === "Branding") && (
            <div className="card">

              <span className="project-tag">
                Branding
              </span>

              <img
                src={perfume}
                alt="Perfume Poster"
                onClick={() => setSelectedImage(perfume)}
              />

              <h3>Perfume Advertisement</h3>

              <p>
                Luxury perfume advertising poster design.
              </p>

              <a
  href={perfume}
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Project
</a>

            </div>
          )}

        </div>

      </section>


      {/* =========================
          IMAGE POPUP
      ========================= */}

      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >

          <span className="close-btn">
            ✕
          </span>

          <img
            src={selectedImage}
            alt="Preview"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}


      {/* =========================
          CONTACT
      ========================= */}

      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        id="contact"
      >

        <h2>Contact Me</h2>

        <p>📞 +91 7701847962</p>

        <p>✉️ motiongraphicdesigner6@gmail.com</p>

        <a href="/sahilresum.pdf" download>
          <button>Download Resume</button>
        </a>


        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>


        <div className="social-links">

          <a
            href="https://www.instagram.com/official_designer_sahil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-raza-863a40408"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.fiverr.com/mdsahilraza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFiverr />
          </a>

        </div>

      </section>


      {/* =========================
          WHATSAPP
      ========================= */}

      <a
        href="https://wa.me/917701847962"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={34} />
      </a>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-content">

          <h3>Sahil Raza</h3>

          <p>Graphic & Motion Graphic Designer</p>

          <p>📍 Ranchi, Jharkhand, India</p>

          <p>📞 +91 7701847962</p>

          <p>✉️ motiongraphicdesigner6@gmail.com</p>

          <div className="footer-social">

            <a
              href="https://www.instagram.com/official_designer_sahil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-raza-863a40408"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.fiverr.com/mdsahilraza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFiverr />
            </a>

          </div>

          <hr />

          <p className="copyright">
            © 2026 Sahil Raza. All Rights Reserved.
          </p>

          <p className="made">
            Designed & Developed by Sahil Raza
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;