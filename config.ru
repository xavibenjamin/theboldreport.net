require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
require 'rack/rewrite'

use Rack::Rewrite do
  r302 '/atom.xml', 'http://feedpress.me/theboldreport', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress'
  }
  r302 '/atom.articles.xml', 'http://feedpress.me/theboldreport-articles', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress'
  }
end

use Rack::TryStatic,
  :root => "_site",
  :urls => %w[/],
  :try => ['.html', 'index.html', '/index.html'],
  header_rules: [
    [['html'],  { 'Content-Type'  => 'text/html; charset=utf-8', 'Cache-Control' => 'public, max-age=31536000', 'Vary' => 'Accept-Encoding' }],
    [['css'],   { 'Content-Type'  => 'text/css' }],
    [['js'],    { 'Content-Type'  => 'text/javascript' }],
    [['png'],   { 'Content-Type'  => 'image/png' }],
    ['/assets', { 'Cache-Control' => 'public, max-age=31536000', 'Vary' => 'Accept-Encoding' }],
    ['/js', { 'Cache-Control' => 'public, max-age=604800', 'Vary' => 'Accept-Encoding' }],
  ]

run Rack::NotFound.new('_site/404/index.html')
