require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
require 'rack/rewrite'

use Rack::Rewrite do
  r302 '/atom.xml', 'http://feedpress.me/theboldreport', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress' || 'FeedValidator'
  }
  r302 '/atom.articles.xml', 'http://feedpress.me/theboldreport-articles', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress' || 'FeedValidator'
  }
end

use Rack::TryStatic,
  :root => "_site",
  :urls => %w[/],
  :try => ['.html', 'index.html', '/index.html']

run Rack::NotFound.new('_site/404/index.html')
