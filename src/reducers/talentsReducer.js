const findList = (state, stage) => {
  return state.find((list) => stage === list.stage)
}

const getTalentFromList = (list, index) => {
  return list.talents.splice(index, 1)
}

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TALENTS":
      return action.payload
    case "SORT_TALENTS": {
      const { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd } = action.payload
      const newState = [...state]

      if (droppableIdStart === droppableIdEnd) {
        const list = findList(newState, droppableIdStart)
        const talent = getTalentFromList(list, droppableIndexStart)
        list.talents.splice(droppableIndexEnd, 0, ...talent)
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = findList(newState, droppableIdStart)
        const listEnd = findList(newState, droppableIdEnd)
        const talent = getTalentFromList(listStart, droppableIndexStart)
        listEnd.talents.splice(droppableIndexEnd, 0, ...talent)
      }

      return newState
    }

    default:
      return state
  }
}
