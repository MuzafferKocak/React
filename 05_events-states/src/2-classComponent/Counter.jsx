import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)

    //!  State
    this.state = {
      count: 0,
    }

    //? Binden der Inkrementierungsmethode an die Counter-Klasse (bind)
    //  this.increment = this.increment.bind(this)
  }

  //! Die von uns geschriebenen Methoden sind standardmäßig nicht mit der Klasse verbunden.
  

  //* Dazu müssen wir entweder unsere Methoden innerhalb des Konstruktors binden oder Arrow func. verwenden, die eine automatische Bindung ermöglichen.

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment}>INC</button>
        <button onClick={() => this.setState({ count: 0 })}>CLR</button>
        <button onClick={this.decrement}>DEC</button>
      </div>
    )
  }
}

export default Counter