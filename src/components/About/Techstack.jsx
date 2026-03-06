import React from "react";
import { Col, Row } from "react-bootstrap";
import Go from "../../Assets/TechIcons/go.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/kafka.png";
import Node from "../../Assets/TechIcons/Node.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Terraform from "../../Assets/TechIcons/terraform.png";
import Jenkins from "../../Assets/TechIcons/jenkins.jpeg";
import ArgoCD from "../../Assets/TechIcons/argocd.png";
import Azure from "../../Assets/TechIcons/azure.jpeg";
import Grafana from "../../Assets/TechIcons/grafana.jpeg";
import Testkube from "../../Assets/TechIcons/testkube.png";
import Dynatrace from "../../Assets/TechIcons/dynatrace.png";
import GCP from "../../Assets/TechIcons/gcp.png";
import Harness from "../../Assets/TechIcons/harness.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" className="tech-icon-images" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Terraform} alt="terraform" className="tech-icon-images" />
        <div className="tech-icons-text">Terraform</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jenkins} alt="jenkins" className="tech-icon-images" />
        <div className="tech-icons-text">Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ArgoCD} alt="argocd" className="tech-icon-images" />
        <div className="tech-icons-text">ArgoCD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="aws" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Azure} alt="azure" className="tech-icon-images" />
        <div className="tech-icons-text">Azure</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Grafana} alt="grafana" className="tech-icon-images" />
        <div className="tech-icons-text">Grafana</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Go</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="kafka" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="postgresql" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongodb" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" className="tech-icon-images" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Testkube} alt="testkube" className="tech-icon-images" />
        <div className="tech-icons-text">Testkube</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Dynatrace} alt="dynatrace" className="tech-icon-images" />
        <div className="tech-icons-text">Dynatrace</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GCP} alt="gcp" className="tech-icon-images" />
        <div className="tech-icons-text">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Harness} alt="harness" className="tech-icon-images" />
        <div className="tech-icons-text">Harness</div>
      </Col>
    </Row>
  );
}

export default Techstack;
