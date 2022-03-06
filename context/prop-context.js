import { createContext } from "react"
import PropTypes from "prop-types"

const PropContext = createContext()

const PropContextProvider = ({ value, children }) => {
  return (
    <PropContext.Provider value={{ ...value }}>{children}</PropContext.Provider>
  )
}

//propType checking
PropContextProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.node,
}

export { PropContext, PropContextProvider }
