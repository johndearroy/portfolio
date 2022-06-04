import {generateRandomGradient} from '../../services/color';
const skills = [
  {name: 'html', value: 100, color: 'blue'},
  {name: 'css', value: 95, color: 'red'},
  {name: 'javascript', value: 80, color: 'green'},
  {name: 'php', value: 85, color: 'yellow'},
  {name: 'dart', value: 45, color: 'pink'},
  {name: 'mysql', value: 60, color: 'purple'},
  {name: 'mongodb', value: 60, color: 'red'},
  {name: 'graphql', value: 60, color: 'teal'},
  {name: 'laravel', value: 90, color: 'orange'},
  {name: 'symfony', value: 80, color: 'gray'},
  {name: 'cakephp', value: 50, color: 'red'},
  {name: 'react', value: 85, color: 'red'},
  {name: 'react native', value: 85, color: 'red'},
  {name: 'nextjs', value: 80, color: 'red'},
  {name: 'vuejs', value: 90, color: 'red'},
  {name: 'nodejs', value: 70, color: 'red'},
  {name: 'expressjs', value: 85, color: 'red'},
  {name: 'flutter', value: 75, color: 'red'},
  {name: 'bootstrap', value: 100, color: 'red'},
  {name: 'tailwindcss', value: 100, color: 'red'},
  {name: 'aws', value: 60, color: 'red'},
  {name: 'ci/cd', value: 45, color: 'red'},
  {name: 'test driven development', value: 60, color: 'red'}
];

const ShowSkill = ({skill}) => {
  const color = generateRandomGradient();
  console.log(color)
  return (
    <div className="col-lg-6 progress">
      <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
      <div className="progress-bar-wrap">
        <div
          style={{
            background: color,
            width: skill.value + '%'
          }}
          className="progress-bar"
        />
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
