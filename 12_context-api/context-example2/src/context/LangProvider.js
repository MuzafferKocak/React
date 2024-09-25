//? Beispiel für Language

import { createContext, useState } from "react"

export const LangContext = createContext()

const LangProvider = (props) => {
  const [currLang, setCurrLang] = useState({ lang: "en" })

  const values = { currLang, setCurrLang }
  return (
    <LangContext.Provider value={values}>{props.children}</LangContext.Provider>
  )
}

export default LangProvider