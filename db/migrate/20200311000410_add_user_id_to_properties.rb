class AddUserIdToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :user_id, :integer, null: false
    add_index :properties, :user_id
  end

end
