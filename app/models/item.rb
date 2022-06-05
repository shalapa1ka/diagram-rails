class Item < ApplicationRecord
  validates :name, :percent, presence: true
end