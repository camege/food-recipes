# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_19_092735) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.text "review", null: false
    t.text "address", null: false
    t.string "image", default: "https://www.politico.com/dims4/default/47f6b26/2147483647/strip/true/crop/900x489+0+0/resize/1260x684!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F29%2F05%2Fe945c6e846bdb60718be43210f7e%2Frestaurant-nyc.jpg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
