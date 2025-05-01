import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skillsData = [
  { name: 'HTML', now: 90 },
  { name: 'CSS', now: 85 },
  { name: 'JavaScript', now: 80 },
  { name: 'React', now: 75 },
  { name: 'Python', now: 70 },
  { name: 'Shell Script', now: 65 },
  { name: 'BootStrap', now: 60 },
  { name: 'PostgreSQL', now: 50 },
];

const Skills = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center px-3 py-5 " style={{backgroundColor:'#f3f2f6'}}>
      <Container fluid className="px-0">
        <h1 className="text-center mb-4">Skills</h1>
        <p className="text-center mb-5 px-4">
          Lorem ipsum dolor sit amet, consectetur sadipscing elit. Lorem ipsum dolor sit amet, consectetur sadipscing elit.
        </p>

        <Row>
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h5>MY FOCUS</h5>
            <hr className="bg-white w-25 mx-md-0 mx-auto" />
            <ul className="list-unstyled mt-3">
              <li>Front-end Tools</li>
              <li>Responsive Website</li>
              <li>Web Design</li>
              <li>Back-end Tools</li>
            </ul>
          </Col>
          <Col md={8}>
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between">
                  <strong>{skill.name}</strong>
                </div>
                <ProgressBar now={skill.now} variant="dark" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
