json.array! @new_messages.each do |message|
  json.user_name    message.user.name
  json.date         message.created_at
  json.text         message.body
  json.image        message.image.url
  json.id           message.id
end

