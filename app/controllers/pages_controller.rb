class PagesController < ActionController::Base
  def index
    render file: "public/dist/index.html" and return
  end
end
