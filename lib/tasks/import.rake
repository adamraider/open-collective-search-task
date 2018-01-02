require 'csv'

namespace :import do
  task :collectives => :environment do
    # This is not super efficient, due to small initial dataset this is fine. 
    # Optimizations can be made by creating all collectives in one database transaction if quantity of data required it.
    filename = Rails.root.join('db', 'seeds', 'collectives.csv')
      CSV.foreach(filename, headers: true, encoding:'iso-8859-1:utf-8') do |row|
        collective_hash = row.to_hash
        collective_hash["organization_type"] = collective_hash["organization_type"]
        collective_hash.delete("type")
        collective_hash["data"] = JSON.parse(collective_hash["data"]) if collective_hash["data"]
        pp collective_hash
        c = Collective.create!(collective_hash)
      end
  end
end 

