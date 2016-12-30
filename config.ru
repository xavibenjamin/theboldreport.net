require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
require 'rack/rewrite'

# Enable Compression
use Rack::Deflater

# Redirecting feeds and http
use Rack::Rewrite do
  r302 '/atom.xml', 'http://feedpress.me/theboldreport', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress'
  }
  r302 '/atom.articles.xml', 'http://feedpress.me/theboldreport-articles', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress'
  }
  r301 %r{.*}, 'https://theboldreport.net$&', :scheme => 'http'
end

# Serving static files
use Rack::TryStatic,
  :root => "_site",
  :urls => %w[/],
  :try => ['.html', 'index.html', '/index.html'],
  :gzip => true,
  header_rules: [
    [:all, {'Cache-Control' => 'public, max-age=86400', 'Vary' => 'Accept-Encoding'}],
    [['css', 'js'], {'Cache-Control' => 'public, max-age=604800'}]
  ]

run Rack::NotFound.new('_site/404/index.html')
