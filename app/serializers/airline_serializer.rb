class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  # by adding attributes to our serializer we can control what we expose to the API
  attributes :name, :image_url, :slug

  has_many :reviews
end
