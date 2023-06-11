import deuLogo from "../assets/logos/deu_logo.png";
import amatisLogo from "../assets/logos/amatis.svg";
import piLogo from "../assets/logos/pi.jpeg";
import rempeopleLogo from "../assets/logos/rempeople.png";


function Cv() {
  return (
    <div className="row" id="cv">
      <div className="col-md-8">
        <div className="mt-5">
          <h3 className="font-color white fw-700">About</h3>
          <p>
            With over 5 years of experience in front-end development, I am an
            expert developer specializing in Javascript. I have used a variety
            of libraries to build websites which is perfectly fit for customers'
            need. These needs make me proficient in building large-scale web
            apps in aspects of performance, flexibility, scalability, security,
            and distribution.
          </p>
          <p>
            Although I usually work with VueJS, I have also used other
            frameworks such as Angular, and React. I have been eagerly exploring
            its deep knowledge of frameworks. My javaScript knowledge leads me
            to adapt quickly to any libraries and technologies in front-end
            development, making me a good fit for any team.
          </p>
          <p>
            As a front-end developer, I understand the importance of creating
            intuitive and engaging interfaces that prioritize the user
            experience. Working many years hand in hand with designers and my
            teammates brings me a different point of view on how to build
            need-oriented great designs.
          </p>
          <p>
            I believe in the importance of test and test-driven development. It
            is crucial to evaluate and verify that software does what it is
            supposed to do.
          </p>
          <p>
            Apart from coding, I enjoy camping and playing tennis. I planned to
            create a website about my camping routes for sharing all of my
            experiences and funny moments.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="mb-5 font-color white fw-700">Experience</h3>
          <ul className="f-list position-relative border-start ms-3 light">
            <li className="ms-5 mb-5">
              <img width={36} height={36} alt="rem people logo" className="position-absolute img-fluid start--3" src={rempeopleLogo} />
              <div>
                <div>
                  <h2 className="small mb-1 font-color white fw-700">Frontend Developer</h2>
                  <h3 className="d-flex align-items-center mb-1">
                    <a
                      href="https://rempeople.com/"
                      className="text-decoration-none me-2 position-relative"
                      target="_blank"
                      rel='noreferrer'
                    >
                      <p className="me-2 mb-0 d-inline font-color white fw-600">Rem People</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.6em"
                        height="0.6em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                        ></path>
                      </svg>
                    </a>{" "}
                    <span className="small">( May 2021 - present )</span>
                  </h3>
                </div>
                <span className="d-block font-color gray">
                  Contributed to creating web applications that are built on Vue2 iframe and different technologies and libraries related to project needs. 
                  Contributed to migrating Monolithic Architecture to Micro Frontend Architecture. The main goal is that increase flexibility, scalability, 
                  and maintainability of the project and gets rid of the massive codebase. Contributed to migrating Vue2 to Vue3 to keep up with new 
                  technologies such as Vite and related libraries for greater performance. Contributed to implementing tests from scratch. Also, TDD is 
                  experienced by new projects.
                </span>
                <span className="small">
                  <b>Stack:</b>
                  <small>JavaScript - Vue2 - Vue3</small>
                </span>
              </div>
            </li>
            <li className="ms-5 mb-5">
              <img width={36} height={36} alt="rem people logo" className="position-absolute img-fluid start--3" src={amatisLogo} />
              <div>
                <div>
                  <h2 className="small mb-1 font-color white fw-700">Full Stack Developer</h2>
                  <h3 className="d-flex align-items-center mb-1">
                    <a
                      href="https://rempeople.com/"
                      className="text-decoration-none me-2 position-relative"
                      target="_blank"
                      rel='noreferrer'
                    >
                      <p className="me-2 mb-0 d-inline font-color white fw-600">Amatis</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.6em"
                        height="0.6em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                        ></path>
                      </svg>
                    </a>{" "}
                    <span className="small">( October 2020 - May 2021 )</span>
                  </h3>
                </div>
                <span className="d-block font-color gray">
                  Contributed to creating two different websites, one of them is a platform that gives a chance to manage all infrastructure services subscriptions 
                  by only one page. The other one is about medical professionals tracking data of patients. These applications are built with angular and react. 
                  Got experienced in agile methodologies.
                </span>
                <span className="small">
                  <b>Stack:</b>
                  <small>JavaScript - Vue2 - Angular - React</small>
                </span>
              </div>
            </li>
            <li className="ms-5 mb-5">
              <img width={36} height={36} alt="rem people logo" className="position-absolute img-fluid start--3" src={piLogo} />
              <div>
                <div>
                  <h2 className="small mb-1 font-color white fw-700">Full Stack Developer</h2>
                  <h3 className="d-flex align-items-center mb-1">
                    <a
                      href="https://rempeople.com/"
                      className="text-decoration-none me-2 position-relative"
                      target="_blank"
                      rel='noreferrer'
                    >
                      <p className="me-2 mb-0 d-inline font-color white fw-600">Pi</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.6em"
                        height="0.6em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                        ></path>
                      </svg>
                    </a>{" "}
                    <span className="small">( April 2019 - October 2020 )</span>
                  </h3>
                </div>
                <span className="d-block font-color gray">
                  Contributed to creating a real-time web application from scratch. This app represents multiple SCADA screens and dynamic and personal reports. 
                  This app is built on Vue2 iframe and related libraries vuetify, vuex, vue-router, etc. Also SASS, bootstrap is used as making a better 
                  experience for styling. The application uses REST API and Websocket to communicate with Backend. The backend is built on top of the microservice 
                  architecture and actor-model architecture as distributed architecture. Mostly MSSQL and MySQL are used to store data that is flowed from web 
                  services connected to PLC.
                </span>
                <span className="small">
                  <b>Stack:</b>
                  <small>JavaScript - Vue2 - .Net Core - Node.js - MS Sql Server - Docker</small>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-2 mt-5">
          <h3 className="mb-4 font-color white fw-700">Education</h3>
          <div className="d-flex mb-4">
            <div className="pe-2">
              <img
                src={deuLogo}
                alt="Dokuz Eylül University Logo"
                width="60"
                height="50"
              ></img>
            </div>
            <div>
              <h5 className="mb-1">Dokuz Eylül University</h5>
              <p className="mb-1">Electrical and Electronics Engineer</p>
              <small className="text-muted">İzmir,Turkey</small>
            </div>
          </div>
        </div>
        <div className="mb-2 mt-5">
          <h3 className="font-color white fw-700">Certificates</h3>
          <h6 className="mt-3">
            <a
              href="https://www.hackerrank.com/certificates/5da900910abf"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
              rel='noreferrer'
            >
              <p className="me-2 mb-0 d-inline">
                HackerRank | JavaScript (Basic)
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2023</small>
          </h6>
          <h6 className="mt-3">
            <a
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-4a115f85-5dec-4df4-9ccf-06f3b4c239e9.pdf"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
              rel='noreferrer'
            >
              <p className="me-2 mb-0 d-inline">
                Udemy | Vue with Test Driven Development
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2022</small>
          </h6>
          <h6 className="mt-3">
            <a
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-33c785bc-3df2-4eff-aa0e-7acb0b2a6ec7.pdf"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
              rel='noreferrer'
            >
              <p className="me-2 mb-0 d-inline">
                Udemy | JavaScript - The Complete Guide 2022 (Beginner +
                Advanced)
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2022</small>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Cv;
