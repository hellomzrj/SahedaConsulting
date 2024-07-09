import "./postAJob.scss";

const PostAJob = () => {
  return (
    <div className="post-a-job">
      <div className="wrapper">
        <div className="job-title-section">
          <div className="title-left">
            <h2>Write a title for your job post</h2>
            <p>
              This helps your job post stand out the right candidate. It's the
              first thing they will see, so make it count!
            </p>
          </div>
          <div className="title-middle"></div>
          <div className="title-right">
            <h3>Write a title for your job post</h3>
            <div className="input-box">
              <input type="text" required />
            </div>
            <div className="example-titles">
              <h4>Example titles</h4>
              <ul className="title">
                <li>
                  Build a responsive WordPress site with booking/payment
                  functionality
                </li>
                <li>
                  Graphic designer need to design as creative for multiple
                  campaigns
                </li>
                <li>Facebook ad specialist needed for product launch</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skilled-required-section">
          <div className="skilled-required-left">
            <h2>What are the main skills required for tour work?</h2>
          </div>
          <div className="skilled-required-right">
            <h3>Search skills or add your own</h3>
            <div className="input-box">
              <input type="text" />
            </div>
            <div className="hint-skills">
              For the best result add 3-5 skills
            </div>
            <div className="popular-skill-add">
              <h4>Add popular skills that required to complete the job.</h4>
              <div className="skills">
                <span>Infrastructure&nbsp;+</span>{" "}
                <span>Sustainability&nbsp;+</span>
                <span>Environmental&nbsp;Engineering&nbsp;+</span>
                <span>Transportation&nbsp;Engineering&nbsp;+</span>
                <span>Transportation&nbsp;Engineering&nbsp;+</span>
                <span>Structural&nbsp;Engineering&nbsp;+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="duration-section">
          <div className="duration-left">
            <h2>Next, estimate the scope of your work.</h2>
            <p>consider the overall duration to complete the project.</p>
          </div>
          <div className="duration-right">
            <h3>Add duration to complete the project (in Days)</h3>
            <div className="input-box">
              <input type="text" required />
            </div>
            <div className="hint-skills">
              <span>Examples: 3, 7, 30 etc.</span>
            </div>
          </div>
        </div>
        <div className="budget-section">
          <div className="budget-section-left">
            <h2>Tell us about approximate budget. </h2>
            <p>This will help service provider to match with the range.</p>
          </div>
          <div className="budget-section-right">
            <h3>Select your project budget.</h3>
            <div className="input-box">
              <input type="text" />
            </div>
            <div className="hint-example">
              <span>Examples: $567, $50, $1000</span>
            </div>
            <div className="budget-not-select">
              <label>
                <input type="checkbox" />
                Not ready to set the budget.
              </label>
            </div>
          </div>
        </div>
        <div className="job-description-section">
          <div className="job-description-left">
            <h2>Last step, start the conversation</h2>
            <p>Talent are looking for:</p>
            <ul className="example-need-to-write">
              <li>Clear expectations about your task or deliverables</li>
              <li>The skills required for your work</li>
              <li>Good communications</li>
              <li>Details about how you or your team like to work</li>
            </ul>
          </div>
          <div className="job-description-right">
            <h3>Describe your job</h3>
            <div className="input-box">
              <textarea
                name="job-description"
                placeholder="Already have a description? Paste it here!"
                id=""
                rows={8}
              ></textarea>
              <span>5000 characters left</span>
            </div>
            <div className="attach-file">
              Attach file
              <span>Max file size: 50 MB</span>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
