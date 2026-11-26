import { useState, useEffect } from 'react';
import styles from './home.module.css';
//import styles2 from './animation.module.css';

import { Container, HomeWrapper, HomeWrapper1, Box, SloganSection } from './home.styled';
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
    const [rnd, setRnd] = useState(Math.random() * 3)
    useEffect(() => {
        const inx = Math.floor(Math.random() * 3);
        setWords(slogan[inx])
    }, [])
    return (
        <Container>
            <HomeWrapper>
                <Office />
            </HomeWrapper>
            <HomeWrapper1>
                <SloganSection>
                    <div className={styles.animation}>
                        <span className={styles.first}>{words.txt1}</span>
                        <span>&nbsp;</span>
                        <span className={styles.oh}>
                            <span className={styles.second}>{words.txt2}</span>

                        </span>

                    </div>
                    <div className={styles.text_wrapper}>
                        <div className={styles.box}>

                            <div className={styles.title}>
                                <span className={styles.block}></span>
                                <h1>No hassel  No email sign up<span></span></h1>
                            </div>

                            <div className={styles.role}>
                                <div className={styles.block}></div>
                                <p>It is free</p>
                            </div>

                        </div>
                    </div>
                </SloganSection>
            </HomeWrapper1>

        </Container>

    )
}

export default Home;