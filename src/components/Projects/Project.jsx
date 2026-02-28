import "./Project.css";

function Project(){
    return (
        <section id="Project" className="sectionpro">
            <p>04 Projects</p>
            <h2>Things I Have Built </h2>
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

export default Project;