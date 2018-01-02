class CollectivesController < ApplicationController
  def index
    @collectives = Collective.search(query).active.page(page)

    render json: @collectives, each_serializer: CollectiveSerializer, meta: { 
      pagination: { 
        per_page: @collectives.per_page,
        current_page: @collectives.current_page,
        total_pages: @collectives.total_entries,
        total_objects: @collectives.total_entries
      }
    }
  end

  private

  def page
    params[:page] || 1
  end

  def query
    params[:query]
  end
end
