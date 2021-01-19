class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null:false
      t.integer :stocks_id, null:false
      t.string :num_shares

      t.timestamps
    end
    add_index :portfolios, :user_id
    add_index :portfolios, :stocks_id
  end
end
