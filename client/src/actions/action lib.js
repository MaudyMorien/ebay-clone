export const adsFetched = ad => ({
    type: 'ADS_FETCHED',
    ad
})
export const adCreateSuccess = ad => ({
    type: 'AD_CREATE_SUCCESS',
    ad
}) 

export const adFetched = ad => ({
    type: 'AD_FETCHED',
    ad
})

export const adDeleteSuccess = id => ({
    type: 'AD_DELETE_SUCCESS',
    id
})

export const updatedAd = ad => ({
    type: 'UPDATE_EVENT',
    ad
})