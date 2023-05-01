
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import Main from '../../layout/main/Main';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import CardLogin from '../../layout/CardLogin/CardLogin';

const Login = ()=>{

    return (

    <div className='d-flex flex-column'>
  
        <div className='row flex-grow-1 g-0'>
          <div className='col-12'>
 
            <CardLogin />

          </div>
        </div>
  
        <div className='row'>
        <div className='col-12'><Footer/></div>
        
        </div>
      
    </div>

    )

}

export default Login