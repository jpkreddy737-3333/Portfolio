import "./Home.css";
import profileImg from "../../assets/pavan.jpg";

function Home(){
    return (
       <section className="section">
  <div className="home-flex">
    <div className="home-left">
      <p className="container2">"FullStack Developer"</p>
      <h1>Pavan Kumar Reddy</h1>
      <p className="container3">Learn "The World is Changing Fast"</p>
      <div className="container4">
        <a href="">Download</a>
      </div>
    </div>

    <div className="image">
      <img src={profileImg} alt="Pavan Kumar Reddy" />
    </div>
  </div>
</section>
    )
}

export default Home;