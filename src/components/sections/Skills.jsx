import data from "../../mock/data.json";
import VisibilitySensor from 'react-visibility-sensor';

const {skills} = data;

const ShowSkill = ({skill}) => {
  const color = 'var(--orange)';
  return (
    <div className="col-lg-6 progress">
      <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
      <div className="progress-bar-wrap">
      <VisibilitySensor>
        {({isVisible}) =>
          <div
            style={{
              background: color,
              width: isVisible ? skill.value + '%' : '1%'
            }}
            className="progress-bar"
          />
        }
      </VisibilitySensor>
      </div>
    </div>
  )
}

const SkillsSection = () => {
  return (
    <>
      {/*======= Skills Section =======*/}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Skill enhances to build the professional network, better communication, time management and
              negotiation skills.
              Nurturing Talent: Skills are something that can be acquired by learning and practicing and i have
              learned the below technologies and still practicing for the last
              <span className="yearOfExperience">Seven</span> years.
              Skill training is helping the people to identify, train and nurture their innate talent in the
              desired field.
            </p>
          </div>
          {/*Skills progress bar manipulation is done by JS*/}
          <div className="row skills-content">
            {skills && skills.length && skills.map(skill => (
              <ShowSkill skill={skill} key={Math.random()}/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillsSection;
