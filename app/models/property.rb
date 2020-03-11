class Property < ApplicationRecord

    validates :latitude, :longitude, :status, :no_bathrooms, :no_bedrooms, presence: true

    belongs_to :user

    has_one_attached :photo
    
end
