import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todoReducer"

const TodoInput = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    //?Benachrichtigung über die Anforderung, den globalen State des Reducer durch die Benutzeroberfläche zu ändern
    // dispatch({type: "ADD", payload: text})
    dispatch(addTodo(text))
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  )
}

export default TodoInput