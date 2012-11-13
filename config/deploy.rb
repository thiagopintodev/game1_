require "bundler/capistrano"
require "capistrano_colors" # Color capistrano output for readability

%w[base database nginx unicorn db_backups].each do |recipe|
  load "config/recipes/#{recipe}"
end



# =============================================================================
# OPTIONAL VARIABLES
# =============================================================================
# ssh related
set :user, "deployer"
set :deploy_via, :remote_cache
set :use_sudo, false
# git related
set :scm, "git"
#multi-env related
set :application_name, 'game1'

# =============================================================================
# REQUIRED VARIABLES
# =============================================================================
set :repository, "git@github.com:yakko/#{application_name}.git"

# =============================================================================
# ROLES
# =============================================================================
server_ip = "yakko.me"
role :web, server_ip                 # Your HTTP server, Apache/etc
role :app, server_ip                 # This may be the same as your `Web` server
role :db,  server_ip, primary: true  # This is where Rails migrations will run
#role :db,  "slave"








task :production do
  set :my_rails_env, 'production'
  #required var
  set :application, "#{application_name}_#{my_rails_env}"
  set :deploy_to, "/home/#{user}/apps/#{application}"
  set :branch, 'master'
  set :server_names,  'game.yakko.me'             # used in unicorn
  set :server_name,   server_names.split(' ').first  # used in the app where there's no request object
end

task :check do
  puts "CHECK: #{application}"
end






default_run_options[:pty] = true
ssh_options[:forward_agent] = true







# before "deploy",            "deploy:check_revision" #see recipes/base
# before "deploy:migrations", "deploy:check_revision"
# before "deploy:cold",       "deploy:check_revision"
# before "deploy:setup",      "deploy:check_revision"


after 'deploy:setup', 'nginx:setup'   #see recipes/nginx
after "deploy:setup", "unicorn:setup" #see recipes/unicorn
after "deploy", "deploy:cleanup"      # keep only the last 5 releases

after "deploy:finalize_update", "database:override_database_yml" #see recipes/database