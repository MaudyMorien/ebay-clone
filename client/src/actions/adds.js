import request from 'superagent'
import { addsFetched, addCreateSuccess } from './action lib'

const baseUrl = 'http://localhost:4000/adds'

export const loadAdds = () => (dispatch, getState) => {
    if (getState().events) return

    request(`${baseUrl}`)
        .then(response => {
            dispatch(addsFetched(response.body))
        })
        .catch(console.error)
}

// export const createAdd = (add) => dispatch => {
//     request
//     .pos(`${baseUrl}`)
//     .send(add)
//     .then(() => {
//         dispatch(addCreateSuccess(add))
//     })
//     .catch(console.error)
// }

export function createAdd(add) {
    console.log(add)
    return function (dispatch) {
        request.post(`${baseUrl}`)
            .send(add)
            .then(
                dispatch(addCreateSuccess(add))
            )
    }
}