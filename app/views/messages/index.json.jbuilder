json.array! @new_message.each do |message|
  json.user_name    message.user.name
  json.date         message.created_at
  json.text         message.body
  json.image        message.image.url
  json.id           message.id
end

