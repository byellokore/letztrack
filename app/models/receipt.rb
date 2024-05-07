class Receipt < ApplicationRecord
  include AccountScoped

  belongs_to :account
  has_rich_text :description

  validates :title, :date, :value, presence: true
end
