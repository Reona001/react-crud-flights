class Airline < ApplicationRecord
  has_many :reviews
  # This method takes the name of the airline and slugifies it.
  # Parameterize changes string to a url safe format like "united-airlines"
  # Slugify is called before we save to the database so we use a before create callback
  before_create :slugify


  def slugify
    self.slug = name.parameterize
  end
end
