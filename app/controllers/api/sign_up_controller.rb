class Api::SignUpController < ApplicationController
    def sign_up
        user = User.find_by(email: sign_up_params['email'])
    
        if user
            render json: {
              message: "Este usuario ya existe ",
              field: 'email'
            }, status: :unprocessable_entity
        else
            user = User.create(sign_up_params)
            bypass_sign_in user
            render json: {
              redirect: home_path,
            }, status: :created
        end
    end

    private

    def sign_up_params
        params.require(:user).permit(:email, :password)
    end
end
