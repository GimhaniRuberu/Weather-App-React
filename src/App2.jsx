import './App2.css';
import Video from './assets/images & videos/video.mp4'
import { Link } from "react-router-dom";

export default function App2() {
  return (
    <div className='container-fluid'>
      <div className='bgVideo'>
        <video src={Video} autoPlay muted loop></video>
      </div>
      <div className="row">
        <div className='main col-lg-12 mt-5'>
          <h1 className='theme col-lg-12'>Weather App</h1>
          <h2 className='theme2'>Let's Search Your Location Weather</h2>         
          <div className="input-group has-validation col-lg-12 searchBar mt-4">
            <span className="input-group-text"><i className="bi bi-globe-asia-australia"></i></span>
            <input type="text" placeholder="Enter Your Location Here"></input>
          </div>         
          <Link to="/app3">
          <button type="button" class=" bton mt-3">See Weather</button>
          </Link>
        </div>
      </div>
    </div>
  );
}