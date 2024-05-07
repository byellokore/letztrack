json.extract! receipt, :id, :title, :description, :value, :date, :image, :account_id, :created_at, :updated_at
json.url receipt_url(receipt, format: :json)
json.description receipt.description.to_s
