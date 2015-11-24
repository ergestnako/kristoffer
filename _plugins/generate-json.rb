require 'json'

module Jekyll

  class JSONPostGenerator < Generator
    safe true

    def generate(site)

      site.posts.each do |post|
        render_json(post,site)
      end

      site.pages.each do |page|
        render_json(page,site)
      end

      render_combined_json()

    end

    def render_json(post, site)

      # add `json: false` to YAML to prevent JSONification
      if post.data.has_key? "json" and !post.data["json"]
        return
      end

      path = post.destination( "./data" )

      # only act on post/pages index in /index.html
      return if /\/index\.html$/.match(path).nil?

      # change file path
      if path == "./data/index.html"
        path.sub! 'html', 'json'
      else
        path['/index.html'] = '.json'
      end

      print(path + "\n")
      # render post using no template(s)
      # post.render_liquid( {}, site.site_payload)
      #output = post.to_liquid

      # prepare output for JSON
      #post.data["related_posts"] = related_posts(post,site) unless related_posts(post,site).nil?
      output = post.to_liquid

      #output['content'] = post.transform
      output["next"] = output["next"].id unless output["next"].nil?
      output["previous"] = output["previous"].id unless output["previous"].nil?

      # Remove unnecessary things
      output.delete("layout")
      output.delete("path")
      output.delete("resume_email")
      output.delete("dir")
      output.delete("name")
      output.delete("permalink")

      thing = {output["id"] => output}
      # write
      # todo, figure out how to overwrite post.destination so we can just use post.write
      FileUtils.mkdir_p(File.dirname(path))
      File.open(path, 'w') do |f|
        f.write(thing.to_json)
      end

    end

    def render_combined_json
      json = Dir['./data/**/*.json'].reject {|filename| filename == './data/all.json' }.map { |f| JSON.parse File.read(f) }.flatten.reduce(&:merge)
      filepath = './_includes/data/'
      FileUtils.mkdir_p(filepath)
      File.write(filepath + 'all.json', json.to_json)
    end

    def related_posts(post, site)

      related = []
      return related unless post.instance_of?(Post)

      post.related_posts(site.posts).each do |post|
        related.push :url => post.url, :id => post.id, :title => post.to_liquid["title"]
      end

      related

    end

  end

end
