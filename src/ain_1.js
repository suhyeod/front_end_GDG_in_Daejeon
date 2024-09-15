import React from 'react';
import {motion} from 'framer-motion';

function AnimatedComponent() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: false
            }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: {
                    duration: 1
                }
            }}>

            <li>
                <h1>Front-End Unit</h1>
            </li>
            <li>
                <p>HTML / CSS / javascript / React</p>
            </li>
            <li>
                <p>개인프로젝트</p>
            </li>

        </motion.div>
    );
}

export default AnimatedComponent;