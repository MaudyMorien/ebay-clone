import request from 'superagent'
import { adFetched, adsFetched, adCreateSuccess, updatedAd, adDeleteSuccess } from './action lib'

const baseUrl = 'http://localhost:4000/ads'

export const loadAds = () => (dispatch, getState) => {
    if (getState().ads) return

    request(`${baseUrl}`)
        .then(response => {
            dispatch(adsFetched(response.body))
        })
        .catch(console.error)
}

// export const createAd = (ad) => dispatch => {
//     request
//     .pos(`${baseUrl}`)
//     .send(ad)
//     .then(() => {
//         dispatch(adCreateSuccess(ad))
//     })
//     .catch(console.error)
// }

export function createAd(ad) {
    console.log(ad)
    return function (dispatch) {
        request.post(`${baseUrl}`)
            .send(ad)
            .then(
                dispatch(adCreateSuccess(ad))
            )
    }
}

export const loadSingleAd = (id) => (dispatch) => {
    request(`${baseUrl}/ads/${id}`)
      .then(response => {
        dispatch(adFetched(response.body))
      })
      .catch(console.error)
  }

  export const deleteAd = (id) => (dispatch, getState) => {
    if (!getState().event) return
    request
      .delete(`${baseUrl}/ads/${id}`)
      .then(() => {
        dispatch(adDeleteSuccess(id))
      })
      .catch(console.error)
  }
  
  export const updateAd = (id, data) => (dispatch, response) => {
    request
    .update(`${baseUrl}/ads/${id}`)
    .send(data)
    .then(() => {
      dispatch(updatedAd(response.body))
    })
    .catch(console.error)
  }