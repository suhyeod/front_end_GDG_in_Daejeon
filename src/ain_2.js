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
                <h1>Finally</h1>
            </li>
            <li>
                <p>디자인에 관심이 있는 사람</p>
            </li>
            <li>
                <p></p>
            </li>

        </motion.div>
    );
}

export default AnimatedComponent;