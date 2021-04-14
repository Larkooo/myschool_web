import './App.css';
import logo_bg from './logo_bg.png';
import logo_fg from './logo_fg.png';
import { Link } from '@material-ui/core';
import Tilt from 'react-tilt'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Tilt className="Tilt" options={{ max : 35, scale: 1 }} style={{}} >
        <div className="Tilt-inner">
        <img src={logo_fg} className="app_logo_fg" alt="logo_fg" style={{height: "auto", width: "16vh"}}/>
        <img src={logo_bg} className="app_logo_bg" alt="logo_bg" style={{height: "auto", width: "16vh"}}/>
        </div>
      </Tilt> 

        <p style={{maxWidth: "60vh", fontSize: 20, paddingTop: "2vh", paddingBottom: "2vh", paddingLeft: "2vw", paddingRight: "2vw"}}>
        MonÉcole est une application pour les élèves et les enseignants qui permet de faciliter l'accès à l'horaire de classe, les devoirs à remettre, et les annonces de l'école.
        </p>

        <div>
        <Tilt className="Tilt" options={{ max : 20, scale: 1 }}>
        <div className="Tilt-inner">
        <a href='https://play.google.com/store/apps/details?id=com.myschool.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{width: "30vh", height: "auto"}} alt='Disponible sur Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'/></a>
        </div>
      </Tilt> 
        <br/>
        <Tilt className="Tilt" options={{ max : 20, scale: 1 }}>
        <div className="Tilt-inner">
        <a href='https://apps.apple.com/us/app/mon%C3%A9cole/id1562920377'><img style={{width: "25vh", height: "auto"}} alt='Disponible sur App Store' src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg'/></a>
        </div>
      </Tilt> 
        </div>

        <br/>
        
        <a 
        style={{color: "#2c8ed4", fontSize: 20}}
        component="button" 
        href="mailto:support@monecole.app"
        variant="body2">
          Contact
        </a>
      </header>
    </div>
  );
}

export default App;