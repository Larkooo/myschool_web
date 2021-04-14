import './App.css';
import logo from './logo.png';
import { Link } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height: "auto", width: "16vh"}}/>
        
        <p style={{maxWidth: "60vh", fontSize: 20, paddingTop: "2vh", paddingBottom: "2vh", paddingLeft: "2vw", paddingRight: "2vw"}}>
        MonÉcole est une application pour les élèves et les enseignants qui permet de faciliter l'accès à l'horaire de classe, les devoirs à remettre, et les annonces de l'école.
        </p>

        <div>
        <a href='https://play.google.com/store/apps/details?id=com.myschool.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{width: "30vh", height: "auto"}} alt='Disponible sur Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'/></a>
        <br/>
        <a href='https://apps.apple.com/us/app/mon%C3%A9cole/id1562920377'><img style={{width: "25vh", height: "auto"}} alt='Disponible sur App Store' src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg'/></a>
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
