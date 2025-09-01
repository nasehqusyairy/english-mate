import { motion } from 'framer-motion';
import { useState } from 'react';

export default ({ children }: { children: React.ReactNode }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const pageVariants = {
        initial: { x: "25%", opacity: 0 },
        animate: { x: "0%", opacity: 1 },
        exit: { x: "100%", opacity: 0 }
    };

    return (
        <motion.div
            className={'modal-transition' + (isAnimating ? ' animating' : '')}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25 }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            {children}
        </motion.div>
    );
};