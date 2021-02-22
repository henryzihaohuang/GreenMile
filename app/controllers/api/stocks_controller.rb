class Api::StocksController < ApplicationController

    def index
        @stocks = Stock.all
        render "api/stocks/index"
    end
    
end


