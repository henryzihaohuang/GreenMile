# class Api::StocksController < ApplicationController

#     def index
#         @stocks = Stock.all
#         render "api/stocks/index"
#     end

#     def show
#         @show = Stock.find_by(id:params[:id])

#         @stock ? render "api/stocks/show" : render json: @stock.errors.full_messages, status:401
#     end

    
# end
