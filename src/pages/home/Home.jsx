import { Link } from 'react-router';
import './style.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx'
import {useLocation} from 'react-router-dom';
export function Home() {
    return(
    <div className="App">
      <Header />
     
      <Footer />  
      </div>
    ).if(err(console.log('err in the app.jsx')))
}

export default Home;