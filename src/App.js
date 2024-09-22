import './App.css';
import GDSC_LOGO from "./image/GDG.png";
import React, {useEffect} from "react";
import AnimatedComponent_1 from './ain.js';
import AnimatedComponent_2 from './ain_1.js';
import AnimatedComponent_3 from './ain_2.js';



const TypingComponent = () => {
    const [word, setWord] = React.useState(''); // 출력할 문자열 상태
    const sentence = 'Front-End Unit'; // 문장
    const currentIndex = React.useRef(0); // 현재 인덱스

    React.useEffect(() => {
        const timerId = setInterval(() => {
            // currentIndex가 sentence 길이보다 작을 경우에만 상태 업데이트
            if (currentIndex.current < sentence.length) {
                setWord((prevWord) => prevWord + sentence.charAt(currentIndex.current)); 
                currentIndex.current += 1;
            } else {
                clearInterval(timerId); // 타이머 종료
            }
        }, 100);

        return() => clearInterval(timerId); // 컴포넌트가 언마운트되면 타이머 정리
    }, [sentence]);

    return (<div>
        {word}
    </div>);
};

function App() {
    return (
        <div className="body">
            <header>
                <div class="title">
                    <img src={GDSC_LOGO}/>
                </div>
                <ul class="navbar" id="navbar">
                    <li>
                        <a href="#home">Front-End</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Unit</a>
                    </li>
                    <li>
                        <a href="#contact">Finally</a>
                    </li>
                </ul>
            </header>
            <main>
                <section className="section_1">
                    <ul class="home" id="home">
                        <li>
                            <h1>
                                <TypingComponent/>
                            </h1>
                        </li>
                    </ul>
                </section>
                <section className="section_2">
                    <ul class="about" id="about">
                        <AnimatedComponent_1/>
                    </ul>
                </section>
                <section className="section_3">
                    <ul class="service" id="service">
                        <AnimatedComponent_2 />
                    </ul>

                </section>
                <section className="section_4">
                    <ul class="contact" id="contact">
                        <AnimatedComponent_3 />
                    </ul>

                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
