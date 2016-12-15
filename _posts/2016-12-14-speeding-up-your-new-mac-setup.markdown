---
title: Speeding Up Your New Mac Setup
categories: articles
custom_type: post
tags: [Development, Setup]
date: 2016-12-14 08:43
subtitle: I bought my first new Mac since 2010, and thanks to Past-Tim, it was pretty simple.
---
Past-Me has been a jerk many times. Past-Tim doesn't think about Future-Tim, saving him time, money, and sometimes even heartache. Setting up a new Mac can be a huge pain, and thankfully Past-Me *finally* did something nice for Future-Me.

I left great documentation and resources that helped me get this new machine setup in about thirty minutes. That's *unheard of*. But as with everything, there are still some holes that need patching, so I thought I'd write something up, to document the process even better for next time. After all, Past-Tim is now me.

---

**Important Caveat:** I don't setup new Macs from a backup; I like to start fresh. If you like starting your new Mac from a Time Machine backup, you don't need most—if not all—of this.

---

## Step One: Clone dotfiles Repo

```sh
# First we clone the repo
$ git clone git@github.com:smithtimmytim/dotfiles.git ~/.dotfiles

# Then we run the install script
$ cd .dotfiles
$ script/bootstrap
```

Having `dotfiles` version controlled is awesome, and this is the first machine I setup with them. [The repo](https://github.com/smithtimmytim/dotfiles) comes with [a list of packages and apps to be installed](https://github.com/smithtimmytim/dotfiles/blob/master/Brewfile). When I run the install script that comes with `dotfiles`, it installs [Homebrew](http://brew.sh/), [sets up sensible macOS defaults](https://github.com/smithtimmytim/dotfiles/blob/master/macos/set-defaults.sh), and much more. My vital apps like [1Password](https://1password.com/), [Dropbox](https://www.dropbox.com), [Alfred](https://www.alfredapp.com/), [Hyper](https://hyper.is/), etc, are all installed. Also, because I use [mas](https://github.com/mas-cli/mas)—which you can install via Homebrew—all of my favorite Mac App Store apps are installed too.

You may be asking yourself, how is this possible? In part to `dotfiles`, but the `Brewfile` is where the magic happens. If you're familiar with a `Gemfile`—a `Brewfile` is that, but for Homebrew. It contains a list of the packages and apps I want installed. You can [look at my `Brewfile` here](https://github.com/smithtimmytim/dotfiles/blob/master/Brewfile), and you can [read more about the whole concept on GitHub](https://github.com/Homebrew/homebrew-bundle).

Also, once you clone `dotfiles` you might notice that you can't see it. That's because files that begin with a period are hidden by default. Make those files visible by entering the following command into the terminal:

```sh
$ defaults write com.apple.finder AppleShowAllFiles YES
```

## Step Two: Install Ruby Versions and Gems

```sh
$ rbenv install 2.3.0
$ rbenv install 2.3.1
```

I use [`rbenv`](https://github.com/rbenv/rbenv) to manage my Ruby versions.[^whyrbenv] I don't have to manually set this up, because it's already been done for me with `dotfiles`. At the time of this writing, I'm using Ruby `2.3.0` and `2.3.1`.

[^whyrbenv]: Why `rbenv`? Ruby is a regularly updated language with new features and security patches. Different projects will run different Ruby versions based on the dependencies of the project. Being able to use multiple Ruby versions is important if you work with Ruby. [The `rbenv` `README` is a great resource too](https://github.com/rbenv/rbenv/blob/master/README.md).

Now, let's install the gems I need in each Ruby version:

```sh
$ gem install bundler jekyll rails
```



## Step Three: Clone atom-config Repo

```sh
# First, quit Atom.
# Then remove the current Atom config
$ rm -rf ~/.atom

# Now clone the Atom config from GitHub
$ git clone git@github.com:smithtimmytim/atom-config.git ~/.atom
```

My text editor of choice is [Atom](https://atom.io/). Which still kind of surprises me since I stuck to [Sublime Text](https://www.sublimetext.com/) for so long. Atom is regularly updated, and has a very vibrant community. People continuously make [all sorts of plugins](https://atom.io/packages) for it.

I've seen a lot of people have their Atom config inside their `dotfiles` repo, but I felt like having it as its separate thing and that's worked for me. `atom-config` comes with all the obvious things you'd think would come with a config. I also use [`package-sync`](https://atom.io/packages/package-sync) to get all of my different packages downloaded and installed in no time.

To me, the ease in which I can version control my preferences is a big reason to use Atom. I did check in [my Sublime config](https://github.com/smithtimmytim/sublime-config), but it wasn't as easy to maintain, and it felt dumb to check in all the packages I was using instead of having a simple list of them. It's a nit pick, but it's the type of thing that makes or breaks a developer workflow.

## Step Four: Create new SSH and GPG Keys

You'll need an SSH and GPG key for lots of things, but I primarily use mine for GitHub. Creating a new SSH key is pretty easy. [Here's some documentation on how to do that](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

Now, for the GPG key. This isn't as simple, and honestly I don't know how this works. I did some research on whether you're supposed to create a new GPG key when you move machines or whether you're supposed to migrate them, and was still confused. If you know more information about this, I'd love to [hear from you on Twitter](https://twitter.com/smithtimmytim).

Anyway, first [you need to download the GPG command line tools](https://www.gnupg.org/download/) to create new keys. I download GnuPG for OS X. Once you've done that, you can [follow the steps from the GitHub documentation to create your new key](https://help.github.com/articles/generating-a-new-gpg-key/) and [add it to GitHub](https://help.github.com/articles/adding-a-new-gpg-key-to-your-github-account/).

You might be wondering, what the hell is GPG? Well, that's quite the hefty answer. I found [this page](https://www.gnupg.org/) to be very informative.

## Step Five: Login to 1Password App

I'm shocked at how amazing the setup for this has become. Kelly and I are using [1Password Families](https://1password.com/families/), so setting up the app on a new machine is now as easy as scanning a QR code, inputting my master password, and… that's it. I'm still baffled at how easy it was.

At this point, 1Password is the gate to everything else. Once I have 1Password installed and setup, I now have access to all of my software license codes, website logins, and a whole lot more.

## Step Six: Login to Dropbox App

I run most of my system through Dropbox. I pay for the Pro plan which get's me a terabyte of space. I think the only things I don't have on Dropbox are the sites and projects I work on, because all of that is on GitHub. Doing things this way is pretty convenient, and helps me take all my important files to the new computer.

However, the initial setup of this is not fun. Because Dropbox on the Mac currently downloads all of your files locally, when you first do this, it can take days to sync. This isn't ideal because some files are more important than others at the beginning. I want to have my Alfred preferences, or my Keyboard Maestro macros first. But to do that, I have to go through the nightmare of setting up selective sync and then redoing it once the right files have downloaded. Eventually—who the hell knows when—Dropbox will launch [Project Infinite](https://blogs.dropbox.com/business/2016/04/announcing-project-infinite/) for everyone. That'll solve this problem and more.

All this being said, it doesn't mean you shouldn't have a backup! I use Time Machine to keep backups just in case things get wonky. Dropbox has lost files of mine before, so I like to have a plan b. [The Sweet Setup's advice on this topic](http://thesweetsetup.com/articles/backing-up-your-computer/) is wise.

## Conclusion

In summary, this setup process is pretty awesome. Automating things like this saves so much time, and gets me coding quicker. I'm loving my new Mac, and a large part of it, is that setting it up was headache free. If you decide to use this, I'd love to hear about it! If you need help, don't hesitate to get in touch.

Enjoy your new Mac!
