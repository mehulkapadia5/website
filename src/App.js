import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Landinginfo1 from "./Components/Landinginfo1";
import Landinginfo2 from "./Components/Landinginfo2";
import Landinginfo3 from "./Components/Landinginfo3";
import Landinginfo4 from "./Components/Landinginfo4";
import Landingmedia1 from "./Components/Landingmedia1";
import Landingmedia2 from "./Components/Landingmedia2";
import Landingmedia3 from "./Components/Landingmedia3";
import Landingmedia4 from "./Components/Landingmedia4";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './CSS/magnific-popup.css';
import '../node_modules/swiper/swiper-bundle.css';
import './CSS/style.css';

function App() {
  return (
    <div className="App">
      <header/>
            <Logo/>
            <Header/>
            <Menu/>
            <Landinginfo1/>
            <Landinginfo2/>
            <Landinginfo3/>
            <Landinginfo4/>
            <Landingmedia1/>
            <Landingmedia2/>
            <Landingmedia3/>
            <Landingmedia4/>
    </div>
  );
}

export default App;
