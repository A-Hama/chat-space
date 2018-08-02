before_exec do |server|
  ENV["BUNDLE_GEMFILE"] = "/var/www/chat-space/current/Gemfile"
end

server '13.115.198.80', user: 'ec2-user', roles: %w{app db web}
