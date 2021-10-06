import { Card, CardText, CardBody, CardTitle, Col, Row } from "reactstrap";

export function About() {
  /*
    <div>
        <img className="rounded-circle people_image" src={"./vishank.jpeg"}  alt={"Vishank"}/>
    </div>
    */
  return (
    <div className="homepage firstitem">
      <h1 className="title about">ABOUT</h1>
      <div className="mt-4">
        <p className="text about">
          Hello! My name is Vishank Rughwani and I am a student at the University of Washington majoring in Informatics with dual concentrations in Software Development and Data Science. I have also recently picked up a minor in entrepreneurship. 
          <br />
          <br />
          My long-term goal is to become an entrepreneur in tech and in order to work towards that goal, it is important for me to understand the different teams within the technology sector. My first year in university, I focused mainly on user experience and user interface. Then, I continued on to exploring the area of data science and software engineering. Now, I am exploring the business aspect of tech. I solidified my understanding of software engineering and data science over the summer in which I worked for Blackstraw as a data science intern and Satchl as a front-end development intern. However, in both these internships, I saw myself taking up the role of the team lead where I understood the goals of my manager and relayed them to the team broken up in smaller bits with my own deadlines. Here, I realized that product management is the right role for me and remembered how much I loved working in a similar role for DubsTech, for whom I hosted an online UI/UX hackathon and acted as the director of the “Protothon”
          <br />
          <br />
          Take a look at my{" "}
          <a href="./Vishank_Rughwani_Resume.pdf">resume</a>!
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="homepage">
      <h1 className="title projects"> FEATURED PROJECTS</h1>
      <Row>
        <Col md="4" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="150"
                className=""
                src={"./huskler.png"}
                alt={"Vishank"}
              />
              <CardTitle className="text project-name">
                <em>
                  <a href="https://github.com/vishankrug/huskler">huskler</a>
                </em>
              </CardTitle>
              <CardText className="text">
                Something that both my students and I experienced was feeling
                lost in a crowd of 45,000-odd university students, especially if
                you’re a freshman. I used React.js to create a website that
                allows students of UW to find other students with similar
                interests and find activities they can do together. I used
                Firebase for their authentication and database services. The
                website is still a work in progress but I am very excited for it
                to go through testing and eventually help students find a
                community!
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="149"
                className=""
                src={"./scheduler.png"}
                alt={"Vishank"}
              />
              <CardTitle className="text project-name">
                <em>
                  <a href="https://github.com/vishankrug/doctorPatientsApplication">
                    Appointment Scheduler
                  </a>
                </em>
              </CardTitle>
              <CardText className="text">
                When I visited my dentist over the summer of 2020, I realized
                that his office was entirely paper-based. With time to spare
                during the lockdown, I decided to try creating an application
                for his office. I interviewed the receptionist to understand the
                pain points to help identify a success criteria. I then
                developed the application on Netbeans using Java while utilizing
                object-oriented programming with complexities of inheritance and
                encapsulation of classes. This was my first personal project and
                I will always cherish how much it helped me understand my own
                capabilities.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="150"
                className="GDPvsHateCrime"
                src={"./graph.png"}
                alt={"Vishank"}
              />
              <CardTitle className="text project-name">
                <em>
                  {" "}
                  <a href="https://github.com/vishankrug/GDP_vs_HateCrime">
                    GDP vs Hate Crimes
                  </a>
                </em>
              </CardTitle>
              <CardText className="text">
                Something I hadn’t anticipated about attending university was
                the difficulties that being a person of color entailed. As a
                result, I was curious about the experiences of racial minorities
                in other states. I combined two datasets - GDP by State and Hate
                Crimes by State - and extracted the relevant data using R to
                identify any trends. I then created an interactive visualization
                through ggplot2 and conducted some light statistical analysis. I
                then collaborated with three other students to showcase our work
                by publishing a Shiny application. <br />{" "}
                <a href="https://jinjaimie.shinyapps.io/GDP-and-hate-crime/">
                  View
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export function Experience() {
  return (
    <div className="homepage">
      <h1 className="title experience">FEATURED EXPERIENCE</h1>
      <Row>
        <Col md="6" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="200"
                className="blackstraw"
                src={"./blackstraw.png"}
                alt={"ischool"}
              />
              <CardTitle className="text project-name">
                <em>
                  <a href="https://blackstraw.ai/">Blackstraw</a>
                </em>
              </CardTitle>
              <CardText className="text">
                As my summer internship during 2021, I joined Blackstraw's data
                science team as a data science intern with a specialization in
                machine learning. The team had just started exploring the space
                of reinforcement learning, so my first project was to research
                and present multi-agent interactions and soft actor critic
                relations in a research project called CityLearn. CityLearn is
                an openAI gym environment developed for electricity demand
                shaping. I was then on a sub-team that worked on building a GAN
                model to produce data to train the model for a project. I worked
                closely with my team to understand how the GAN functions and how
                to make the best possible data.
                {/* After serving as a FIG Leader, I accepted a position to be a
                teaching assistant for Technical Foundations. I taught 25
                students the fundamentals of wrangling and using data to extract
                information with the use of graphs (plotly) in R. I also taught
                them how to publish their graphs and insights by making a Shiny
                application. After this position I accepted a position to be a
                teaching assistant for Client-Side Development. In this
                position, I am teaching 35 students HTML, CSS, JavaScript,
                React.js, and Firebase. */}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="120"
                className="satchl"
                src={"./satchl.png"}
                alt={"Epro Middle East"}
              />
              <CardTitle className="text project-name">
                <em>
                  <a href="https://satchl.com/#/login">Satchl</a>
                </em>
              </CardTitle>
              <CardText className="text">
                While working at Blackstraw, I took up a part time internship
                with a startup called Satchl. Here I worked as a front-end
                development intern and mainly worked on designing and coding
                their log-in and sign-up screens. My job was to make the process
                seem seamless and fun to the user so they feel more inclined to
                trust and use the app. I worked with HTML, CSS, and Javascript.
                I also learned how to use XAMPP and Cordova.
                {/* With my study abroad program being canceled due to Covid-19, I
                decided to accept an offer to be a sales executive intern for
                B2B trading of electronic goods and understood the ins and outs
                of local and international business. However, due to the
                pandemic, even though the demand was high, there was a shortage
                of supply. I suggested diversification into medical supplies.
                Implementing my suggestion increased the company’s revenue by
                $700,000 of which I was responsible for $75,000 by closing 4
                deals. */}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="125"
                className="dubstech"
                src={"./dubstech.png"}
                alt={"DubsTech"}
              />
              <CardTitle className="text project-name">
                <em>
                  <a href="https://dubstech.org/">DubsTech</a>
                </em>
              </CardTitle>
              <CardText className="text">
                I attended the Protothon (UX Hackathon) by Dubstech and saw
                potential in the event, however, parts of it were poorly
                executed. I joined the team as an assistant director, and was
                responsible for hosting and facilitating engagement events
                throughout the first online Protothon with over 400 participants
                and 81 submissions. I then became one of the directors of the
                event and my team secured about $11,850 from Adobe and agora.io
                for prizes. We also saw over 1000 sign ups and almost 200
                project submissions. <br />
                <a href="https://ischool.uw.edu/news/2020/06/dubstech-student-group-engages-ischoolers-first-online-hackathon">
                  View
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="mt-4">
          <Card className="border-0">
            <CardBody>
              <img
                width="200"
                className="ischool"
                src={"./ischoollogo.png"}
                alt={"ischool"}
              />
              <CardTitle className="text project-name">
                <em>
                  <a href="https://ischool.uw.edu/">UW Information School</a>
                </em>
              </CardTitle>
              <CardText className="text">
                After serving as a FIG Leader, I accepted a position to be a
                teaching assistant for Technical Foundations. I taught 25
                students the fundamentals of wrangling and using data to extract
                information with the use of graphs (plotly) in R. I also taught
                them how to publish their graphs and insights by making a Shiny
                application. After this position I accepted a position to be a
                teaching assistant for Client-Side Development. In this
                position, I am teaching 35 students HTML, CSS, JavaScript,
                React.js, and Firebase.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export function Hobbies() {
  //rounded-circle hobbies-image
  return (
    <div className="homepage">
      <h1 className="title hobbies">HOBBIES</h1>
      <Row>
        <Col md="4" className="mt-4">
          <Card className="border-0 padding">
            <CardBody>
              <img
                width="150"
                height="150"
                className="hobbies-image rounded-circle"
                src={"./horse.jpg"}
                alt={"Horse Riding"}
              />
              <CardTitle className="text project-name">
                <em>Horse Riding</em>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mt-4">
          <Card className="border-0 padding">
            <CardBody>
              <img
                width="150"
                height="150"
                className="hobbies-image rounded-circle"
                src={"./scuba.jpg"}
                alt={"Scuba Diving"}
              />
              <CardTitle className="text projects project-name">
                <em>Scuba Diving</em>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mt-4">
          <Card className="border-0 padding">
            <CardBody>
              <img
                width="150"
                height="150"
                className="hobbies-image rounded-circle"
                src={"./dune.jpg"}
                alt={"Dune Bashing"}
              />
              <CardTitle className="text projects project-name">
                <em>Dune Bashing</em>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
