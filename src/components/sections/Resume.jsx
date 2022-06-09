import data from "../../mock/data.json";

const ResumeSection = () => {
  return (
    <>
      {/*======= Resume Section =======*/}
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p>{data.resume.description}</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>{data.name}</h4>
                <p>
                  <em>
                    With <span className="yearOfExperience">Seven</span> years of working experience in the IT
                    industry, I worked as a senior software engineer as well as a full stack developer for
                    web and mobile. Because I've already held all the other positions in this field, I have
                    keen insight into what it takes to run a successful project. My career goal is to move
                    into management as a CTO in next three years.
                  </em>
                </p>
                <ul>
                  <li>{data.address}</li>
                  <li><a href={`tel:${data.phone}`}>{data.phone}</a></li>
                  <li>
                    <a href={`mailto:${data.email}`}>{data.email}</a>,
                    <a href="mailto:roy@ueepinc.com">roy@ueepinc.com</a>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>

              {data.resume?.exams.map((exam, index) => (
                <div key={index} className="resume-item">
                  {exam.name && <h4>{exam.name}</h4>}
                  {exam.subject && <h5>{exam.subject}</h5>}
                  {exam.year && <h5>{exam.year}</h5>}
                  {exam.result && <h5>{exam.result}</h5>}
                  {exam.university && <p><em>{exam.university}</em></p>}
                </div>
              ))}

            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>

              {data.resume.experiences.map((experience, index) => (
                <div key={index} className="resume-item">
                  <h4>{experience.role}</h4>
                  {experience.company && <p className={'m-zero'}><a href={experience.company.link}>{experience.company.name}</a></p>}
                  {experience.duration && <h6>{experience.duration}</h6>}
                  {experience.remark && <p>{experience.remark}</p>}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResumeSection;
