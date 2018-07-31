# config valid only for current version of Capistrano
lock '3.11.0'

set :application, 'chat-space'
set :repo_url,  'git@github.com:A-Hama/chat-space.git'
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :rbenv_type, :user
set :rbenv_ruby, '2.4.2'

set :ssh_options, auth_methods: ['publickey'],
                  keys: ['/Users/akihito/.ssh/chat_space_dev.pem']

set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }
set :keep_releases, 5

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end