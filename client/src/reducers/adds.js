export default (state = null, action) => {
    switch (action.type) {
        case 'ADDS_FETCHED':
            return action.add
        case 'ADD_CREATE_SUCCESS':
            return [...state, Object.assign({}, action.add)]
        default:
            return state
    }
}