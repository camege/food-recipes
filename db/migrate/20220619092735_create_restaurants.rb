class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null:false
      t.text :review, null:false
      t.text :address, null:false
      t.string :image, default:"https://www.politico.com/dims4/default/47f6b26/2147483647/strip/true/crop/900x489+0+0/resize/1260x684!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F29%2F05%2Fe945c6e846bdb60718be43210f7e%2Frestaurant-nyc.jpg"
      t.timestamps
    end
  end
end
