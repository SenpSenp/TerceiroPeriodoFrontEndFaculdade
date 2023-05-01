import "./Main.css"

const Main = ({titulo})=>{

   const tit = titulo || "Principal".toUpperCase()

    return(
        <div className="Main_container" style={{"height":"90%"}}>
        <h1>{tit}</h1>
        </div>
    )
}

export default Main