import * as PropertyAPIUtil from '../util/property_api_util';

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';

export const receiveProperties = properties => ({
    type: RECEIVE_PROPERTIES,
    properties,
});

export const receiveProperty = property => ({
    type: RECEIVE_PROPERTY,
    property,
});

export const fetchProperties = () => dispatch => (
    PropertyAPIUtil.fetchProperties().then(properties => (
        dispatch(receiveProperties(properties))
    ))
);

export const fetchProperty = (id) => dispatch => (
    PropertyAPIUtil.fetchProperty(id).then(property => (
        dispatch(receiveProperty(property))
    ))
);

