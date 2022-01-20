import { useRef, useState } from "react";
import fifazgattal from "./fifazgattal.mp4"
function App() {
  const video = useRef(null);
  const [bg, setBg] = useState(true);
  const handleClick = () => {
    if(bg) { //ha kép
      setBg(false);
      video.current.play();
    }
    else {
      bg = false;
      setBg(true);
    }
  }
  return (
    <div className={bg ? 'flex h-screen setBG' : 'flex h-screen'}>
      <video ref={video} className={bg ? "hidden" : 'flex h-screen'} id="video" onEnded={() => setBg(true)}>
        <source src={fifazgattal} type='video/mp4'/>
      </video>
      <div className="m-auto">
        <button className={bg ? "p-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-700 transition duration-150" : 'hidden'} onClick={() => handleClick()}>Fifázgattál</button>
      </div>
    </div>
  );
}

export default App;
