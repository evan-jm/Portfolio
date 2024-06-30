import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <center>
        <h2>Experience</h2>
      </center>
      <div className="entry">
        <div className="header">
          <h4>Software Engineer | Komo Machine Inc.</h4>
          <p>May 2024 - Present</p>
        </div>
        <ul>
          <li>
            Developed a cutting-edge customer portal for purchasing CNC machine
            replacement parts using the MERN stack.
          </li>
          <li>
            Utilized RESTful APIs for efficient front-end and back-end
            communication, ensuring smooth data exchange.
          </li>
          <li>
            Designed and implemented user interfaces for various web
            applications and websites, ensuring seamless user experience and
            adherence to design specifications.
          </li>
          <li>
            Developed responsive and interactive features using JavaScript,
            HTML, and CSS, including dynamic elements like menu buttons and
            online forms.
          </li>
          <li>
            Conducted thorough testing and troubleshooting of interface software
            to identify and resolve any functionality or compatibility issues,
            ensuring optimal performance across platforms.
          </li>
        </ul>
      </div>
      <div className="entry">
        <div className="header">
          <h4>Service Technician | Withum, Smith, and Brown</h4>
          <p>May 2023 - December 2023</p>
        </div>
        <ul>
          <li>Supported customers with hardware and software issues.</li>
          <li>
            Built over one hundred PCs for a wave of new hires joining the firm.
          </li>
          <li>
            Built a new website and SQL database to manage gathering new hire
            information by HR and status of PC builds using HTML, CSS, SQL, and
            PHP.
          </li>
          <li>
            Prepared laptops for over 200 new hires prior to their on-boarding
            dates.
          </li>
          <li>
            Reconfigured a conference room into a new cooperative “teams” room
            complete with multiple standing desk setups.
          </li>
          <li>
            Utilized tools such as Microsoft Intune, Duo Security, and Active
            Directory.
          </li>
          <li>
            Communicated with users to coordinate rolling out new Windows 11
            machines.
          </li>
        </ul>
      </div>
      <div className="entry">
        <div className="header">
          <h4>Deskside Analyst | Janney Montgomery Scott LLC.</h4>
          <p>May 2021 - September 2021</p>
        </div>
        <ul>
          <li>Supported over one hundred employees with PC issues.</li>
          <li>Prepped equipment for use by new hires.</li>
          <li>
            Granted proper permissions to new hires through Active Directory.
          </li>
          <li>Solved hardware problems for employees.</li>
          <li>
            Shipped over one hundred pieces of required equipment for employees
            across the country.
          </li>
          <li>
            Worked with a team to set up the required equipment for the opening
            of new offices.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
