import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <h4>Programing Languages</h4>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-line.svg" alt="Image" />
                                    {/*C*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Image" />
                                    {/*java*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Image" />
                                    {/*python*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-plain.svg" alt="Image" />
                                   {/*r*/}
                                </div>
                            </Carousel>
                            <h4>Databases</h4>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="Image" />
                                    {/*mysql*/}
                                </div>
                                <div className="item">
                                    <img src= "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" alt="Image" />
                                    {/*postgresql*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"  alt="Image" />
                                    {/*azure sql database*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" alt="Image" />
                                    {/*dynamodb*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cosmosdb/cosmosdb-original-wordmark.svg" alt="Image" />
                                    {/*cosmosdb*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"  alt="Image" />
                                    {/*mongodb*/}
                                </div>
                                
                            </Carousel>
                            <h4>Cloud & DevOps</h4>
    
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="Image" />
                                    {/*aws*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" alt="Image" />
                                    {/*azure*/}
                                </div>
                                
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg"alt="Image" />
                                    {/*azure devops*/}
                                </div>
                                
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" alt="Image" />
                                    {/*google cloud*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="Image" />
                                {/*jenkins*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"  alt="Image" />
                                {/*docker*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg"  alt="Image" />
                                {/*kubernetes*/}
                                </div>
                                
                            </Carousel>
                            <h4>Tools ,Frameworks and libraries</h4>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"alt="Image" />
                                    {/*git*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"  alt="Image" />
                                {/*jira*/}
                                </div>
                                
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg"  alt="Image" />
                                {/*keras*/}
                                </div>
                                
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original-wordmark.svg"  alt="Image" />
                                    {/*apache spark*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original-wordmark.svg" alt="Image" />
                                    {/*apache kafka*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg" alt="Image" />
                                    {/*graphql*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original-wordmark.svg"  alt="Image" />
                                {/*hadoop*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" alt="Image" />
                                {/*jupyter*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain-wordmark.svg" alt="Image" />
                                {/*numpy*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg"  alt="Image" />
                                {/*opencv*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" alt="Image" />
                                {/*pandas*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg"  alt="Image" />
                                {/*pytorch*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain-wordmark.svg"  alt="Image" />
                                {/*redis*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original-wordmark.svg" alt="Image" />
                                {/*terraform*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original-wordmark.svg" alt="Image" />
                                {/*tomcat*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg"  alt="Image" />
                                {/*json*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"  alt="Image" />
                                  {/*html*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" alt="Image" />
                                   {/*css*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-plain.svg" alt="Image" />
                                    {/*xml*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="Image" />
                                    {/*javascript*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="Image" />
                                    {/*react*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" alt="Image" />
                                {/*vscode*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"  alt="Image" />
                                {/*linux*/}
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" alt="Image" />
                                {/*windows*/}
                                </div>
                            </Carousel>
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );
}