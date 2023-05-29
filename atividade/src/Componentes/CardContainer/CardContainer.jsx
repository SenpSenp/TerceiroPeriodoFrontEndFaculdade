import './CardContainer.css'

export const CardContainer = ({children}) =>{

    return(
            <div 
            className = 'cardsContainer'>
            {children}
            </div>

    )
}