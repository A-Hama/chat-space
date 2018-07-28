json.array! @users do |user|
  unless user.name == current_user.name
    json.name user.name
  end
    json.id user.id
end
