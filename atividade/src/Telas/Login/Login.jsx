import { Login } from "../../Service/Service"
import Header from "../../Componentes/Header/Header"


export const TelaLogin = () =>{
    return(
    <div className='d-flex flex-column'>

        <div className='row flex-grow-1 g-0'>
            <div className='col-12'>
              <Header/>
              <Login/>
            </div>       
        </div>
    </div>
    )
}