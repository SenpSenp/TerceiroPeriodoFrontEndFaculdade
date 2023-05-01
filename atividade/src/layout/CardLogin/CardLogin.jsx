import { useState } from "react"
import "./CardLogin.css"

const CardLogin = ()=>{

    const [form, setForm] = useState({"login":"","senha":""})

    return(

    <div className="card cl_Container" style={{"width": "18rem"}}>
        <h1 className="card-img-top">LOGIN</h1>
        <div className="card-body">
          <div className="card-text d-flex flex-column">
            <label>Login</label>
            <input type="text" value={form.login} onChange={(e)=>setForm({...form,"login":e.target.value})}/>
            <label>Senha</label>
            <input type="password" value={form.senha} onChange={(e)=>setForm({...form,"senha":e.target.value})} />
            
          </div>
          <a className="btn btn-primary">OK</a>
        </div>
    </div>

    )
}

export default CardLogin