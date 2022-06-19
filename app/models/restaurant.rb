class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :review, presence: true
  validates :address, presence: true
end
