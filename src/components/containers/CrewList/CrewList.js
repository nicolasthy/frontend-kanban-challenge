import React, { useContext, useState } from "react"
import { Droppable } from "react-beautiful-dnd"
import { Plus } from "@styled-icons/heroicons-outline/Plus"

import { CrewCard } from "components/presentationals/CrewCard/CrewCard"

import { FiltersContext } from "contexts/FiltersProvider"

import { Container, Header, List, DroppableContainer, LoadMore } from "./styles"

const CrewList = ({ stage, talents }) => {
  const [limit, setLimit] = useState(20)
  const emoji = stage.split(" ")[0]
  const header = stage.substring(2)
  const [filters] = useContext(FiltersContext)

  return (
    <Container>
      <Header>
        <div>
          {header} <small>{talents.length}</small>
        </div>
        <span>{emoji}</span>
      </Header>

      <DroppableContainer>
        <Droppable droppableId={stage}>
          {(provided) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {talents
                .slice(0, limit)
                .filter((talent) => {
                  if (filters.length <= 0) return talent
                  return talent.tags.some((tag) => filters.includes(tag))
                })
                .map((talent, index) => {
                  return <CrewCard key={talent.id} id={talent.id} index={index} talent={talent} />
                })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
        {limit < talents.length && (
          <LoadMore type="button" onClick={() => setLimit(limit + 20)}>
            <span>Load more</span>
            <Plus size={18} />
          </LoadMore>
        )}
      </DroppableContainer>
    </Container>
  )
}

export { CrewList }
