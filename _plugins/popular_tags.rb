module Jekyll
  class PopularTags < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      tags = context.registers[:site].tags

      html = '<ul class="post-list">'
      sorted = tags.sort_by { |_t, posts| -posts.count }
      sorted[0, 10].each do |t, posts|
        slug = t.downcase.strip.tr(' ', '-')
        html << "<li><a href='/topics/##{slug}'>#{t}</a> (#{posts.count})</li>"
      end
      html << '</ul>'

      html
    end
  end
end

Liquid::Template.register_tag('popular_tags', Jekyll::PopularTags)
