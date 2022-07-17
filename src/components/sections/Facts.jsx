import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import data from '../../mock/data.json';

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
              I have worked with {data.clients.map((client, i) => (
                <span key={i}><a href={client.link}>{client.name}</a>, </span>
              ))}
              and more and successfully delivered more than 30 projects so far.
            </p>
          </div>

          <div className="row">

            {data && data.facts && data.facts.map((fact, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className={`bx ${fact.icon}`}/>
                  <PureCounter end={fact.value} />
                  <p>{fact.label}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default FactsSection;
