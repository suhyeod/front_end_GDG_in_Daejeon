import './App.css';
import GDSC_LOGO from "./image/GDSC.png";

function App() {
    return (
        <div className="body">
            <header>
                <div class="title">
                    <a href='/'>
                        <img src={GDSC_LOGO}/>
                    </a>
                </div>
                <ul class="navbar" id="navbar">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>                
            </header>
            <main>
              <section className="section_1">
              <ul class="home" id="home">
                  <h1>

                  </h1>
                  </ul>
                </section>
                <section className="section_2">
                <ul class="about" id="about">
                    <h1>This is About Page of Coding Crusaders</h1>
                    <p></p>
                </ul>
                
                </section>
                <section className="section_3">
                <ul class="service" id="service">
                    <h1>This is Service Page of Coding Crusaders</h1>
                </ul>
               
                </section>
                <section className="section_4">
                <ul class="contact" id="contact">
                    <h1>This is contact Page of Coding Crusaders</h1>
                </ul>
                
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
