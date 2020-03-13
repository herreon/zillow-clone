class Property < ApplicationRecord

    validates :latitude, :longitude, :status, :state, :no_bathrooms, :no_bedrooms, presence: true

    belongs_to :user

    # has_many_attached :photos
    has_one_attached :photo
    

    def self.in_bounds(bounds)
      self.where("latitude < ?", bounds[:northEast][:lat])
      .where("latitude > ?", bounds[:southWest][:lat])
      .where("longitude > ?", bounds[:southWest][:lng])
      .where("longitude < ?", bounds[:northEast][:lng])
    end
    
end
