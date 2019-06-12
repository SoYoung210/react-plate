export const todo = {
  items: [{ name: 'A', isDone: false }, { name: 'B', isDone: false }, { name: 'C', isDone: false }],
}

export const NAMESPACE = 'todo'

const ADD = `${NAMESPACE}/ADD`

export const add = name => ({
  type: ADD,
  item: { name, isDone: false },
})

export default function(state, action) {
  const { items } = state

  switch (action.type) {
    case ADD:
      const newItems = items.concat(action.item)
      return {
        ...state,
        items: newItems,
      }
    default:
      return state
  }
}
