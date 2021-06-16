import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
const Skills = (props) => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <section id="skills">
      <Container>
        <Fade bottom={isMobile} left={isDesktop} duration={1000} delay={500} distance="30px">
          <Title title="Skills" />
        </Fade>
        <Row className="skill">
          {skills.map((skill) => {
            const { title, id, extra } = skill;
            let x = title.toLowerCase();
            return (
              <Col
                id={id}
                xl={2}
                lg={3}
                md={3}
                sm={4}
                xs={6}
                style={{ marginTop: '5em' }}
                className="d-flex justify-content-center"
              >
                <div className=" shadow-sm d-flex flex-column" style={{ width: '10em' }}>
                  <i
                    className={`fab fa-${x} fab fa-${extra} fa-5x text-color-main`}
                    style={{ transition: 'scale(3)' }}
                  ></i>
                  <h5 className="text-color-main font-weight-bold">{title}</h5>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
