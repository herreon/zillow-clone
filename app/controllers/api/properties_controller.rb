class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.all
        # @properties = bounds ? Property.in_bounds(bounds) : Property.all
        render :index
    end

    def show
        @property = Property.find(params[:id])
        render :show
    end

    def create
        @property = Property.create!(property_params)
        render :show
    end

    private

    def property_params
        params.require(:property).permit(
            :latitude,
            :longitude,
            :address,
            :city_or_town,
            :county,
            :postal_code,
            :area_in_sqft,
            :lot_in_sqft,
            :status,
            :no_bathrooms,
            :no_bedrooms,
            :summary,
            :price,
            :year_built,
            :year_major_remodel,
            :hoa_monthly_fee,
            :heating,
            :cooling,
            :parking_details,
            :housing_type,
            :user_id,
            photos: []
        )
    end

    def bounds
        params[:bounds]
    end

end
