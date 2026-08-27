"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "DATA SCIENCE",
    title: "AI-Powered Fraud Detection",
    description:
      "Real-time fraud detection using Random Forest and XGBoost with feature engineering across 25+ transaction attributes.",
    tech: ["Python", "XGBoost", "Random Forest", "Scikit-learn"],
    visual: "fraud",
  },
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "Movie Data Warehouse & Analytics",
    description:
      "End-to-end ETL pipeline with data modelling, SQL and analytics to uncover insights across movies, genres and trends.",
    tech: ["Python", "SQL", "ETL", "Data Warehousing"],
    visual: "warehouse",
  },
  {
    number: "03",
    category: "DATA + ML",
    title: "AI Stock Market Dashboard",
    description:
      "Streamlit dashboard for stock data ingestion, KPI visualization, technical indicators and next-day price prediction.",
    tech: ["Python", "ETL", "Streamlit", "Plotly"],
    visual: "stock",
  },
  {
    number: "04",
    category: "NLP / AI",
    title: "AI Tourism Chatbot",
    description:
      "NLP-powered virtual travel assistant with intent recognition, entity extraction and a database-backed travel information system.",
    tech: ["Python", "NLP", "SQL", "Streamlit"],
    visual: "chatbot",
  },
];

const skills = [
  ["PYTHON", "Programming"],
  ["JAVA", "Programming"],
  ["SQL", "Databases"],
  ["MACHINE LEARNING", "AI & Data Science"],
  ["NLP", "Artificial Intelligence"],
  ["ETL", "Data Engineering"],
  ["DATA WAREHOUSING", "Data Engineering"],
  ["SNOWFLAKE", "Currently Learning"],
  ["STREAMLIT", "Tools & Platforms"],
  ["PANDAS / NUMPY", "Data Analysis"],
  ["SCIKIT-LEARN / XGBOOST", "Machine Learning"],
  ["GIT / GITHUB", "Development"],
];

const certifications = [
  {
    number: "01",
    company: "SAP",
    title: "SAP Certified - Data Analyst",
    subtitle: "SAP Analytics Cloud",
    date: "AUG 2026",
    logo: "/logos/sap.png",
  },
  {
    number: "02",
    company: "ORACLE",
    title: "OCI - Generative AI Professional",
    subtitle: "Oracle Cloud Infrastructure",
    date: "SEP 2025",
    logo: "/logos/oracle.png",
  },
  {
    number: "03",
    company: "ORACLE",
    title: "OCI - Data Science Professional",
    subtitle: "Oracle Cloud Infrastructure",
    date: "SEP 2025",
    logo: "/logos/oracle.png",
  },
  {
    number: "04",
    company: "IBM",
    title: "Enterprise Data Science Practices",
    subtitle: "IBM",
    date: "NOV 2025",
    logo: "/logos/ibm.png",
  },
  {
    number: "05",
    company: "CISCO",
    title: "Introduction to Modern AI",
    subtitle: "Cisco Networking Academy",
    date: "JAN 2026",
    logo: "/logos/cisco.png",
  },
  {
    number: "06",
    company: "UDEMY",
    title: "Chatbot - AI & NLP",
    subtitle: "Artificial Intelligence & NLP",
    date: "OCT 2025",
    logo: "/logos/udemy.png",
  },
  {
    number: "07",
    company: "IIT BOMBAY",
    title: "Git Training Completion",
    subtitle: "Spoken Tutorial",
    date: "NOV 2025",
    logo: "/logos/git.png",
  },
];

