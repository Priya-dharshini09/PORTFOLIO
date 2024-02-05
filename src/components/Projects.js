import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/evote.png";
import projImg2 from "../assets/img/nft.png";
import projImg4 from "../assets/img/store.png";
import projImg5 from "../assets/img/cust.png";
import projImg6 from "../assets/img/char.png";
import projImg7 from "../assets/img/crowd.png";
import dpbh from "../assets/img/dpbh.jpg";
import sih from "../assets/img/sih.jpg";
import gov from "../assets/img/gov.jpg";
import brics from "../assets/img/brics.png";
import ds from "../assets/img/ds.png";
import wix from "../assets/img/wix.png";
import py from "../assets/img/py.png";
import da from "../assets/img/da.png";
import bs from "../assets/img/bs.png";
import sc from "../assets/img/sm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Voting System Using Blockchain",
      description: "Voting system , Implemented Blockchain Technology to secure votes",
      imgUrl: projImg1,
    },
    {
      title: "NFT Website using Polygon",
      description: "NFT creation, Buy and Sell Nfts, Deployed in Polygon Network",
      imgUrl: projImg2,
    },
    {
      title: "Storing Land records using Blockchain",
      description: "Developed to Store Land records in a secure way",
      imgUrl: projImg4,
    },
    {
      title: "Customer relationship mangement system",
      description: "To store the records of phone calls for Hotel",
      imgUrl: projImg5,
    },
    {
      title: "Donation and charity website",
      description: "To fund for the charity by anyone around the world",
      imgUrl: projImg6,
    },
    {
      title: "Crowd funding using Blockchain",
      description: "Website to fund for a cause using cryptocurrencies",
      imgUrl: projImg7,
    },
  ];

  const arri = [
    {
      title: "Data Structres using Java",
      description: "Certified under Swayam NPTEL by IIT Kharagpur",
      imgUrl: ds,
    },
    {
      title: "Python for Data science",
      description: "Certified under Swayam NPTEL by IIT Madras",
      imgUrl: py,
    },
    {
      title: "Blockchain Basics",
      description: "Certified under Coursera by University of Buffalo",
      imgUrl: bs,
    },
    {
      title: "Smart Contracts",
      description: "Certified under Coursera by University of Buffalo",
      imgUrl: sc,
    },
    {
      title: "Decentralized Applications",
      description: "Certified under Coursera by University of Buffalo",
      imgUrl: da,
    },
    {
      title: "Build a website using Wix Artificial Design Intelligence",
      description: "Certified under Coursera by Coursera Project network",
      imgUrl: wix,
    },
    
  ];

    const Achi = [
      {
        title: "Govtechthon 2022",
        description: "Won 1st Prize of cash Prize Rs.50000.Conducted by the government of Tirunelvel",
        imgUrl: gov,
      },
      {
        title: "Smart India Hackathon 2022",
        description: "Finalist in SIH 2022 conducted by the government of India in IIT Roorkee",
        imgUrl: sih,
      },
      {
        title: "BRICS 2023",
        description: "Won Bronze Medal , Conducted by the BRICS Nations in the international level",
        imgUrl: brics,
      },
      {
        title: "Dark pattern Buster Hackathon 2023",
        description: "Conducted by the Government of Consumer affairs ,India",
        imgUrl: dpbh,
      },
      
    ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Achievements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Achi.map((Ach, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Ach}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          arri.map((cur, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...cur}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
