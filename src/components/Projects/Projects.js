import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div style={{ 
          minHeight: "60vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center",
          textAlign: "center"
        }}>
          <h1 className="project-heading">
            <strong className="purple">Projects</strong> Coming Soon
          </h1>
          <p style={{ color: "white", fontSize: "1.2rem", marginTop: "20px" }}>
            I'm working on some exciting DevOps and cloud infrastructure projects. 
            Stay tuned for updates!
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
