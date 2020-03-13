json.extract! property, :id, :latitude, :longitude, :address, :city_or_town, :state, :postal_code, :area_in_sqft, :no_bathrooms, :no_bedrooms, :summary, :price, :year_built, :year_major_remodel, :status

json.photo url_for(property.photo) if property.photo.attached?

# json.photos property.photos do |p|
#     url_for(p) if property.photos.attached?
# end
