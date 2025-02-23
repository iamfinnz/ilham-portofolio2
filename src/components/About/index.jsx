import './About.css'
import Hole from '../../ui/Hole'
import { skills } from '../../data'
import CardUi from '../../assets/CardUi'

const About = () => {
  return (
    <section id='about'>
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="skill__group" key={index}>
                {skill.data.map((list,key) => (
                  <div className="blur__overlay skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Ilham Arifin</span>
          </h1>
          <p className="text__muted desription" style={{textAlign: "justify"}}>
          I am a Software Developer passionate about crafting dynamic, user-friendly, 
          and visually engaging web and mobile applications. Proficient in multiple 
          programming languages and frameworks, including PHP, Laravel, CodeIgniter, 
          JavaScript, HTML, CSS, ReactJS, NextJS, NodeJS, Kotlin, and Java. Driven by 
          a relentless curiosity, I continuously hone my skills to stay ahead of emerging 
          technologies. Currently seeking opportunities to contribute to innovative projects 
          and evolve as a highly skilled developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About