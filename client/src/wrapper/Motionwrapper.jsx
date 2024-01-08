import {motion} from 'framer-motion'
const Motionwrapper = (Component, className)=> function HOC() {
    return (
        <motion.div
        whileInView={{y: [100 ,50,  0], opacity: [0, 0, 1]}}
        transition={{duration: 0.6,  ease: 'easeInOut'}}
        className={`${className}`}
        >
            <Component/>
        </motion.div>
    )
}
export default Motionwrapper;