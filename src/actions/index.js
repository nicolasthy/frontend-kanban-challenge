import { STAGES } from "constants/index"

const apiURI = "https://hiring.crew.work/v1/talents"

const sortTalentsByStage = async (response) => {
  const talents = []
  STAGES.forEach((stage) => {
    talents.push({
      stage: stage,
      talents: response.filter((talent) => {
        return talent.stage === stage
      }),
    })
  })

  return talents
}

export const fetchTalents = () => async (dispatch) => {
  const response = await fetch(apiURI)
    .then((response) => response.json())
    .then((response) => response)

  const talents = await sortTalentsByStage(response)

  dispatch({ type: "FETCH_TALENTS", payload: talents })
}

export const sortTalents = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd) => {
  return {
    type: "SORT_TALENTS",
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
    },
  }
}
