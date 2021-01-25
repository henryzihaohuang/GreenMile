class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:show]

    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            login!(@user)
            render :show
        else
            
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end
    

    private 
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
