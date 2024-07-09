// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header"
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import ConnectAsBuyer from "./components/connectAsBuyer/ConnectAsBuyer"
import ConnectAsSeller from "./components/connectAsSeller/ConnectAsSeller"
import Connect from "./components/connect/Connect"
import Login from "./components/login/Login";
import PostAJob from "./components/postAJob/PostAJob";
import Jobs from "./components/jobs/Jobs";
import News from "./components/news/News"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/connect-as-buyer" element={<ConnectAsBuyer />} />
          <Route path="/connect-as-seller" element={<ConnectAsSeller />} />
          <Route path="/post-a-job" element={<PostAJob />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
