import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: <a href="https://github.com/sumanth2727/Employe-Promotion-Predection" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Employee Promotion Prediction</a>,
            imgUrl: projImg1,
        },
        {
            title: <a href="https://github.com/sumanth2727/-Multilingual-News-Article-Similarity" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Multilingual News Article Similarity</a>,
            imgUrl: projImg6,
        },
        {
            title: <a href="https://github.com/sumanth2727/Face-Detection" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Face Detection</a>,
            imgUrl: projImg2,
        },
        {
            title: <a href="https://github.com/sumanth2727/CS-541-project" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Jarvis Virtual Assistant</a>,
            imgUrl: projImg4,
        },
        {
            title: <a href="https://github.com/sumanth2727/-Solaris-" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Solaris Web App</a>,
            imgUrl: projImg5,
        },
        
        {
            title: <a href="https://github.com/sumanth2727/Scrabble-Player-Rating" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Scrabble Player Rating</a>,
            imgUrl: projImg3,
        }
        
    ];
   

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
}