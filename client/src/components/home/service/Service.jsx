import { useRef } from "react";
import "./service.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import service3 from "../../assets/img/service3.jpg";
import service2 from "../../assets/img/service2.jpg";
import service1 from "../../assets/img/service1.jpg";

const items = [
  {
    id: 1,
    title: "Engineering Consulting",
    img: service1,
    desc: "In the realm of engineering, Saheda Consulting boasts a team of seasoned professionals dedicated to turning your visions into reality. From conceptualization to execution, we ensure precision and creativity in every project, be it construction, infrastructure upgrades, or sustainable solutions.",
  },
  {
    id: 2,
    title: "Management Consulting",
    img: service2,
    desc: "Our management consulting services are designed to elevate your strategic decision-making. Collaborating closely with your leadership team, we identify growth opportunities, enhance operational efficiency, and implement strategic initiatives that drive organizational success.",
  },
  {
    id: 3,
    title: "IT Consulting",
    img: service3,
    desc: "In the dynamic world of information technology, Saheda Consulting offers cutting-edge solutions. Our IT experts deliver innovative and scalable services, from system integration to cybersecurity, ensuring your technology infrastructure is a catalyst for growth.",
  },
];


const Single = ({ item }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     // offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" >
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Learn More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Service = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 35,
  });
  return (
    <div className="service" ref={ref}>
      <div className="progress">
        <h1>Our Services</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Service;