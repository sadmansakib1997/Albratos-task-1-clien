import React from "react";
import "./Portfolio.css";
import img1 from "../../images/learning-platform-sakib.web.app_courses.png";
import img2 from "../../images/last-assignment-25ab9.web.app_ (1).png";
import img3 from "../../images/fantastic-sprinkles-c2ef54.netlify.app_quiz_1.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="me">
        <h1 className="txt ">Portfolio</h1>
        <div className="container">
          <div className="row">
            <div className="heading padd-15">
              <h1>My Last Projects:</h1>
            </div>
            <div className="oow">
              <div className="portfolio-item">
                <div className="card bg-base-100 shadow-xl">
                  <figure className="px-3 pt-5">
                    <img
                      src={img3}
                      alt="Shoes"
                      className="rounded-xl h-96 w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Quiz Crackerz!</h2>
                    <p className="text-left">
                      ● I have created a web based responsive application to
                      learn and play quiz with programming language. <br />●
                      Build with the help of React Framework , HTML and Tailwind
                      CSS.
                    </p>
                    <div className="card-actions">
                      <a href="https://fantastic-sprinkles-c2ef54.netlify.app/">
                        {" "}
                        <button className="btn btn-secondary">Live Site</button>
                      </a>
                      <a href="https://github.com/sadmansakib1997/Quiz-assignment">
                        <button className="btn btn-secondary">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="card bg-base-100 shadow-xl">
                  <figure className="px-3 pt-5">
                    <img
                      src={img1}
                      alt="Shoes"
                      className="rounded-xl  h-96 w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Education Learning!</h2>
                    <p className="text-left">
                      ● I have created a full stack web based responsive
                      application to learn some languages.
                      <br />● Build with the help of React Framework , HTML and
                      Tailwind CSS.
                    </p>
                    <div className="card-actions">
                      <a href="https://learning-platform-sakib.web.app/">
                        {" "}
                        <button className="btn btn-secondary">Live Site</button>
                      </a>
                      <a href="https://github.com/sadmansakib1997/Education-assignment">
                        {" "}
                        <button className="btn btn-secondary">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="card h-full bg-base-100 shadow-xl">
                  <figure className="px-3 pt-5">
                    <img
                      src={img2}
                      alt="Shoes"
                      className="rounded-xl h-96 w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Synthetic car!</h2>
                    <p className="text-left">
                      {" "}
                      ● I have developed a full stack web based responsive
                      application.
                      <br />● Build with the help of React Framework , HTML and
                      Tailwind CSS.
                    </p>

                    <div className="card-actions">
                      <a href="https://last-assignment-25ab9.web.app/">
                        {" "}
                        <button className="btn btn-secondary">Live Site</button>
                      </a>
                      <a href="https://github.com/sadmansakib1997/car-resale">
                        {" "}
                        <button className="btn btn-secondary">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
