export function About(){
    /*
    <div>
        <img className="rounded-circle people_image" src={"./vishank.jpeg"}  alt={"Vishank"}/>
    </div>
    */
    return(
        <div className="homepage firstitem">
            <h1 className="title">ABOUT</h1>
            <div>

                <p className = "text about">I am currently a junior majoring in Computer Science/Informatics with a concentration in Software Engineering and minoring in Entrepreneurship at the University of Washington, Seattle.
                <br/><br/>
                Although I am Indian and study in Seattle, I was born and raised in Dubai. One of my biggest takeaways from living in such a fast-paced city is the importance of constantly learning. 
                <br/><br/>
                Both the places I have lived have vastly influenced my work; in Dubai, I was the co-founder of a student accelerator called Business Minds that gave students an entrepreneurial platform to execute their ideas. The initiative received media attention and a large sponsorship from the Apparel Group that was directed towards the prize.
                <br/><br/>
                At university, I am involved in Alpha Kappa Psi, a business fraternity, as well as UW’s largest tech club - DubsTech - as an assistant director. I also accepted an offer to be a Teaching Assistant for Technical Foundations, a 200-level course, for Winter 2021. 
                <br/><br/>
                In my free time, I enjoy undertaking projects of my own. For example, during an internship in the summer of 2020, I worked on creating a scheduling application for clinics and also dabbled in making basic games like snake and bricks.
                </p>
            </div>
        </div>
    )
}

export function Projects(){
    return(
        <div className="homepage">
            <h1 className="title"> FEATURED PROJECTS</h1>
            <div className="projectContainer">
                <div>
                    <img width="150" className="project-image" src={"./huskler.png"}  alt={"Vishank"}/>
                    <p className = "text projects project-name"><em>huskler</em></p>
                    <p className = "text projects">Going to a university with 45000+ students can be hard at times -- especially for freshmen or transfer students. I experienced this first hand when I was a freshman and then saw my students experience the exact same thing. With my new skills in CSS and Javascript, I used React.js to create a website that allows students of UW to find other students with similar interests and to find activities to do together. I soon realized that I would not be able to publish this website without users being able to modify data on the website so I also used Firebase for their authentication and database services. The website is still a work in progress but I am very excited for it to go through testing and eventually help students find a community!</p>
                </div>
                <div>
                    <img width="149"className="project-image" src={"./scheduler.png"}  alt={"Vishank"}/>
                    <p className = "text projects project-name"><em>Appointment Scheduler</em></p>
                    <p className = "text projects">I always had such a hard time scheduling an appointment with my dentist over the summer -- I would always go back and forth with the receptionist for days. When I finally went there I saw that they were doing everything on paper. Having a bunch of free time due to Covid-19, I figured I would try to create an application for them. I interviewed the receptionist and understood the pain points and created a success criterion from that. I then developed the application on Netbeans using Java while utilizing object-oriented programming with complexities of inheritance and encapsulation of classes. I completed 100% of the requirements but I found myself wanting to add more and experiment. This was my first personal project and will always cherish how much it has taught me.</p>
                </div>
                <div>
                    <img width="150"className="project-image GDPvsHateCrime" src={"./graph.png"}  alt={"Vishank"}/>
                    <p className = "text projects project-name"><em>GDP vs Hate Crimes</em></p>
                    <p className = "text projects">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export function Experience(){
    return(
        <div className="homepage">
            <h1 className="title">FEATURED EXPERIENCE</h1>
            <div className="experienceContainer">
                <div>
                    <img width="150" className="experience-image FYP" src={"./FYP.png"}  alt={"Vishank"}/>
                    <p className = "text projects project-name"><em>FIG Leader</em></p>
                    <p className = "text experience">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img width="120" className="project-image epro" src={"./epro.jpg"}  alt={"Vishank"}/>
                    <p className = "text projects project-name"><em>Epro Middle East</em></p>
                    <p className = "text projects">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img width="125"className="project-image GDPvsHateCrime" src={"./dubstech.png"}  alt={"Vishank"}/>
                    <p className = "text projects project-name"><em>DubsTech</em></p>
                    <p className = "text projects">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export function Hobbies(){
    return(
        <div className="homepage">
            <h1 className="title">HOBBIES</h1>
            <div className="hobbiesContainer">
                <div className="horseRiding">
                    <img width="150" height="150" className="rounded-circle hobbies-image" src={"./horse.jpg"}  alt={"Vishank"}/>
                    <p className = "text hobbies">Horse Riding</p>
                </div>
                <div>
                    <img width="150" height="150" className="rounded-circle hobbies-image" src={"./scuba.jpg"}  alt={"Vishank"}/>
                    <p className = "text hobbies">Scuba Diving</p>
                </div>
                <div>
                    <img width="150" height="150" className="hobbies-image rounded-circle" src={"./dune.jpg"}  alt={"Vishank"}/>
                    <p className = "text hobbies">Dune Bashing</p>
                </div>
            </div>
        </div>
    )
}