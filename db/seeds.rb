
puts ".........."
puts ".........."
puts "Cleaning Database"
Airline.destroy_all
Review.destroy_all
puts "Database Clean"
puts "Seeding Database"

airlines = Airline.create([
  {
    name: "United Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  },
  {
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  {
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png"
  },
  {
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png"
  },
  {
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png"
  },
  {
    name: "American Airliens",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png"
  },
])

puts "Airlines Created"

reviews = Review.create([
  {
    title: 'Greate airline',
    description: 'The service was pleasant, had a lovely time!',
    score: 5,
    airline:  airlines.first
  },
  {
    title: 'Not my cup of tea',
    description: 'The service was unpleasant, I wanted to leave asap.',
    score: 1,
    airline:  airlines.first
  }
])

puts "Reviews Created"

puts ".........."
puts ".........."
puts ".........."
puts "Successfully seeded!"
