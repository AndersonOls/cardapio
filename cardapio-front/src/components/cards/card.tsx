import "./card.css"

interface CardProps{
    price:number,
    tittle: string,
    image: string
}

export function Card ({price, image, tittle} : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{tittle}</h2>
            <p><b>Valor: </b>{price}</p>
        </div>
    )
}