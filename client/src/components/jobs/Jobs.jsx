import "./jobs.scss";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();
  return (
    <div className="jobs">
      <div className="wrapper">
        <div className="job-heading">
          <h2>Check out the jobs posted on Saheda Consulting</h2>
          <button onClick={() => navigate("/post-a-job")}>Post new job</button>
          {/* <span>Engineering</span> */}
          {/* <hr /> */}
        </div>
        <div className="list-of-jobs">
          <div className="jobs-box">
            <h2 className="job-title">Landscape Constructor Plan Designer</h2>
            <p className="job-post-time">Posted 5 days ago</p>
            <div className="job-description">
              We are seeking a designer to assist us in creating landscape
              construction plans. The ideal candidate will have a strong
              background...
            </div>
            <div className="required-skills">
              <span>CAD</span>
              <span>Planting Design</span>
              <span>Landscape Design</span>
            </div>
            <div className="job-see-more-btn">
              <button>See More</button>
            </div>
          </div>
          <div className="jobs-box">
            <h2 className="job-title">Landscape Constructor Plan Designer</h2>
            <p className="job-post-time">Posted 5 days ago</p>
            <div className="job-description">
              We are seeking a designer to assist us in creating landscape
              construction plans. The ideal candidate will have a strong
              background...
            </div>
            <div className="required-skills">
              <span>CAD</span>
              <span>Planting Design</span>
              <span>Landscape Design</span>
            </div>
            <div className="job-see-more-btn">
              <button>See More</button>
            </div>
          </div>
          <div className="jobs-box">
            <h2 className="job-title">Landscape Constructor Plan Designer</h2>
            <div className="job-post-time">Posted 5 days ago</div>
            <div className="job-description">
              We are seeking a designer to assist us in creating landscape
              construction plans. The ideal candidate will have a strong
              background...
            </div>
            <div className="required-skills">
              <span>CAD</span>
              <span>Planting Design</span>
              <span>Landscape Design</span>
            </div>
            <div className="job-see-more-btn">
              <button>See More</button>
            </div>
          </div>
          <div className="jobs-box">
            <h2 className="job-title">Landscape Constructor Plan Designer</h2>
            <div className="job-post-time">Posted 5 days ago</div>
            <div className="job-description">
              We are seeking a designer to assist us in creating landscape
              construction plans. The ideal candidate will have a strong
              background...
            </div>
            <div className="required-skills">
              <span>CAD</span>
              <span>Planting Design</span>
              <span>Landscape Design</span>
            </div>
            <div className="job-see-more-btn">
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
