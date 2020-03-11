class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :address
      t.string :city_or_town
      t.string :county
      t.string :postal_code
      t.integer :area_in_sqft
      t.integer :lot_in_sqft
      t.string :status, null: false
      t.integer :no_bathrooms, null: false
      t.integer :no_bedrooms, null: false
      t.string :summary
      t.integer :price
      t.string :year_built
      t.string :year_major_remodel
      t.integer :hoa_monthly_fee
      t.string :heating
      t.string :cooling
      t.string :parking_details      
      t.string :housing_type
      t.timestamps
    end
  end
end
