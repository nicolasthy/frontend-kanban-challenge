import React, { createContext, useState } from "react"

export const FiltersContext = createContext(null)

export default ({ children }) => {
  const [filters, setFilters] = useState([])

  return <FiltersContext.Provider value={[filters, setFilters]}>{children}</FiltersContext.Provider>
}
