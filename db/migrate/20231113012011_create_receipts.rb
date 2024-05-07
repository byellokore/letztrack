class CreateReceipts < ActiveRecord::Migration[7.1]
  def change
    create_table :receipts do |t|
      t.string :title
      t.numeric :value, precision: 10, scale: 2
      t.date :date
      t.binary :image
      t.references :account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
