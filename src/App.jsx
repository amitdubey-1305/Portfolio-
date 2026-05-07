import { motion } from 'framer-motion'
import profileImage from './assets/pic.png'
import resumePdf from './assets/Amit_Resume.pdf'
import { FaPython, FaJava, FaLaptopCode, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaWhatsapp, FaDownload } from 'react-icons/fa'
import { FaBrain, FaRobot, FaChartLine, FaNetworkWired } from 'react-icons/fa6'
import { SiMysql, SiPandas, SiNumpy, SiExpress, SiMongodb, SiGeeksforgeeks } from 'react-icons/si'
import './index.css'
import './App.css'

function App() {
  const skills = [
    { name: "Python", icon: <FaPython color="#3776AB" size={20} /> },
    { name: "Fullstack Dev", icon: <FaLaptopCode color="#00d2ff" size={20} /> },
    { name: "Java", icon: <FaJava color="#5382a1" size={20} /> },
    { name: "AI", icon: <FaBrain color="#ff6b6b" size={20} /> },
    { name: "Agentic AI", icon: <FaRobot color="#a55eea" size={20} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={20} /> },
    { name: "Pandas", icon: <SiPandas color="#150458" size={20} /> },
    { name: "NumPy", icon: <SiNumpy color="#013243" size={20} /> },
    { name: "Matplotlib", icon: <FaChartLine color="#11557c" size={20} /> },
    { name: "Machine Learning", icon: <FaNetworkWired color="#fc5c65" size={20} /> },
    { name: "Express", icon: <SiExpress color="#ffffff" size={20} /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" size={20} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={20} /> },
    { name: "DSA", icon: <SiGeeksforgeeks color="#2F8D46" size={20} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Wellness Sessions Platform",
      description: "Built a full-stack Wellness Sessions platform using TypeScript with secure JWT-based authentication, enabling users to register, log in, and manage personalized wellness sessions.",
      link: "https://wellness-frontend-z5rs.vercel.app/auth"
    },
    {
      id: 2,
      title: "SkillBridgeAI ",
      description: "AI-Powered Career Guidance Platform Built a full-stack platform using React.js, Node.js, Express.js, and MongoDB enabling OTP authentication, resume analysis, skill gap insights, and personalized career roadmaps.Integrated intelligent modules like onboarding, assessments, job matching, and AI chat to deliver end-to-end career guidance for India’s workforce..",
      link: "https://example.com/project-beta"
    },
    {
      id: 3,
      title: "SaaS CRUD Platform",
      description: "Developed a full-stack SaaS application using React.js, Node.js, Express.js, and MongoDB enabling complete CRUD operations.",
      link: "https://example.com/ecommerce"
    },
    {
      id: 4,
      title: "Task Manager",
      description: "A productivity tool that helps teams organize and track their daily tasks.",
      link: "https://example.com/task-manager"
    }
  ];

  // Stagger children animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <>
      <motion.div
        className="glass-container"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="profile-img"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0, 210, 255, 0.6)", rotate: 2 }}
          />

          <motion.h1 className="title hero-title" variants={itemVariants}>
            Amit <span className="highlight-text">Dubey</span>
          </motion.h1>

          <motion.h3 className="hero-subtitle" variants={itemVariants}>
            Software Engineer & Full Stack Developer
          </motion.h3>

          <motion.p className="hero-bio" variants={itemVariants}>
            Building high-performance, beautiful applications tailored to real-world needs. Let's create something amazing together.
          </motion.p>

          <motion.div className="btn-group" variants={itemVariants}>
            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn primary-btn"
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 210, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="glass-container about-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="title section-title">
          About Me
        </motion.h2>
        <motion.p className="about-text">
          I am a passionate Full-Stack Developer with hands-on experience in Machine Learning and AI, alongside expertise in MERN stack (MongoDB, Express.js, React.js, Node.js). I build modern, responsive, and intelligent web applications, integrating AI-powered features to solve real-world problems. I enjoy writing clean, efficient code, exploring new technologies, and delivering projects that make an impact.
        </motion.p>
      </motion.div>

      <motion.div
        className="glass-container skills-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="title section-title">
          My Skills
        </motion.h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-badge"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 210, 255, 0.2)", borderColor: "rgba(0, 210, 255, 0.5)" }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-container projects-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="title section-title">
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 30px rgba(0, 210, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-link-text">View Project →</div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.footer
        className="glass-container contact-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title section-title" style={{ textAlign: "center" }}>Get In Touch</h2>
        <p className="about-text" style={{ textAlign: "center", marginBottom: "2rem" }}>
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="social-links">
          <a href="mailto:amitdubey1305@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={28} />
          </a>
          <a href="https://github.com/amitdubey-1305" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/amitdubey1305" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://x.com/amitdubey1305" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
          <a href="https://wa.me/918756233696" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={28} />
          </a>
          <a href="https://www.geeksforgeeks.org/profile/amitdub78hh" className="social-icon" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks size={28} />
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Amit Dubey. All rights reserved.
        </p>
      </motion.footer>
    </>
  )
}

export default App
