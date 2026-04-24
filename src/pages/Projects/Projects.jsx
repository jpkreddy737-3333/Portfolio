import "./Project.css";

function Projects(){
    return (
        <section id="Project" className="sectionpro">
            <p>04 Projects</p>
            <h2>Things I Have Built </h2>
            <div className="table">
                <p>02</p>
                <h3>Bro- Mart </h3>
                <p>Built and deployed a fully functional e-commerce web application with 8 pages including Home, Products, Product Details, Cart, Sign In, Sign Up, Contact Us, and Profile</p>
                <p>Integrated FakeStore REST API to fetch and display 20+ real-time products with category-wise filtering across electronics, jewellery, and clothing</p>
                <p>Implemented React Context API for global authentication state management supporting Sign Up and Sign In workflows with session persistence</p>
                <p>Deployed the application on Netlify for public access and availability</p>
                <a href="https://pavan-bro-mart.netlify.app" target="_blank" rel="noopener noreferrer"> Live Demo </a>
                 <a href="https://github.com/jpkreddy737-3333" target="_blank" rel="noopener noreferrer"> GitHub </a>
            </div>
             <div className="table">
                <p>03</p>
                <h3>MovieWood</h3>
                <p>Built a fully responsive movie discovery web application integrating a third-party Movie REST API to fetch and display real-time movie data</p>
                <p>Implemented dynamic movie browsing with search functionality, category filtering, and detailed movie information pages</p>
                <p>Designed a clean, responsive UI using React.js component architecture with React Router for seamless client-side navigation</p>
                <p>Deployed the application on Netlify for public access and availability</p>
                <a href="https://pavanmoviewod.netlify.app" target="_blank" rel="noopener noreferrer"> Live Demo</a>
                <a href="https://github.com/jpkreddy737-3333" target="_blank" rel="noopener noreferrer"> GitHub </a>
            </div>
            <div className="table">
                <p>01</p>
                <h3>Green House Monitoring System</h3>
                <p>
                    Cloud-Based Web And Mobile Application to visualize real-time data streaming for smart greenhouse monitoring system.</p>
                   <p> Designed and implemented a system to automate climate control, improving plant health, soil condition and resource efficiency.
                </p>
                <p>Integrated IoT devices including ESP32, DHT11, and soil moisture sensors using MQTT protocol.</p>
                <p>Enabled automation and alert notifications for irrigation and ventilation based on sensor threshold</p>
                <a href="">View Project-- </a>
            </div>
            

        </section>
    )
}

export default Projects;