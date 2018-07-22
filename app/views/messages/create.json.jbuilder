if @message.body.present?
  json.text  @message.body
end
if @message.image.url.present?
  json.image @message.image.url
end
json.user_id  @message.user.id
json.user_name  @message.user.name
json.group_id @message.group.id
json.date @message.created_at

