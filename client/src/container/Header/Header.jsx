import './Header.scss'
import {motion} from "framer-motion"
import {images} from '../../constants'
import  {AppWrapper} from '../../wrapper'
const Header = ()=>{
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
        },
        transition: {duration: 1, ease: 'easeInOut'},
    }
    return (
        <div  className='app__header app__flex'>
          <motion.div
          whileInView={{x:[-100, 0], opacity: [0, 1]}}
          transition={{duration: 0.6}}
          className='app__header-info'
          >
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <span>
                    👋
                    </span>
                    <div style={{marginLeft: '10px'}}>
                        <p className='p-text'>Hello I am </p>
                        <h1 className='head-text'>Haileab</h1>
                    </div>
                </div>
                <div className='tag-cmp app__flex'>
                    <p className='p-text' style={{marginRight: '10px'}}>Web Developer</p>
                    <p className='p-text'>Freelancer</p>
                </div>
            </div>
            </motion.div>  
            <motion.div
             whileInView={{opacity: [0, 1]}}
             transition={{duration: 0.6 , delayChildren: 10}}
             className='app__header-img'
            >
                <img src={images.PhotoOne} alt="Haileab"></img>
                <motion.img
                whileInView={{scale: [0, 1]}}
                transition={{duration: 1, ease: 'easeInOut'}}
                src={images.circle}
                className='overlay_circle'
                alt="profile_circle"
                />
            </motion.div>
            <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            transition={scaleVariants.transition}
            className='app__header-circles'
            >
                {
                    [images.flutter, images.redux, images.sass].map((circle, index)=> (
                        <div>
                            <img src={circle} alt='circle'/>
                        </div>
                    ))
                }

            </motion.div>
        </div>
    )
}
export default  AppWrapper(Header, 'home')