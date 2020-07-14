# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Property.delete_all
User.delete_all

demo_user = User.create!(
    email:'demo_user@yillow.com',
    password: 'password12345',
    username: 'demo_user'
)

u1 = User.create!(
  email: 'charles@xpeople.com',
  password: 'charles39451',
  username: 'prof_x'
)

u2 = User.create!(
    email: 'wendy@neverland.com',
    password: 'wendy39451',
    username: 'wendy_darling'
)

u3 = User.create!(
    email: 'willy@chocolate.com',
    password: 'willy39451',
    username: 'oompa_loompa_lover'
)

p1 = Property.create!(
    latitude: 37.783839,
    longitude: -122.397033,
    address: "170 Hawthorne St #2912",
    city_or_town: "San Francisco",
    county: "San Francisco",
    state: "CA",
    postal_code: "94107",
    area_in_sqft: "1044",
    lot_in_sqft: "1044",
    status: "For Rent",
    no_bathrooms: 2,
    no_bedrooms: 2,
    summary: "Discover the best of San Francisco, with this two-bedroom SoMa apartment. It'll be easy to simply show up and start living in this beautifully Blueground furnished apartment with its fully-equipped kitchen, spacious living room, and our dedicated, on-the-ground support. Designed With You In Mind As with any Blueground apartment, you'll find a thoughtfully designed space complete with beautiful furniture and a fully-equipped kitchen in this two-bedroom property. And, thanks to our superior quality mattresses, luxury linens, and towels, you can relax knowing you'll always feel comfortably at home. When you're ready for some fun, you can take in the San Francisco vibes or bring the entertainment to you with the premium wireless speaker or smart TV. This apartment also offers in-apartment laundry. The entire apartment is yours to enjoy! You'll either be personally greeted by a Blueground team member or given self check-in instructions. Throughout your stay, you'll have access to our Client Experience team through the Blueground App. You can schedule additional cleanings, submit maintenance requests, and view our neighborhood recommendations with just a few taps. We'll share all details upon confirmation of your stay. Ideally Located This furnished apartment is located in South of Market, known as SoMa. A trendy, urban district, famous for its excellent art and museum scene. Home to a diverse mix of entrepreneurs and young families, this neighborhood offers hip bars, fine dinings and delicious coffee. Don't miss the plethora of museums, including a visit to the San Francisco Modern Museum of Art. Baseball lovers frequently visit SoMa as it is also home to the San Francisco Giants. A few things to note This Blueground apartment can be booked for a minimum of one month, to a year or more. Our pet policy outlines the weight limit and breed restrictions, along with related fees. Parking is offered based on availability and is subject to a fee.",
    price: 4890,
    year_built: "2017",
    hoa_monthly_fee: 0,
    heating: "None",
    cooling: "None",
    parking_details: "1 space",
    housing_type: "Multi Family",
    user_id: u1.id
)

p2 = Property.create!(
    latitude: 37.785278,
    longitude: -122.435813,
    address: "2000 Post St",
    city_or_town: "San Francisco",
    county: "San Francisco",
    state: "CA",
    postal_code: "94115",
    area_in_sqft: "475",
    lot_in_sqft: "475",
    status: "For Rent",
    no_bathrooms: 1,
    no_bedrooms: 1,
    summary: "2000 Post features stylish studio, one, and two bedroom apartments with sophisticated amenities in desirable Lower Pacific Heights. 2000 Post boasts remarkable amenities and luxury apartments in San Francisco's Pacific Heights neighborhood. Take advantage of newly remodeled apartment homes which feature granite countertops, stainless steel and black appliances, and updated cabinetry. Enjoy nine foot ceilings, walk-in closets, expansive bay windows, and thoughtful finishes. Now offering furnished and unfurnished apartments, this San Francisco apartment community features world-class amenities including a lush garden, swimming pool, sauna, and fitness center. Located in the lower Pacific Heights neighborhood, 2000 Post apartments provide close proximity to bus transit and the 101 and 80 Freeways. Our Pacific Heights apartments are close to several prestigious schools as well as a myriad of shops and restaurants on Fillmore Street and nearby Japan Town. Visit 2000 Post today for a personalized tour and experience the best blend of luxury and convenience in desirable San Francisco.",
    price: 3206,
    hoa_monthly_fee: 0,
    heating: "None",
    cooling: "None",
    housing_type: "Studio",
    user_id: u1.id
)

p3 = Property.create!(
    latitude: 37.789124,
    longitude: -122.484881,
    address: "10 Sea Cliff Ave",
    city_or_town: "San Francisco",
    county: "San Francisco",
    state: "CA",
    postal_code: "94121",
    area_in_sqft: "3420",
    lot_in_sqft: "3484",
    status: "For Sale",
    no_bathrooms: 4,
    no_bedrooms: 4,
    summary: "Nestled in San Francisco's most desirable oceanfront enclave, this classic 1920's Sea Cliff residence features a beautiful street presence, great architectural detailing and sweeping views of the Golden Gate Bridge, Baker Beach, Presidio National Park, the Marin Headlands and the dazzling waters of the Pacific Ocean... enjoy a fabulous beachfront lifestyle just a short drive away from the City's booming tech and finance hubs, as well as easy access to Silicon Valley!",
    price: 10980000,
    year_built: "1915",
    parking_details: "5 spaces",
    housing_type: "Multi Family",
    user_id: u2.id
)

