import React, { useContext, useState } from "react"

import { FiltersContext } from "contexts/FiltersProvider"

const CrewFilters = ({ availableFilters }) => {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useContext(FiltersContext)

  const handleFilter = (filter) => {
    const index = filters.indexOf(filter)
    if (index > -1) {
      setFilters([...filters].filter((filter, i) => i !== index))
    } else {
      setFilters([...filters, filter])
    }
  }

  return (
    <div>
      <span onClick={() => setOpen(!open)}>Quick filters</span>

      <ul>
        {filters.map((filter, index) => {
          return (
            <li key={index} onClick={() => handleFilter(filter)}>
              {filter}
            </li>
          )
        })}
      </ul>

      {open && (
        <ul>
          {availableFilters.map((filter, index) => {
            return (
              <li key={index} onClick={() => handleFilter(filter)}>
                {filter}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { CrewFilters }
