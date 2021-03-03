class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :abbreviation, null: false
      t.integer :user_id, null: false
      t.integer :shares, null: false
      t.string :order, null: false
      t.float :price, null: false

      t.timestamps
    end
    add_index :transactions, :user_id
  end
end
