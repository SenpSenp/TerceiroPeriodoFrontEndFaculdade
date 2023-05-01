
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import Main from '../../layout/main/Main';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"

const Home = ()=>{

    return (

    <div className='container d-flex flex-column' style={{"height": "80vh"}}>

  
        <div className='row flex-grow-1 g-0'>
        <div className='col-12'>


            
        <Main titulo="TELA PRINCIPAL" />
        
        </div>

        </div>
  
        <div className='row'>
        <div className='col-12'><Footer/></div>
        
        </div>
      
    </div>

    )

}

export default Home