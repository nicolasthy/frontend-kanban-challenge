import React, { useContext, useState } from "react"

import { FiltersContext } from "contexts/FiltersProvider"

const CrewFilters = ({ availableFilters }) => {
  const [isOpen, setIsOpen] = useState(false)
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
      <span onClick={() => setIsOpen(!isOpen)}>Quick filters</span>

      <ul>
        {filters.map((filter, index) => {
          return (
            <li key={index} onClick={() => handleFilter(filter)}>
              {filter}
            </li>
          )
        })}
      </ul>

      {isOpen && (
        <ul>
          {availableFilters.map((filter, index) => {
            return (
              <li key={index} onClick={() => handleFilter(filter)}>
                <input type="checkbox" readOnly checked={filters.includes(filter)} />
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
