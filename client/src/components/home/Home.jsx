import "./home.scss";
import Hero from "./hero/Hero";
import Overview from "./overview/Overview";
import Services from "./service/Service";

const Home = () => {
  return (
    <div className="home">
      <section>
        <Hero />
      </section>
      <section>
        <Overview />
      </section>
      <section>
        <Services />
      </section>
    </div>
  );
};

export default Home;
