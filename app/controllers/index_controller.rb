class IndexController < ApplicationController
  def index
    render file: 'public/dist/index.html'
  end
end