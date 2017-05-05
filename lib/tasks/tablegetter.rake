desc "Change Chef of the Week"
task tablegetter: :environment do
  puts "CHANGING CHEF"
  Restaurant.change_chef
end
