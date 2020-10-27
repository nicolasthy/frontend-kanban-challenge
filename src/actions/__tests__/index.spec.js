import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import * as actions from "../index"
import fetchMock from "fetch-mock"
import expect from "expect"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it("should create an action to fetch talents", () => {
    fetchMock.getOnce("https://hiring.crew.work/v1/talents", {
      body: [],
      headers: { "content-type": "application/json" },
    })

    const store = mockStore([])

    return store.dispatch(actions.fetchTalents()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: "FETCH_TALENTS",
          payload: [
            { stage: "✨ New", talents: [] },
            { stage: "📝 Offer Sent", talents: [] },
            { stage: "🤝 Onsite Interview", talents: [] },
            { stage: "⏰ Not Now", talents: [] },
            { stage: "⛔ Rejected", talents: [] },
            { stage: "🍾 Hired", talents: [] },
            { stage: "👻 Contacted", talents: [] },
            { stage: "📞 Phone Screen", talents: [] },
          ],
        },
      ])
    })
  })
})

describe("actions", () => {
  it("should create an action to sort talents", () => {
    expect(actions.sortTalents(1, 1, 2, 3)).toEqual({
      type: "SORT_TALENTS",
      payload: {
        droppableIdStart: 1,
        droppableIdEnd: 1,
        droppableIndexStart: 2,
        droppableIndexEnd: 3,
      },
    })
  })
})
