import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

import sahil from "./images/sahil.jpg";
import nike from "./images/nike.jpg";
import pizza from "./images/pizza.jpg";
import coffee from "./images/coffee.jpg";
import perfume from "./images/perfume.jpg";

import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [count, setCount] = useState(0);
const sectionRefs = useRef([]);
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
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
  useEffect(() => {

    const handleScroll = () => {

  

  sectionRefs.current.forEach((section) => {

    if (section) {

      const position = section.getBoundingClientRect().top;

      if (position < window.innerHeight - 100) {
        section.classList.add("show");
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

      if(number >= 100){
        clearInterval(interval);
      }

    },25);


    const timer = setTimeout(() => {
      setLoading(false);
    },2500);



    return () => {

      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      clearTimeout(timer);

    };


  },[]);



  if(loading){

    return(
      <div className="loader">

        <h1>Sahil Raza</h1>

        <p>
          Graphic & Motion Graphic Designer
        </p>

        <div className="loader-bar">
          <span></span>
        </div>

        <h2 className="count">
          {count}%
        </h2>

      </div>
    );

  }



  return (

    <div className={darkMode ? "app dark" : "app light"}>


      {/* Navbar */}

      <nav className="navbar">

        <h2 className="logo">
          Sahil Raza
        </h2>
<button
  className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "🌙" : "☀️"}
</button>

        <div
        className="menu-btn"
        onClick={()=>setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>



        <ul className={menuOpen ? "nav-links active":"nav-links"}>

          <li>
            <a href="#home" onClick={()=>setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={()=>setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={()=>setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#services" onClick={()=>setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
  <a href="#projects" onClick={()=>setMenuOpen(false)}>
    Projects
  </a>
</li>

<li>
  <a href="#testimonials" onClick={()=>setMenuOpen(false)}>
    Testimonials
  </a>
</li>

<li>
  <a href="#contact" onClick={()=>setMenuOpen(false)}>
    Contact
  </a>
</li>


        </ul>


      </nav>
            {/* Hero */}

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
          Creative <span>Graphic</span> &
          <span> Motion</span> Designer
        </h1>


        <h2 className="typing">

          <TypeAnimation
            sequence={[
              "Graphic Designer",2000,
              "Motion Graphic Designer",2000,
              "Product Advertisement Designer",2000
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
            <button>
              View My Work
            </button>
          </a>


          <a href="#contact">
            <button>
              Hire Me
            </button>
          </a>


          <a href="/sahilresum.pdf" download>
            <button>
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
            <FaInstagram/>
          </a>


          <a
          href="https://www.linkedin.com/in/sahil-raza-863a40408"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaLinkedin/>
          </a>


          <a
          href="https://www.fiverr.com/mdsahilraza"
          target="_blank"
          rel="noopener noreferrer"
          >
            <SiFiverr/>
          </a>

        </div>


      </section>



      {/* Stats */}

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
            {/* Skills */}

      <section ref={(el)=>sectionRefs.current[1]=el} id="skills">

        <h2>My Skills</h2>


        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe Photoshop</span>
            <span>95%</span>
          </div>

          <div className="progress">
            <span style={{width:"95%"}}></span>
          </div>

        </div>



        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe Illustrator</span>
            <span>100%</span>
          </div>

          <div className="progress">
            <span style={{width:"100%"}}></span>
          </div>

        </div>



        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe After Effects</span>
            <span>80%</span>
          </div>

          <div className="progress">
            <span style={{width:"80%"}}></span>
          </div>

        </div>



        <div className="skill-box">

          <div className="skill-title">
            <span>Adobe Premiere Pro</span>
            <span>90%</span>
          </div>

          <div className="progress">
            <span style={{width:"90%"}}></span>
          </div>

        </div>


      </section>



      {/* About */}

      <section ref={(el)=>sectionRefs.current[0]=el} id="about">

        <h2>About Me</h2>


        <p>
  Hi, I'm <strong>Sahil Raza</strong>, a passionate Graphic & Motion Graphic Designer
  with experience in creating professional branding, social media creatives,
  product advertisements, motion graphics and promotional videos.
</p>

<div className="about-boxes">

  <div className="about-card">
    <h3>🎨 Graphic Design</h3>
    <p>Creative posters, banners, flyers and branding designs.</p>
  </div>

  <div className="about-card">
    <h3>🎬 Motion Graphics</h3>
    <p>Professional logo animation, reels and promotional videos.</p>
  </div>

  <div className="about-card">
    <h3>🚀 Product Ads</h3>
    <p>Eye-catching advertisements for brands and social media.</p>
  </div>

</div>


      </section>

<section className="timeline">

  <h2>My Journey</h2>

  <div className="timeline-box">

    <div className="timeline-item">
      <h3>2025</h3>
      <p>Started learning Graphic Design.</p>
    </div>

    <div className="timeline-item">
      <h3>2026</h3>
      <p>Started Motion Graphics & Product Advertisement.</p>
    </div>

    <div className="timeline-item">
      <h3>Present</h3>
      <p>Working as a Freelance Graphic & Motion Graphic Designer.</p>
    </div>

  </div>

</section>

<section id="whyhire">

  <h2>Why Hire Me?</h2>

  <div className="whyhire-box">

    <div className="why-card">
      <h3>🎨 Creative Design</h3>
      <p>I create modern, unique and eye-catching designs for every project.</p>
    </div>

    <div className="why-card">
      <h3>⚡ Fast Delivery</h3>
      <p>Projects are completed on time without compromising quality.</p>
    </div>

    <div className="why-card">
      <h3>🎯 Attention to Detail</h3>
      <p>Every design is carefully crafted with precision and creativity.</p>
    </div>

    <div className="why-card">
      <h3>🤝 Client Satisfaction</h3>
      <p>My priority is delivering designs that exceed client expectations.</p>
    </div>

  </div>

</section>
      {/* Services */}

      <section ref={(el)=>sectionRefs.current[2]=el} id="services">


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

{/* Certificates */}

<section id="certificates">

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
{/* Testimonials */}

<section id="testimonials">

  <h2>Client Testimonials</h2>

  <div className="testimonials">

    <div className="testimonial-card">
      <p>
        ⭐⭐⭐⭐⭐
      </p>

      <h3>Amit Kumar</h3>

      <p>
        Amazing work! Delivered on time with excellent quality.
      </p>
    </div>

    <div className="testimonial-card">
      <p>
        ⭐⭐⭐⭐⭐
      </p>

      <h3>Rohit Singh</h3>

      <p>
        Very creative designer. Highly recommended.
      </p>
    </div>

    <div className="testimonial-card">
      <p>
        ⭐⭐⭐⭐⭐
      </p>

      <h3>Priya Sharma</h3>

      <p>
        Professional product advertisements and motion graphics.
      </p>
    </div>

  </div>

</section>
{/* Projects */}

<section ref={(el)=>sectionRefs.current[3]=el} id="projects">

        <h2>My Projects</h2>


        <div className="projects">


          <div className="card">

  <span className="project-tag">Product Ad</span>

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
  >
    <button>
      View Project
    </button>
  </a>

</div>



          <div className="card">
<span className="project-tag">Social Media</span>
            <img 
              src={pizza}
              alt="Pizza Poster"
              onClick={()=>setSelectedImage(pizza)}
            />

            <h3>Pizza Advertisement</h3>

            <p>
              Restaurant promotion for social media marketing.
            </p>

            <a 
            href={pizza}
            target="_blank"
            rel="noopener noreferrer"
            >
              <button>
                View Project
              </button>
            </a>

          </div>



          <div className="card">
<span className="project-tag">Branding</span>
            <img 
              src={coffee}
              alt="Coffee Poster"
              onClick={()=>setSelectedImage(coffee)}
            />

            <h3>Coffee Advertisement</h3>

            <p>
              Modern coffee brand promotional campaign.
            </p>

            <a 
            href={coffee}
            target="_blank"
            rel="noopener noreferrer"
            >
              <button>
                View Project
              </button>
            </a>

          </div>



          <div className="card">
<span className="project-tag">Branding</span>
            <img 
              src={perfume}
              alt="Perfume Poster"
              onClick={()=>setSelectedImage(perfume)}
            />

            <h3>Perfume Advertisement</h3>

            <p>
              Luxury perfume advertising poster design.
            </p>

            <a 
            href={perfume}
            target="_blank"
            rel="noopener noreferrer"
            >
              <button>
                View Project
              </button>
            </a>

          </div>


        </div>

      </section>




      {selectedImage && (

        <div 
        className="image-popup"
        onClick={()=>setSelectedImage(null)}
        >

          <span className="close-btn">
            ✕
          </span>


          <img
          src={selectedImage}
          alt="Preview"
          className="popup-image"
          />


        </div>

      )}



{/* Testimonials */}

<section id="testimonials">

  <h2>What Clients Say</h2>

  <div className="testimonial-container">

    <div className="testimonial-card">
      <p>
        "Excellent design quality and fast delivery. Highly recommended!"
      </p>
      <h4>⭐⭐⭐⭐⭐</h4>
      <span>— Client</span>
    </div>

    <div className="testimonial-card">
      <p>
        "Professional motion graphics with amazing creativity."
      </p>
      <h4>⭐⭐⭐⭐⭐</h4>
      <span>— Customer</span>
    </div>

    <div className="testimonial-card">
      <p>
        "Very satisfied with the product advertisement design."
      </p>
      <h4>⭐⭐⭐⭐⭐</h4>
      <span>— Brand Owner</span>
    </div>

  </div>

</section>
      {/* Contact */}


      <section ref={(el)=>sectionRefs.current[4]=el} id="contact">

        <h2>Contact Me</h2>


        <p>📞 +91 7701847962</p>

        <p>✉️ motiongraphicdesigner6@gmail.com</p>



        <a href="/sahilresum.pdf" download>

          <button>
            Download Resume
          </button>

        </a>




        <form ref={form} onSubmit={sendEmail} className="contact-form">

  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows="5"
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
            <FaInstagram/>
          </a>


          <a
          href="https://www.linkedin.com/in/sahil-raza-863a40408"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaLinkedin/>
          </a>


          <a
          href="https://www.fiverr.com/mdsahilraza"
          target="_blank"
          rel="noopener noreferrer"
          >
            <SiFiverr/>
          </a>


        </div>


      </section>




      <a
      href="https://wa.me/917701847962"
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      >

        <FaWhatsapp size={34}/>

      </a>




      <footer>

  <p>© 2026 Sahil Raza. All Rights Reserved.</p>

  <p>Designed & Developed by Sahil Raza</p>

</footer>

</div>

);

}

export default App;