import { useState, useEffect } from 'react';
import styles from './home.module.css';
//import styles2 from './animation.module.css';

import { HomeWrapper, Box,SloganSection } from './home.styled';
import { Slogan } from '../layout/header_section/index.styled';
import MovingCar from '~/components/moving_car';
import Office from '~/components/lottie/office'
const Home = () => {
    const slogan = [
        { "txt1": "Designing ideas that", "txt2": "inspire and engage." },
        { "txt1": "Creative thinker turning concepts into", "txt2": "compelling experiences." },
        { "txt1": "Blending creativity with strategy", "txt2": "to deliver impact." },
    ]
    const [words, setWords] = useState({ txt1: "", txt2: "" });
    const [rnd,setRnd] = useState(Math.random() * 3)
    useEffect(() => {
        const inx = Math.floor(Math.random() * 3);
        setWords(slogan[inx])
    }, [])
    return (
        <HomeWrapper>
        <Box>
        </Box>
        <Box>
        <Office/>
           <SloganSection>
                <div className={styles.animation}>
                    <span className={styles.first}>{words.txt1}</span>
                    <span>&nbsp;</span>
                    <span className={styles.oh}>
                        <span className={styles.second}>{words.txt2}</span>

                    </span>

                </div>
                <div>It's free No hassel No Sign up</div>
            </SloganSection>
            </Box>
        </HomeWrapper>
)
}

export default Home;