p4 = Property.create!(
    latitude: 37.761678,
    longitude: -122.44484,
    address: "4475 17th St",
    city_or_town: "San Francisco",
    county: "San Francisco",
    state: "CA",
    postal_code: "94114",
    area_in_sqft: "1360",
    lot_in_sqft: "2613",
    status: "Sold",
    no_bathrooms: 2,
    no_bedrooms: 3,
    summary: "Light and bright 2-level home, located near the geographical center of the city. Greenery abounds in landscaped front and rear garden. Two bedrooms on main floor, living room with wood burning fireplace, formal dining area, gourmet kitchen, full bath with skylight. Deck with stunning views opens from LR/Dining Area. Bonus master suite on lower level opens to 2nd deck with hot tub. Sub-basement opens to secluded garden. Garage with 1 car parking and full-sized washer and dryer. Recessed lighting, hardwood floors, great views and an open flow give this home a great energy for entertaining, as well as providing multiple bonus areas for creative living use.",
    price: 400000,
    year_built: "1951",
    year_major_remodel: "2002",
    parking_details: "Attached Garage",
    housing_type: "Single Family",
    user_id: u3.id
)

p5 = Property.create!(
    latitude: 37.754236,
    longitude: -122.428005,
    address: "1050 Church St",
    city_or_town: "San Francisco",
    county: "San Francisco",
    state: "CA",
    postal_code: "94114",
    area_in_sqft: "1700",
    lot_in_sqft: "4112",
    status: "For Sale",
    no_bathrooms: 2,
    no_bedrooms: 4,
    summary: "This location is hard to beat! Situated in the highly coveted Noe Valley, just blocks to the quaint 24th St & Dolores Park. The neighborhood is beaming w/ an extensive array of restaurants, cafes, book stores, & farmer's market. 95 Walk Score & multiple transit options including Muni & Bart. The interior presents traditional charm & stunning views. The home is tucked away from the street w/ a security gate providing additional privacy. Main living space - spacious living room w/ crown molding & fireplace, and a formal dining room accessing the large kitchen. Kitchen is equipped w/ gas range & door to the private backyard. Each level features 2bd/1ba. One of the upper level bedrooms features access to backyard. RARE detached 3-car garage w/ access through private street. Amenities include hardwood floors, inside laundry & central forced heat. This property presents multiple options - purchasing as an investment property, renovation to flip, or blank canvas to build your dream home!",
    price: 1998000,
    year_built: "1950",
    parking_details: "Detached Garage",
    housing_type: "Single Family",
    user_id: u3.id
)

p6 = Property.create!(
    latitude: 37.775167, 
    longitude: -122.424491,
    address: "325 Octavia St",
    city_or_town: "San Francisco",
    county: "San Francisco",
    state: "CA",
    postal_code: "94102",
    area_in_sqft: "646",
    lot_in_sqft: "646",
    status: "For Rent",
    no_bathrooms: 1,
    no_bedrooms: 1,
    summary: "This location is hard to beat! Situated in the highly coveted Noe Valley, just blocks to the quaint 24th St & Dolores Park. The neighborhood is beaming w/ an extensive array of restaurants, cafes, book stores, & farmer's market. 95 Walk Score & multiple transit options including Muni & Bart. The interior presents traditional charm & stunning views. The home is tucked away from the street w/ a security gate providing additional privacy. Main living space - spacious living room w/ crown molding & fireplace, and a formal dining room accessing the large kitchen. Kitchen is equipped w/ gas range & door to the private backyard. Each level features 2bd/1ba. One of the upper level bedrooms features access to backyard. RARE detached 3-car garage w/ access through private street. Amenities include hardwood floors, inside laundry & central forced heat. This property presents multiple options - purchasing as an investment property, renovation to flip, or blank canvas to build your dream home!",
    price: 3290,
    parking_details: "None",
    housing_type: "Apartment",
    user_id: u1.id
)

# template = Property.create!(
#     :latitude:,
#     :longitude:,
#     :address:,
#     :city_or_town:,
#     :county:,
#     :postal_code:,
#     :area_in_sqft:,
#     :lot_in_sqft:,
#     :status:,
#     :no_bathrooms:,
#     :no_bedrooms:,
#     :summary:,
#     :price:,
#     :year_built:,
#     :year_major_remodel:,
#     :hoa_monthly_fee:,
#     :heating:,
#     :cooling:,
#     :parking_details:,
#     :housing_type:
# )

p1.photo.attach(io: open("https://active-storage-yillow-dev.s3-us-west-1.amazonaws.com/1.webp"), filename: "1-1.webp")
p2.photo.attach(io: open("https://active-storage-yillow-dev.s3-us-west-1.amazonaws.com/2.jpg"), filename: "2-1.webp")
p3.photo.attach(io: open("https://active-storage-yillow-dev.s3-us-west-1.amazonaws.com/4-1.webp"), filename: "3-1.webp")
p4.photo.attach(io: open("https://active-storage-yillow-dev.s3-us-west-1.amazonaws.com/2.webp"), filename: "4-1.webp")