export default function Home() {
  return (
    <main className="portfolio">

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="logo">
          ROSHNI
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>

        <img
          src="/profile.jpg"
          alt="Roshni"
          className="nav-profile"
        />

      </nav>


      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-content">

          <motion.p
            className="hello"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ROSHNI
            <br />
            TARAFDAR
          </motion.h1>

          <div className="hero-role">
            DATA SCIENTIST
            <span>•</span>
            DATA ENGINEER
          </div>

          <p className="hero-description">
            Information Science Engineering student passionate about
            building data-driven solutions, intelligent systems and
            meaningful analytics.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              ▶ &nbsp; VIEW MY WORK
            </a>

            <a
              href="https://github.com/Rosh0011"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              ◉ &nbsp; GITHUB
            </a>

          </div>

          <div className="hero-skills">
            <span>PYTHON</span>
            <span>SQL</span>
            <span>MACHINE LEARNING</span>
            <span>ETL</span>
            <span>DATA WAREHOUSING</span>
            <span>SNOWFLAKE</span>
          </div>

        </div>


        {/* PHOTO ONLY — NO OVERLAY */}

        <div className="hero-image-container">

          <img
            src="/profile.jpg"
            alt="Roshni Tarafdar"
            className="hero-image"
          />

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="section about-section">

        <div className="section-heading">

          <p className="section-label">
            PROFILE
          </p>

          <h2>
            About Me <span>/</span>
          </h2>

        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              🎓 I am an Information Science Engineering student at
              <strong>
                {" "}New Horizon College of Engineering, Bengaluru.
              </strong>
            </p>

            <p>
              📊 I am building my career toward
              <strong>
                {" "}Data Science, Data Engineering, Machine Learning
                and Data Analytics.
              </strong>
            </p>

            <p>
              🔄 I enjoy working with ETL pipelines, data modelling,
              SQL, data visualization and data warehousing.
            </p>

            <p>
              🤖 My projects focus on real-world applications including
              fraud detection, NLP, stock market analytics and data
              warehousing.
            </p>

            <p>
              ❄️ Currently learning
              <strong> Snowflake</strong> and modern cloud-based
              data engineering workflows.
            </p>

          </div>

        </div>

      </section>


      {/* LEADERSHIP */}

      <section id="leadership" className="section leadership-section">

        <div className="section-heading">

          <p className="section-label">
            BEYOND ACADEMICS
          </p>

          <h2>
            Leadership & Impact <span>/</span>
          </h2>

        </div>

        <p className="section-intro">
          Leadership, communication, collaboration and community
          involvement beyond technical projects.
        </p>

        <div className="leadership-grid">


          {/* BIT */}

          <motion.div
            className="leadership-card"
            whileHover={{ y: -8 }}
          >

            <div className="club-logo-wrap">

              <img
                src="/bit-logo.png"
                alt="BIT Club"
                className="club-logo"
              />

            </div>

            <div className="leadership-info">

              <p className="leadership-role">
                VICE PRESIDENT
              </p>

              <h3>
                BIT CLUB
              </h3>

              <p>
                Business and Information Technology Club
              </p>

              <span>
                2025 – PRESENT
              </span>

            </div>

          </motion.div>


          {/* LEO */}

          <motion.div
            className="leadership-card"
            whileHover={{ y: -8 }}
          >

            <div className="club-logo-wrap">

              <img
                src="/leo-logo.png"
                alt="Leo Club"
                className="club-logo"
              />

            </div>

            <div className="leadership-info">

              <p className="leadership-role">
                BOARD MEMBER
              </p>

              <h3>
                LEO CLUB
              </h3>

              <p>
                New Horizon
              </p>

              <span>
                2024 – PRESENT
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* PROJECTS */}

{/* PROJECTS */}

<section id="projects" className="section projects-section">

  <div className="section-heading">

    <p className="section-label">
      FEATURED WORK
    </p>

    <h2>
      Top Projects <span>/</span>
    </h2>

  </div>

  <div className="projects-grid">

    {projects.map((project) => (

      <motion.article
        key={project.title}
        className={`project-card project-${project.visual}`}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.2,
        }}
      >

        {/* PROJECT VISUAL */}

        <div className="project-top">

          <span className="project-number">
            {project.number}
          </span>

          <div className="project-visual">

            {project.visual === "fraud" && (
              <>
                <div className="visual-shield">
                  
                </div>

                <div className="visual-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </>
            )}

            {project.visual === "warehouse" && (
              <>
                <div className="visual-database">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="visual-etl">
                  ETL
                </div>
              </>
            )}

            {project.visual === "stock" && (
              <div className="visual-chart">

                <span />
                <span />
                <span />
                <span />
                <span />

                <div className="chart-line" />

              </div>
            )}

            {project.visual === "chatbot" && (
              <>
                <div className="visual-chat">
                  <span>
                    AI
                  </span>
                </div>

                <div className="chat-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </>
            )}

          </div>

        </div>


        {/* PROJECT INFORMATION */}

        <div className="project-body">

          <p className="project-category">
            {project.category}
          </p>

          <h3>
            {project.title}
          </h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="tech-list">

            {project.tech.map((item) => (

              <span key={item}>
                {item}
              </span>

            ))}

          </div>

          <a
            href="https://github.com/Rosh0011"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            VIEW CODE

            <span>
              →
            </span>

          </a>

        </div>

      </motion.article>

    ))}

  </div>

</section>

      {/* SKILLS */}

      <section id="skills" className="section skills-section">

        <div className="section-heading">

          <p className="section-label">
            TECHNOLOGY STACK
          </p>

          <h2>
            Explore My Skills <span>/</span>
          </h2>

        </div>

        <div className="skills-grid">

          {skills.map(([name, category], index) => (

            <motion.div
              key={name}
              className="skill-card"
              whileHover={{ x: 7 }}
            >

              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>

                <h3>
                  {name}
                </h3>

                <p>
                  {category}
                </p>

              </div>

              <span className="skill-arrow">
                →
              </span>

            </motion.div>

          ))}

        </div>

      </section>


      {/* CERTIFICATIONS */}

{/* CERTIFICATIONS */}
{/* CERTIFICATIONS */}

<section
  id="certifications"
  className="section certifications-section"
>

  <div className="section-heading">

    <p className="section-label">
      LEARNING JOURNEY
    </p>

    <h2>
      Certifications <span>/</span>
    </h2>

  </div>

  <div className="certifications-grid">

    {certifications.map((cert) => (

      <motion.div
        key={cert.number}
        className="cert-card"
        whileHover={{ y: -7 }}
        transition={{ duration: 0.2 }}
      >

        <span className="cert-number">
          {cert.number}
        </span>


      <div className="company-logo">
        <img
          src={cert.logo}
          alt={`${cert.company} logo`}
        />
      </div>

      <h3>
        {cert.title}
      </h3>

        <p>
          {cert.subtitle}
        </p>

        <span className="cert-line">
          {cert.date}
        </span>

      </motion.div>

    ))}

  </div>

</section>      

{/* CONTACT */}

      <section id="contact" className="section contact-section">

        <div className="section-heading">

          <p className="section-label">
            CONNECT
          </p>

          <h2>
            Let's Connect <span>/</span>
          </h2>

        </div>

        <p>
          Interested in data, technology, collaboration or internship
          opportunities? Let's connect.
        </p>

        <div className="contact-links">

          <a href="mailto:tarafdarroshni11@gmail.com">
            EMAIL
          </a>

          <a
            href="https://www.linkedin.com/in/roshni-tarafdar-028048295/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/Rosh0011"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>

          <a
            href="https://leetcode.com/u/roshnit31/"
            target="_blank"
            rel="noreferrer"
          >
            LEETCODE
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <strong>
          ROSHNI
        </strong>

        <span>
          Building with Data • Learning with AI • Growing with Cloud
        </span>

      </footer>

    </main>
  );
}
