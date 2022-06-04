import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const PureCounter = ({start = 0, end}) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <div style={{ height: 50 }}>
          {isVisible ? <CountUp start={start} end={end} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp> : null}
        </div>
      )}
    </VisibilitySensor>
  )
}

const FactsSection = () => {
  return (
    <>
      {/*======= Facts Section =======*/}
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              I have worked with <a href="https://www.unicef.org/">UNICEF</a>,
              <a href="https://ictd.gov.bd/">ICT Ministry of Bangladesh</a>,
              <a href="https://www.unesco.org/en">UNESCO</a>,
              <a href="http://www.mowca.gov.bd/">MOWCA</a>,
              <a href="https://www.robi.com.bd/en">Robi Axiata</a>,
              <a href="https://uniteliving.com/">Unite Living AS</a>
              and more and successfully delivered more than 30 projects so far.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"/>
                <PureCounter end={36} />
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"/>
                <PureCounter end={27} />
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"/>
                <PureCounter end={8} />
                <p>Working Hour/Day</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-award"/>
                <PureCounter end={3} />
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FactsSection;
