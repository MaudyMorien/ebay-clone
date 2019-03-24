export default (state = null, action) => {
    switch (action.type) {
        case 'ADS_FETCHED':
            return action.ad
        case 'AD_CREATE_SUCCESS':
            return [...state, Object.assign({}, action.ad)]
        default:
            return state
    }
}