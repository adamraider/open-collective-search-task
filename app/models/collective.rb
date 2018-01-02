class Collective < ApplicationRecord
  scope :active, -> { where(is_active: true) }
  self.per_page = 8
  
  include PgSearch
  pg_search_scope :pg_search,
    # search ranking
    against: {
      name: 'A',
      tags: 'B',
      description: 'C'
    },
    # use english dictionary for fuzzy matching
    using: {
      tsearch: {
        dictionary: "english"
      }
    }

  def self.search(query)
    if query.present?
      pg_search(query)
    else
      unscoped
    end
  end
end
