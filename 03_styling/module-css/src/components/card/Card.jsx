import Button from "../button/Button"
// import "./Card.css"
import CardStyle from "./Card.module.css"



const Card = ({lang,img})=> {
    return(
        <div>
            {/* <div className="wrapper"> */}
            <div className={CardStyle.wrapper}>
                <h1>{lang}</h1>
                {/* <img className="images" src={img} alt={lang} /> */}
                <img className={CardStyle.images} src={img} alt={lang} />
                <Button/>
            </div>
        </div>
    )
}

export default Card