import {Card, CardText, CardBody, CardTitle, Col, Row} from 'reactstrap';


export function About(){
    /*
    <div>
        <img className="rounded-circle people_image" src={"./vishank.jpeg"}  alt={"Vishank"}/>
    </div>
    */
    return(
        <div className="homepage firstitem">
            <h1 className="title about">ABOUT</h1>
            <div className="mt-4">

                <p className = "text about">I am currently a junior majoring in Computer Science/Informatics with a concentration in Software Engineering and minoring in Entrepreneurship at the University of Washington, Seattle.
                <br/><br/>
                Although I am Indian and study in Seattle, I was born and raised in Dubai. One of my biggest takeaways from living in such a fast-paced city is the importance of constantly learning. 
                <br/><br/>
                Both the places I have lived in have vastly influenced my work; in Dubai, I was the co-founder of a student accelerator called Business Minds that gave students an entrepreneurial platform to execute their ideas. The initiative received media attention and a large sponsorship from the Apparel Group that was directed towards the prize.
                <br/><br/>
                At university, I am involved in Alpha Kappa Psi, a business fraternity, as well as UW’s largest tech club - DubsTech - as the director of the Protothon. I also accepted an offer to be a Teaching Assistant for Client-Side Development, a 300-level course, for Spring 2021. 
                <br/><br/>
                In my free time, I enjoy undertaking projects of my own. For example, during the summer of 2020, I worked on creating a scheduling application for clinics and also dabbled in making basic<a href="https://github.com/vishankrug/gamesOnProcessing"> games </a> like snake and pong. Take a look at my <a href="./Vishank_Rughwani_Resume.pdf">resume</a>!
                </p>
            </div>
        </div>
    )
}


export function Projects(){
    return(
        <div className="homepage">
        <h1 className="title projects"> FEATURED PROJECTS</h1>
        <Row>
            <Col md="4" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                        
                        <img width="150" className="" src={"./huskler.png"}  alt={"Vishank"}/>
                        <CardTitle className = "text project-name"><em><a href="https://github.com/vishankrug/huskler">huskler</a></em></CardTitle>
                        <CardText className="text">
                            Something that both my students and I experienced was feeling lost in a crowd of 45,000-odd university students, especially if you’re a freshman. I used React.js to create a website that allows students of UW to find other students with similar interests and find activities they can do together. I used Firebase for their authentication and database services. The website is still a work in progress but I am very excited for it to go through testing and eventually help students find a community!
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md="4" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                        <img width="149"className="" src={"./scheduler.png"}  alt={"Vishank"}/>
                        <CardTitle className = "text project-name"><em><a href="https://github.com/vishankrug/doctorPatientsApplication">Appointment Scheduler</a></em></CardTitle>
                            <CardText className="text">
                            When I visited my dentist over the summer of 2020, I realized that his office was entirely paper-based. With time to spare during the lockdown, I decided to try creating an application for his office. I interviewed the receptionist to understand the pain points to help identify a success criteria. I then developed the application on Netbeans using Java while utilizing object-oriented programming with complexities of inheritance and encapsulation of classes. This was my first personal project and I will always cherish how much it helped me understand my own capabilities.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md="4" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                            <img width="150"className="GDPvsHateCrime" src={"./graph.png"}  alt={"Vishank"}/>
                            <CardTitle className = "text project-name"><em> <a href="https://github.com/vishankrug/GDP_vs_HateCrime">GDP vs Hate Crimes</a></em></CardTitle>
                            <CardText className="text">
                            Something I hadn’t anticipated about attending university was the difficulties that being a person of color entailed. As a result, I was curious about the experiences of racial minorities in other states. I combined two datasets - GDP by State and Hate Crimes by State - and extracted the relevant data using R to identify any trends. I then created an interactive visualization through ggplot2 and conducted some light statistical analysis. I then collaborated with three other students to showcase our work by publishing a Shiny application. <br/>  <a href="https://jinjaimie.shinyapps.io/GDP-and-hate-crime/">View</a>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </div>
    )
}

