class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :company_name, null:false, unique: true 
      t.string :abbreviation, null:false, unique: true
      t.timestamps
    end
  end
end

