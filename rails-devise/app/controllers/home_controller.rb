class HomeController < ApplicationController
    before_action :authenticate_user!, only: [:protected]

    def index
        render plain: 'hello world'
    end

    def protected
        render plain: 'protected routes'
    end
end
