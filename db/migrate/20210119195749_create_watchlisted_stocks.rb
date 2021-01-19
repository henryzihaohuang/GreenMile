class CreateWatchlistedStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlisted_stocks do |t|
      t.integer :stocks_id, null:false
      t.integer :watchlist_id, null:false

      t.timestamps
    end
    add_index :watchlisted_stocks, :stocks_id
    add_index :watchlisted_stocks, :watchlist_id
  end
end