export function Experience(){
    return(
        <div className="homepage">
        <h1 className="title experience">FEATURED EXPERIENCE</h1>
        <Row>
            <Col md="6" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                        <img width="200" className="ischool" src={"./ischoollogo.png"}  alt={"ischool"}/>
                        <CardTitle className = "text project-name"><em><a href="https://ischool.uw.edu/">Teaching Assistant</a></em></CardTitle>
                        <CardText className="text">
                            After serving as a FIG Leader, I accepted a position to be a teaching assistant for Technical Foundations. I taught 25 students the fundamentals of wrangling and using data to extract information with the use of graphs (plotly) in R. I also taught them how to publish their graphs and insights by making a Shiny application. After this position I accepted a position to be a teaching assistant for Client-Side Development. In this position, I am teaching 35 students HTML, CSS, JavaScript, React.js, and Firebase.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                        <img width="120"className="epro" src={"./epro.jpg"}  alt={"Epro Middle East"}/>
                        <CardTitle className = "text project-name"><em><a href="https://expertscomputer.com/">Epro Middle East</a></em></CardTitle>
                            <CardText className="text">
                                With my study abroad program being canceled due to Covid-19, I decided to accept an offer to be a sales executive intern for B2B trading of electronic goods and understood the ins and outs of local and international business. However, due to the pandemic, even though the demand was high, there was a shortage of supply. I suggested diversification into medical supplies. Implementing my suggestion increased the company’s revenue by $700,000 of which I was responsible for $75,000 by closing 4 deals.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                            <img width="125"className="dubstech" src={"./dubstech.png"}  alt={"DubsTech"}/>
                            <CardTitle className = "text project-name"><em><a href="https://dubstech.org/">DubsTech</a></em></CardTitle>
                            <CardText className="text">
                                I attended the Protothon (UX Hackathon) by Dubstech and saw potential in the event, however, parts of it were poorly executed. I joined the team as an assistant director, and was responsible for hosting and facilitating engagement events throughout the first online Protothon with over 300 participants and 81 submissions.  I am now one of the directors of the event and my team has secured over $11,000 from Adobe and agora.io for prizes. We also saw over 1000 sign ups and almost 200 project submissions. <br/><a href="https://ischool.uw.edu/news/2020/06/dubstech-student-group-engages-ischoolers-first-online-hackathon">View</a>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" className="mt-4">
                <Card className="border-0">
                    <CardBody>
                        <img width="120" className="FYP" src={"./FYP.png"}  alt={"FYP"}/>
                        <CardTitle className = "text project-name"><em><a href="https://fyp.washington.edu/">FIG Leader</a></em></CardTitle>
                        <CardText className="text">
                            As an international student, I frequently found my transition to university challenging. Although I overcame this with time and effort, I wanted to ensure that incoming students would not have to go through the same difficulties that I did. I developed a 10-week curriculum consisting of modules, lesson plans, and active learning techniques to allow students to transition to university smoothly. With the imposition of remote learning, I had to quickly modify my plan to accommodate, and in the fall of 2020, I led my first class as a teacher and mentor.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export function Hobbies(){
    //rounded-circle hobbies-image
    return(
        <div className="homepage">
        <h1 className="title hobbies">HOBBIES</h1>
        <Row>
            <Col md="4" className="mt-4">
                <Card className="border-0 padding">
                    <CardBody>
                        <img width="150" height="150" className="hobbies-image rounded-circle" src={"./horse.jpg"}  alt={"Horse Riding"}/>
                        <CardTitle className = "text project-name"><em>Horse Riding</em></CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col md="4" className="mt-4">
                <Card className="border-0 padding">
                    <CardBody>
                        <img width="150" height="150" className="hobbies-image rounded-circle" src={"./scuba.jpg"}  alt={"Scuba Diving"}/>
                        <CardTitle className = "text projects project-name"><em>Scuba Diving</em></CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col md="4" className="mt-4">
                <Card className="border-0 padding">
                    <CardBody>
                            <img width="150" height="150" className="hobbies-image rounded-circle" src={"./dune.jpg"}  alt={"Dune Bashing"}/>
                            <CardTitle className = "text projects project-name"><em>Dune Bashing</em></CardTitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </div>
    )
}