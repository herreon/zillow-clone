class AddState < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :state, :string, null: false
  end
end
