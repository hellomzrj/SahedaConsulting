import "./hero.scss"
import { motion } from "framer-motion";
import GhostConsultingImage from "./../../assets/img/GhostConsultingImage.png"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};


const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>WELCOME TO </motion.h2>
          <motion.h1 variants={textVariants}>
            Ghost Engineering Consulting Service
          </motion.h1>
          <motion.p variants={textVariants}>
            where innovation meets expertise in engineering, management, and IT
            solutions.
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See our Services
            </motion.button>
            <motion.button variants={textVariants}>Let's Connect</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Saheda Consulting the Best Solution for Your Business
      </motion.div>
      <div className="imageContainer">
        <img src={GhostConsultingImage} alt="" />
      </div>
    </div>
  )
}

export default Hero