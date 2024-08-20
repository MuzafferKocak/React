
//?================================ ==============
//? LEBENSZYKLUS-METHODEN
//? https://reactjs.org/docs/react-component.html
//?================================ ==============

//* Lebenszyklusmethoden gelten während der gesamten Zeit, in der die Komponenten im DOM vorhanden sind.
//* Dies sind spezielle React-Methoden, die es uns ermöglichen, Operationen an ihnen durchzuführen.
//* Wenn beispielsweise eine Komponente erstellt und das DOM gedrückt wird,
//* um etwas zu tun, wenn es aktualisiert oder aus dem DOM entfernt wird
//* Lebenszyklusmethoden können verwendet werden.
//* Die bekannteste Lebenszyklusmethode ist die render()-Methode.

//* Erstellen einer Komponente (Constructor),
//* Unmittelbar nachdem eine Komponente zum DOM-Baum hinzugefügt wurde (componentDidMount)
//* Rendern einer Komponente im DOM
//* (Optional) Unmittelbar nach der Aktualisierung einer Komponente (componentDidUpdate)
//* Nach dem Entfernen einer Komponente aus dem DOM-Baum (componentWillUnmount)




import React, { Component } from "react"

class LifeCycleMethods extends React.Component {

  //! 1-) Wird beim Erstellen einer Komponente aufgerufen

  constructor(props) {
    console.log("1- Constructor running")
    super(props)
    this.state = {
      count: 0,
    }
  }

  //! 3-) Es wird ausgeführt, wenn eine Komponente zum DOM-Baum hinzugefügt wird.
 //! (Nach dem ersten Rendern).
 //! Es wird einmal pro Lebenszyklus ausgeführt.

  componentDidMount() {

    //? Abonnement (Abruf, Timer-Installation, Initialisierungsvorgänge (localstorage))

    console.log("3- componentDidMount running")
  }

  //! 4-) Diese Methode wird nach allen Renderings außer dem ersten Rendering aufgerufen.

  componentDidUpdate() {
    //? Wenn wir eine Aktion auslösen möchten, nachdem sich der Status oder die Eigenschaft einer Komponente geändert hat, kann die Methode didUpdate verwendet werden. beispielsweise die Kauf- oder Verkaufstransaktion anhand der von der API abgerufenen Paritätsinformationen.

    console.log("4- componentDidUpdate running")
  }

  componentWillUnmount() {

    //? Methode zum Kündigen aller Mitgliedschaften (Fetch, Timer, Löschen)

    console.log("5- componentWillUnmount running")
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  //! 2-) Es wird jedes Mal erneut aufgerufen, wenn sich ein Status oder eine props ändert (Rendering).

  render() {
    console.log("2- Render run")
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    )
  }
}
export default LifeCycleMethods