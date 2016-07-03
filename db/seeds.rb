# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Restaurant.create!(name: "Osteria Francescana", chef: "Massimo Bottura", cuisine: "Italian", capacity: 40, description: "A hyper-modern take on classic Italian cuisine")
Restaurant.create!(name: "Blue Hill Restaurant", chef: "Dan Barber", cuisine: "Local Farm to Table - New York", capacity: 100, description: "A farmer's feast of beautiful and respectfully raised local produce")
Restaurant.create!(name: "El Restaurante Patagonia Sur", chef: "Francis Mallman", cuisine: "Argentinian & Patagonian", capacity: 50, description: "A modern haute-cuisine presentation of Patagonia & Argentina's bounty")
Restaurant.create!(name: "N/Naka", chef: "Niki Nakayama", cuisine: "Japanese", capacity: 35, description: "A modern Kaiseki rendition that focuses on a story told through its dishes")
Restaurant.create!(name: "Attica", chef: "Ben Shewry", cuisine: "Australian", capacity: 25, description: "A neo-modern representation of Australia's native ingredients")
Restaurant.create!(name: "Favikan", chef: "Magnus Nilsson", cuisine: "Swedish", capacity: 20, description: "Swedish traditional techniques and local produce combine with modern French techniques to create a unique experience")
Restaurant.create!(name: "Alinea", chef: "Grant Achatz", cuisine: "Modern American", capacity: 16, description: "An experience in modern Art & Food - expect to be shocked and thrilled!")
Restaurant.create!(name: "D.O.M.", chef: "Alex Atala", cuisine: "Brazilian", capacity: 80, description: "A stunning modernist take on traditional Brazilian ingredients and recipes")
Restaurant.create!(name: "Atelier Crenn", chef: "Dominique Crenn", cuisine: "French", capacity: 100, description: "A journey through Dominique's life, represented in her beautiful and delicious creations")
Restaurant.create!(name: "Pujol", chef: "Enrique Olivera", cuisine: "Mexican", capacity: 34, description: "Traditional Mexican recipies and techniques transported into the finest modern cuisine")
Restaurant.create!(name: "Hisa Franko", chef: "Ana Ros", cuisine: "Slovenian", capacity: 40, description: "A beautiful transformation of traditional Slovenian fare")
Restaurant.create!(name: "Gaggan", chef: "Gaggan Anand", cuisine: "Indian", capacity: 100, description: "Wonderous Indian dishes based on tradition, but twisted into hyper-modern transformations")

# Restaurant.find_by(name: "The French Laundry").update(lat: 38.404400, lng: -122.364988)
# Restaurant.find_by(name: "Osteria Francescana").update(lat: 44.644807, lng: 10.921578)
# Restaurant.find_by(name: "Blue Hill Restaurant").update(lat: 40.732034, lng: -73.999707)
# Restaurant.find_by(name: "El Restaurante Patagonia Sur").update(lat: -34.640204, lng: -58.361744)
# Restaurant.find_by(name: "N/Naka").update(lat: 34.025162, lng: -118.412232)
# Restaurant.find_by(name: "Attica").update(lat: -37.876965, lng: 144.997343)
# Restaurant.find_by(name: "Favikan").update(lat: 63.435305, lng: 13.292890)
# Restaurant.find_by(name: "Alinea").update(lat: 41.913439, lng: -87.647905)
# Restaurant.find_by(name: "D.O.M.").update(lat: -23.566303, lng: -46.667427)
# Restaurant.find_by(name: "Atelier Crenn").update(lat: 37.798348, lng: -122.435857)
# Restaurant.find_by(name: "Pujol").update(lat: 19.433636, lng: -99.185494)
# Restaurant.find_by(name: "Hisa Franko").update(lat: 46.247298, lng: 13.537742)
# Restaurant.find_by(name: "Gaggan").update(lat: 13.737738, lng: 100.542076)
