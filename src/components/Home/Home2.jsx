import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Principal Engineer</b> specializing in DevOps and Site Reliability Engineering. 
              I love transforming complex infrastructure challenges into scalable, automated solutions that drive business value.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Docker, Kubernetes, Terraform, and Cloud Architecture (AWS/Azure){" "}
                </b>
              </i>
              — with extensive experience in building CI/CD pipelines and implementing SRE best practices.
              <br />
              <br />
              My key areas of expertise include
              <i>
                <b className="purple">
                  {" "}
                  Infrastructure as Code, Continuous Deployment, Site Reliability Engineering,{" "}
                </b>
              </i>
              and leading DevOps transformations that deliver measurable business impact.
              <br />
              <br />
              I'm passionate about building robust systems using
              <b className="purple"> Kubernetes </b> and modern DevOps tools like{" "}
              <i>
                <b className="purple">Terraform, ArgoCD, and Grafana</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
