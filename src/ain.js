import React from 'react';
import { motion } from 'framer-motion';
 
function AnimatedComponent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
            }}
        >
            <ul class="about" id="about">
                        <li>
                            <h1>This is About Page of Coding Crusaders</h1>
                        </li>
                        <li>
                            <p>
                            </p>
                        </li>
                    </ul>

        </motion.div>
    );
}
 
export default AnimatedComponent;