import { motion } from 'framer-motion';

export default ({ children }: { children: React.ReactNode }) => {
    const pageVariants = {
        initial: { x: "25%", opacity: 0 },
        animate: { x: "0%", opacity: 1 },
        exit: { x: "100%", opacity: 0 }
    };

    return (
        <motion.div
            className='modal-transition'
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};