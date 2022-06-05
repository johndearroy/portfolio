import data from "../../mock/data.json";
const AboutSection = () => {
  /**
   * Set random profile pictures
   */
  const getProfileImage = () => {
    const images = data.profilePictures;
    return images[Math.floor(Math.random() * images.length)];
  }

  return (
    <>
      {/*======= About Section =======*/}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p className="about-me">
              “I'm an experienced software engineer who constantly seeks out innovative solutions to everyday
              problems. In my <span className="yearOfExperience">Seven</span> years in this industry, I've honed my
              analytical thinking and collaboration skills, and I love working with a team. I've also had the
              opportunity to serve as the software engineer lead for three years with a lot of tech enthusiast
              peoples.
              My commitment to critical thinking and attention to detail have gotten me to where I am today as a
              senior software engineer. I have a passion for processes, and I'm an experienced team leader who
              typically manages 10 developers at any given time.
              “Prior to my senior role, I worked as a software engineer as well as a full stack developer for web
              and mobile. Because I've already held all the other positions in this field, I have keen insight
              into what it takes to run a successful project. My career goal is to move into management as a CTO,
              and I know this role would help me hone my leadership skills.”
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={require(`../../images/${getProfileImage()}`)} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>{data.designation}</h3>
              <p className="fst-italic">
                I am a full stack software developer and used to develop software's for both mobile and web. I
                also have a good understanding on the UI/UX and have a great test about that.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Birthday:</strong>
                      <span>{data.dateOfBirth}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Sex:</strong>
                      <span>{data.sex}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Website:</strong>
                      <span>{data.website}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Phone:</strong>
                      <span>{data.phone}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>City:</strong>
                      <span>{data.city}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Nationality:</strong>
                      <span>{data.nationality}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Age:</strong>
                      <span id="getAge">29</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Marital status:</strong>
                      <span>{data.maritalStatus}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Degree:</strong>
                      <span>{data.lastDegree}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Email:</strong>
                      <span>{data.email}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Freelance:</strong>
                      <span>{data.freelanceStatus}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"/>
                      <strong>Language:</strong>
                      <span>{data.language}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;
