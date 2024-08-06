

import "./Main.css"
import krähe from "./images/crow-922740_960_720.jpg"

const Main = () => {
    //! JS bereich


    //* local oder Global CSS
    const headerStyle = {
        color: "hotpink",
        backgroundColor: "lightgray",
        fontSize: ".9rem",
        fontWeight: "bold"
    }
  return (
    <main>
    {/* //! JSX bereich */}
    {/* //* inline CSS (key-value) und camelCase */}
        <h2 style={{color: "red", backgroundColor: "gray"}}>Main Section</h2>

        <h3 style={headerStyle}>Other Header</h3>

        <p style={headerStyle}>LOrem, Ipsum</p>


        {/* //*Extern CSS */}
        <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio temporibus ad adipisci quos debitis soluta itaque doloribus optio sed. Magnam consequatur, unde cumque eius est veniam esse! Facilis, dicta autem!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur earum consequuntur perferendis a explicabo, illum distinctio nobis incidunt non nisi numquam placeat facilis neque laudantium dolor! Tenetur, officia molestiae?</p>

        <div>
            <img className="img" src="https://cdn.pixabay.com/photo/2019/11/18/18/29/mountain-4635428_960_720.jpg" alt="plateau" />

            <img className="img" src="https://cdn.pixabay.com/photo/2017/10/25/12/13/landscapes-2887796_1280.jpg" alt="wald" />

            <img id="img-id" src="https://cdn.pixabay.com/photo/2017/08/06/11/03/gantrischseeli-2591314_1280.jpg" alt="Berg" />

            {/* //* bei lokale bild müssen wir importieren */}
            <img className="img" src={krähe} alt="krähe" />
            {/* //* bei public ordner müssen wir nicht importieren */}
            <img className="img" src="./img/Kalb.jpg" alt="kalb" />
        </div>
    </main>
  )
}

export default Main