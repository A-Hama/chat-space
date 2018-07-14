class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_paramaters, if: :devise_controller?

  def after_sign_out_path_for(resource)
    '/users/sign_in'
  end

  def after_sign_in_path_for(resource)
    '/'
  end

  private

  def configure_permitted_paramaters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
