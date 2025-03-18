import React from 'react'

export default function MainSection() {
  return (
    <>
       <main>
      
      <section id="experience">
          <h2>Experience</h2>
          <div className="job_container">
              <div className="job">
                  <h3>Company A</h3>
                  <p><strong>Role:</strong> Intern (or Junior Developer)</p>
                  <p><strong>Duration:</strong> January 2023 - Present</p>
                  <p>Working on basic web development tasks and learning new technologies like the MERN stack.</p>
              </div>
              <div className="job">
                  <h3>Company B</h3>
                  <p><strong>Role:</strong> Trainee</p>
                  <p><strong>Duration:</strong> June 2021 - December 2022</p>
                  <p>Assisted in small frontend tasks and gained experience with HTML, CSS, and JavaScript.</p>
              </div>
          </div>
      </section>

      <section id="projects">
          <h2>Projects</h2>
          <div className="project_container">
              {[...Array(6)].map((_, index) => (
                <div className="project" key={index}>
                  <h3>Project {index + 1}</h3>
                  <p>Short description of the project, highlighting its purpose and main features.</p>
                  <p><a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
                </div>
              ))}
          </div>
      </section>

      <section id="contact">
          <h2>Contact</h2>
          <div className="contact_mail_phone">
              <div className="contact-info">
                  <p><strong>Email:</strong> toukirahmed.th@gmail.com</p>
                  <p><strong>Phone:</strong> 01306031982</p>
              </div>
          </div>
          <div className="form_section">
              <form action="https://formspree.io/f/xrbgkayy" method="post">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                  
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                  
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                  
                  <button type="submit">Send Message</button>
              </form>
          </div>
      </section>
  </main>
    </>
  )
}
