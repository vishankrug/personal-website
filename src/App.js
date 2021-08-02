import "./App.css";
import { About, Projects, Experience, Hobbies } from "./Homepage.js";
import { NavBar, Footer } from "./Navbar.js";
import "./App.css";
import { LandingPage } from "./LandingPage";

function App() {
  return (
    <div>
      <nav className="topbar">
        <NavBar />
      </nav>
      <LandingPage />
      <main>
        <div className="container">
          <About />
          <Experience />
          <Projects />
          <Hobbies />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
