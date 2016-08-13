## ==============================================
## DEPENDENCIES
## ==============================================
require 'fileutils'
require 'html-proofer'
require 'rake'
require 'rbconfig'
require 'yaml'


## ==============================================
## CONFIGURATION
## ==============================================

## Default Task ------------------
task :default => :pub

## Config File -------------------
CONFIG = YAML.load_file("_config.yml")

## Date --------------------------
DATE = Time.now.strftime("%Y-%m-%d")

## Directories -------------------
POSTS = "_posts"
DRAFTS = "_drafts"

## ==============================================
## TASKS
## ==============================================

## rake publish ------------------
desc "Move a post from _drafts to _posts"
task :pub do
  extension = CONFIG["post"]["extension"]
  files = Dir["#{DRAFTS}/*.#{extension}"]
  files.each_with_index do |file, index|
    puts "#{index + 1}: #{file}".sub("#{DRAFTS}/", "")
  end
  print "> "
  number = $stdin.gets
  if number =~ /\D/
    filename = files[number.to_i - 1].sub("#{DRAFTS}/", "")
    FileUtils.mv("#{DRAFTS}/#{filename}", "#{POSTS}/#{DATE}-#{filename}")
    puts "#{filename} was moved to '#{POSTS}'."
  else
    puts "Please choose a draft by the assigned number."
  end
end

## assets:precompile -------------
namespace :assets do
  task :precompile do
    puts `bundle exec jekyll build --config _config_production.yml`
  end
end

## ==============================================
## TESTING
## ==============================================

desc "build and test website"
task :test do
  sh "bundle exec jekyll build --config _config_production.yml"
  HTMLProofer.check_directory("./_site", {
    :assume_extension => true,
    :empty_alt_ignore => true,
    :url_ignore       => ['http://localhost:4000']
  }).run
end

