class Api::SignInController < ApplicationController
    def sign_in
        user = User.find_by(email: sign_in_params['email'])
    
        if !user
          render json: {
            message: "usuario no existe",
            field: 'email'
          }, status: :unprocessable_entity
        elsif user.valid_password?(sign_in_params['password'])
          bypass_sign_in user
          render json: {
            redirect: home_path,
          }, status: :accepted
        else
          render json: {
            message: "contraseña inválida",
            field: 'password'
          }, status: :unprocessable_entity
        end
    end

    private

    def sign_in_params
        params.require(:user).permit(:email, :password)
    end
end
