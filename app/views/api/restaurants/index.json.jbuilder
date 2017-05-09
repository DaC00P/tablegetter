json.array! @restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.chef restaurant.chef
  json.chef_pic_url restaurant.chef_pic_url
  json.cuisine restaurant.cuisine
  json.description restaurant.description
  json.lat restaurant.lat
  json.lng restaurant.lng
  json.capacity restaurant.capacity
  json.created_at restaurant.created_at
  json.reviews restaurant.reviews
  json.restaurant_pics restaurant.restaurant_pics
  json.restaurant_cover_pic restaurant.restaurant_cover_pic
  json.city restaurant.city
  json.chef_of_the_week restaurant.chef_of_the_week
end
