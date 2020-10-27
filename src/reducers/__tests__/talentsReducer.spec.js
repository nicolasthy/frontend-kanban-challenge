import reducer from "../talentsReducer"
import expect from "expect"

describe("talents reducer", () => {
  const mockedTalents = [
    {
      id: "id-1",
      stage: "✨ New",
    },
    {
      id: "id-2",
      stage: "✨ New",
    },
  ]

  const mockedTalentsByStage = [{ stage: "✨ New", talents: [...mockedTalents] }]

  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it("should handle FETCH_TALENTS", () => {
    expect(
      reducer([], {
        type: "FETCH_TALENTS",
        payload: mockedTalentsByStage,
      })
    ).toEqual(mockedTalentsByStage)
  })

  it("should handle SORT_TALENTS", () => {
    expect(
      reducer(mockedTalentsByStage, {
        type: "SORT_TALENTS",
        payload: {
          droppableIdStart: "✨ New",
          droppableIdEnd: "✨ New",
          droppableIndexStart: 0,
          droppableIndexEnd: 1,
        },
      })
    ).toEqual([{ stage: "✨ New", talents: [mockedTalents[1], mockedTalents[0]] }])
  })
})
