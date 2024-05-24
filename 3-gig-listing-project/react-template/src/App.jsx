import Hello from "./components/Hello";
import "./App.css";
import background from "./assets/concert_pag.png";
import albumSign from "./assets/sign.png";
import Gig from "./components/gig";
import TS from "./assets/TaylorS.png"


function App() {
  return (
    <>
      <img src={background} alt="Gig image" id="logo"/>
      <div>
          <Gig name="Ed Sheeran" location="Location: O2 London" date="Date: 34 June 2024" 
                info= "The third studio album by English singer-songwriter Ed Sheeran. It was released on 3 March 2017 through Asylum Records and Atlantic Records. Castle on the Hill and Shape of You were released as the albums lead singles on 6 January 2017. The album won the Grammy Award for Best Pop Vocal Album at the 60th Annual Grammy Awards."/>
          <iframe 
          width="560" height="315" src="https://www.youtube.com/embed/K0ibBPhiaG0?si=vbbKQSIPcI5-1rfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
          {/* <img className="logo" src={albumSign}></img> */}
      </div>

      <div>
          <Gig name="Taylor Swift" location="Location: Birmingham" date="Date: 34 June 2079" 
          image= "src/assets/TaylorS.png"/>
          {/* <img className="logo" src={TS}></img> */}
      </div>
      
    </>
  );
}
export default App;
