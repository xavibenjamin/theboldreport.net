---
layout: post
title: Publishing To Jekyll From iOS
categories: articles
custom_type: post
date: 2016-01-05 01:25
---
I figured out how to publish to *The Bold Report* from iOS! It was quite easy to set up, so I thought I'd share with you how to do it.

----

**Disclaimer:** This method will only work if you have an external build process. If you host your Jekyll site on Github pages, for example, you're good to go. If you'd like to learn how to setup your site to deploy and build on something like Heroku, [I wrote about that](http://theboldreport.net/hosting-a-jekyll-site-on-heroku).

----

The workhorse here is actually [Editorial](https://appsto.re/us/UqWkO.i). If like me, you've heard about this app, but didn't pay much attention to it, [here's a great review](http://thesweetsetup.com/articles/our-favorite-ipad-writing-app/). In short, its quite amazing. 

## Editorial Workflows
The power of Editorial workflows make this all possible. I found a [blog post](http://jwie.be/writing/building-the-newsprint/) that links to [this workflow](http://www.editorial-workflows.com/workflow/5819088383246336/lqX-GDUYaP4). It'll create a post with the right YAML Front Matter. Once youve installed the workflow from inside Editorial, you can make edits so that the Front Matter matches what you need for your site.

Next, we want to create the publishing workflow. Go to the upper right hand corner, tap on the wrench icon, then tap on the plus icon. Add a new action, and choose "Run Python Script." Then, paste the script below. Pay attention to the comments, so you add the necessary information.

```python
# Script from Josiah Wiebe (https://gist.github.com/josiahwiebe)
#coding: utf-8
import keychain
import console
import editor
 
import time
import re
 
import requests
import json
import base64
 
SITE_BRANCH = 'gh-pages' # either master or gh-pages

# Fill this out with your Github info.
COMMITTER = {'name': '$github_username', 'email': '$github_email'}

username = '$github_username'

# You can create a token specific for this workflow
# at https://github.com/settings/tokens
token = '$github_token'
repo = '$github_repo' # Just as it says on the tin. For me it was 'theboldreport.net'

######## No need to edit past this point
post_text = editor.get_text()
 
post_sections = post_text.split('---')
if len(post_sections) > 1:
	yaml_header = post_sections[1].splitlines()
	
  # Find the title in the YAML
	post_title = None
	date = None
	for line in yaml_header:
		if line[:6] == 'title:':
			post_title = line[6:].strip()
		elif line[:5] == 'date:':
			date = line[5:].strip()[:10]
		  
	if post_title:
		safe_title = re.sub('[^a-zA-Z0-9\s]', '', post_title).replace(' ', '-')
		safe_title.replace('--', '-')
		if not date:
			date = time.strftime('%Y-%m-%d', time.gmtime())
    
		post_filename = '_posts/%s-%s.markdown' % (date, safe_title)
		
		URL = 'https://api.github.com/repos/%s/%s/contents/%s' % (username, repo, post_filename)
		
		header = {
			'Authorization': 'token %s' % token,
			'User-Agent': username
		}
		
		get_data = {
			'path': post_filename,
			'ref': SITE_BRANCH
		}
 
		response = requests.get(URL, headers=header, params=get_data)
		response_json = response.json()
 
		if response.status_code == 404:     # File doesn't exist, create it.
			data = {
				'path': post_filename,
				'content': base64.b64encode(post_text),
				'message': 'Blog Post - %s' % post_title,
				'branch': SITE_BRANCH,
				'committer': COMMITTER
			}
 
			response = requests.put(URL, headers=header, data=json.dumps(data))
			
			if response.status_code == 201:
				console.hud_alert("Blog post created successfully.", 'success', 2)
			else:
				console.alert("Commit failed.")
		elif response.status_code == 200:   # File exists, update it.
			data = {
				'path': post_filename,
				'content': base64.b64encode(post_text),
				'message': 'Blog Post - %s' % post_title,
				'branch': SITE_BRANCH,
				'committer': COMMITTER,
				'sha': response_json['sha']
			}
 
			response = requests.put(URL, headers=header, data=json.dumps(data))
			
			if response.status_code == 200:
				console.hud_alert("Blog post updated successfully.", 'success', 2)
			else:
				console.alert("Commit failed.")
		else:                        # Something went wrong!
			console.alert("There was a problem with the server.")
 
	else:
		console.alert("Couldn't find a title.\n\nAction Halted.")
		
else:
	console.alert("No YAML header found.\n\nAction Halted.")
```

And that's it! Create a new post with the first workflow, and publish it with the second one. If you have any issues or have questions, I'm [@ttimsmith](https://twitter.com/ttimsmith) on Twitter. 

Happy blogging!

----
*Btdubs… this post was written completely on my iPad, and i loved every minute of it.*