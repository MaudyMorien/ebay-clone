
const initialState = null

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'AD_FETCHED':
            return state = action.ad
        default:
            return state
    }
}