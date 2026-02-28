import "./About.css";

function About(){
    return (
        <section id="About" className="section">
            <p className="section-label"> 01 About</p>
            <h2 className="section-title">Who I Am</h2>
            <div className="about-grid">
                <div className="about-text"> 
                <p>I am a Computer Science graduate with a strong interest in software development and web technologies. I have knowledge of Core Java, JavaScript, HTML, CSS, and Bootstrap.I am passionate about learning new technologies and continuously improving my skills to grow as a Full Stack Developer.

                </p>
                <p>As a Computer Science Engineer seeking an entry-level position to utilize my technical skills, programming knowledge and a passion for software development in a dynamic and progressive organization. Committed to continuous learning and delivering high-quality work to contribute to organizational growth.</p>
                <p>Currently leveling up: React JS and Started SpringBoot & Microservices for BackEnd — because good developers never stop learning.</p>
                </div>
                <div className="edu">
                    <h3>Education</h3>
                    <div className="edu-card">
                        <h3>Gitam University</h3>
                        <p>B.Tech CSE - CGPA: 6.38</p>
                        <p>2021 - 2025</p>
                    </div>
                    <div className="edu-card">
                        <h3>Sri Chaitanya Junior College</h3>
                        <p>MPC - Percentage: 74%</p>
                        <p>2019 - 2021</p>
                    </div>
                    <div className="edu-card">
                          <h3>Sri Chaitanya techno School</h3>
                          <p>SSC - CGPA: 9.3</p>
                          <p>2018 - 2019</p>
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat-card">
                    <h3 className="num"> 1 </h3>
                    <p className="label">University Award Won</p>
                    </div >
                    <div className="stat-card">
                        <h3 className="num"> 2 </h3>
                        <p className="label">Projects</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="num"> 4 </h3>
                        <p className="label">Languages Spoken</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;