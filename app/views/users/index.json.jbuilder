json.array! @users do |user|
  unless user.name == current_user.name
    json.name user.name
    json.id user.id
  end
end
