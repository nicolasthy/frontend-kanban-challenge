import React, { useContext, useState, useRef } from "react"
import { ChevronDown } from "@styled-icons/heroicons-outline/ChevronDown"
import { X } from "@styled-icons/heroicons-outline/X"

import { useOnClickOutside } from "hooks/useOnClickOutside"
import { FiltersContext } from "contexts/FiltersProvider"

import {
  Container,
  Actions,
  AvailableFiltersList,
  AvailableFilterItem,
  FiltersList,
  FilterItem,
  QuickFilterButton,
} from "./styles"

const CrewFilters = ({ availableFilters }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useContext(FiltersContext)
  const ref = useRef()

  useOnClickOutside(ref, () => setIsOpen(false))

  const handleFilter = (filter) => {
    const index = filters.indexOf(filter)
    if (index > -1) {
      setFilters([...filters].filter((filter, i) => i !== index))
    } else {
      setFilters([...filters, filter])
    }
  }

  return (
    <Container>
      <Actions>
        <QuickFilterButton type="button" onClick={() => setIsOpen(!isOpen)}>
          <span>Quick filters</span> <ChevronDown size={14} />
        </QuickFilterButton>

        <FiltersList>
          {filters.map((filter, index) => {
            return (
              <FilterItem key={index} onClick={() => handleFilter(filter)}>
                <span>{filter}</span> <X size={16} />
              </FilterItem>
            )
          })}
        </FiltersList>
      </Actions>

      {isOpen && (
        <AvailableFiltersList ref={ref}>
          {availableFilters.map((filter, index) => {
            const checked = filters.includes(filter)
            return (
              <AvailableFilterItem key={index} onClick={() => handleFilter(filter)} checked={checked}>
                <input type="checkbox" readOnly checked={checked} />
                {filter}
              </AvailableFilterItem>
            )
          })}
        </AvailableFiltersList>
      )}
    </Container>
  )
}

export { CrewFilters }
