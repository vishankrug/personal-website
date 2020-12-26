import './App.css';
import { About, Projects, Experience, Hobbies } from './Homepage.js';
import { NavBar, Footer } from './Navbar.js'
import './App.css';

function App() {
  return (
    <div>
      <nav className = "innerchild topbar">
        <NavBar/>
      </nav>
      <main>
        <div className = "container">
          <About/>
          <Projects/>
          <Experience/>
          <Hobbies/>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>

  );
}

export default App;
