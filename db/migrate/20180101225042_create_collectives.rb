class CreateCollectives < ActiveRecord::Migration[5.1]
  def change
    create_table :collectives do |t|
      t.string :name, index: true
      t.string :description, index: true, using: :gin
      t.datetime :deleted_at
      t.boolean :is_active
      t.text :long_description
      t.string :image
      t.string :slug, index: true
      t.string :website
      t.string :twitter_handle
      t.string :mission
      t.string :background_image
      t.boolean :is_supercollective
      t.jsonb :data
      t.string :currency
      t.string :tags, array: true, index: true, using: :gin
      t.string :organization_type

      t.timestamps
    end
  end
end
