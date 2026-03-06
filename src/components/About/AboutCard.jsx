import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ketul Patel</span>{" "}
            from <span className="purple">MI, USA</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Principal Engineer</span> at{" "}
            <span className="purple">United Wholesale Mortgage</span>.
            <br />I hold an Integrated B.Sc. (IMSc) in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">BVM</span>.
            <br />
            <br />
            I’m passionate about DevOps transformation and leading teams to 
            engineering excellence. My work focuses on implementing SRE practices, 
            building scalable infrastructure, and driving significant business impact 
            through automation and cloud optimization.
            <br />
            <br />
            Outside of work, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ketul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
