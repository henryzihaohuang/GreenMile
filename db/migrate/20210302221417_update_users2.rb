class UpdateUsers2 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :balance, :float, :default => 10000
  end
end
