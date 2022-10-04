# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
require 'faker'


puts "roll it up"

User.destroy_all

puts "Gathering some people"
25.times do u = User.create!(username: Faker::Internet.username, name: Faker::TvShows::DrWho.character, password: "password", email: Faker::Internet.email)
puts u.errors.full_messages

end

Follow.destroy_all
puts "seeding follows"
30.times do Follow.create(follower_id: rand(1..15), followed_user_id: rand(1..15))
end

puts "done"