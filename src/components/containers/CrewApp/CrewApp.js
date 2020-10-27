import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DragDropContext } from "react-beautiful-dnd"

import { CrewList } from "components/containers/CrewList/CrewList"
import { CrewFilters } from "components/containers/CrewFilters/CrewFilters"

import FiltersProvider from "contexts/FiltersProvider"

import { fetchTalents, sortTalents } from "actions/index"

import { Nav, Header, HeaderLogo, Container } from "./styles"

const CrewApp = () => {
  const dispatch = useDispatch()
  const talents = useSelector((store) => store.talents)
  const availableFilters = talents
    .map(({ talents }) => talents.map((talent) => talent.tags.flat()).flat())
    .flat()
    .filter((tag, index, self) => index === self.findIndex((t) => t === tag))

  useEffect(() => {
    //   Set VH CSS variable to handle mobile issues with VH
    const vh = window.innerHeight * 0.01 + "px"
    document.documentElement.style.setProperty("--vh", vh)
  }, [])

  useEffect(() => {
    dispatch(fetchTalents())
  }, [dispatch])

  const onDragEnd = ({ destination, source }) => {
    if (!destination) {
      return
    }

    dispatch(sortTalents(source.droppableId, destination.droppableId, source.index, destination.index))
  }

  return (
    <FiltersProvider>
      <Nav>
        <img src="/crewlogo.png" alt="Crew" />
      </Nav>

      <Header>
        <HeaderLogo>
          <img src="/crewlogo.png" alt="Crew" />
        </HeaderLogo>
        <div>
          <h1>Board</h1>
          <CrewFilters availableFilters={availableFilters} />
        </div>
      </Header>

      {talents && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Container>
            {talents.map((talent, index) => {
              return <CrewList key={index} stage={talent.stage} talents={talent.talents} />
            })}
          </Container>
        </DragDropContext>
      )}
    </FiltersProvider>
  )
}

export { CrewApp }
