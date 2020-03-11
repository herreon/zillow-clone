class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.all
        render :index
    end

    def create
        @property = Property.create!(property_params)
        render :show
    end

    def show
        @property = Property.find(params[:id])
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
            :housing_type
        )
    end
end
