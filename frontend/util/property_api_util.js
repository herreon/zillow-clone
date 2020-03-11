export const fetchProperties = () => (
    $.ajax({
        method: 'GET',
        url: 'api/properties'
    })
)

export const fetchProperty = id => (
    $.ajax({
        method: 'GET',
        url: `api/properties/${id}`
    })
)

export const createProperty = propertyForm => (
    $.ajax({
        method: 'POST',
        url: 'api/properties',
        data: propertyForm
    })
)