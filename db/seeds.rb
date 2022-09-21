# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
require 'faker'


puts "roll it up"

User.destroy_all

puts "Gathering some peeps"
5.times do User.create(username: Faker::Internet.username, name: Faker::TvShows::DrWho.character, bio: Faker::GreekPhilosophers.quote, admin: false, password_digest: rand(1..100), email: Faker::Internet.email)
end
puts "Got the geeks"

Follow.destroy_all
puts "we're following the leader 🎶"
2.times do Follow.create(follower_id: rand(1..5), followed_user_id: rand(1..5))
end

puts "done"