---
id: posts/2019-12-16 vim plugins are just dotfiles
path: /posts/2019-12-16 vim plugins are just dotfiles
date: 2019-12-16
title: Vim plugins are just dotfiles
---

There sometimes seems to be a perception that Vim plugins are all heavy, or somehow having a .vimrc or init.vim free of plugins is somehow perferable. I'd like to clear some things up by demonstrating that Vim plugins are simply regular dotfiles, just in a different folder (or repo).


## Well, what are dotfiles?

> Dotfiles are plain text configuration files on Unix-y systems... They are called "dotfiles" as they typically are named with a leading `.`
>
> -- Chris and Gave @ Thoughbot


## Vim's configuration

In our context we're referring to our vim's dotfiles, which would be at `~/.config/vim/vimrc` (or `~/.config/nvim/init.vim` if you're using [Neovim](https://neovim.io/)). However there are more to vim's configuration than just the initial config entry file.

Vim has more than just the `rc` or `init` entry point files though, there are a lot of other autoloaded folders and ways of loading configuration.


## Autoload folders

There are several folders that are automatically loaded by vim

- `ftdetect` run every time a new file of the filetype is loaded to dynamically detect and set the filetype
- `ftplugin` run everytime for a given filetype (not by filename)
- `plugins` always loaded when vim is loaded
- `...` others....

There sometimes seems to be a perception that Vim plugins are all heavy, or somehow having a `.vimrc` or `init.vim` free of plugins is somehow perferable. I'd like to clear some things up by demonstrating that Vim plugins are simply regular dotfiles, just in a different folder (or repo).


## Let's create a super-basic plugin!

Let's create a plugin for editing markdown, we can start in our local dotfiles folder so navigate there (it's likely `~/.config/vim/` or `~/config/nvim/` if you're using Neovim, you'll need to create it if it doesn't exist).

Now let's create a `markdown.vim` to add behaviour to files using the markdown filetype. For this file to be autoloaded by Vim, we'll need to put it in Vim's `ftplugin` folder and make sure that our filename matches the filetype we want to extend. Now we can add some simple key-bindings:

```vim
" ~/.config/nvim/ftplugin/markdown.vim
" Up/Down to navigate between headings (by searching for lines starting w/ 1+ "#")
nnoremap <Up> ?^#\+<cr>
nnoremap <Down> /^#\+<cr>
```


## Close and reopen Vim to make sure it works 🤞

If all went well, we should be able to jump between markdown headings with the arrow keys now! Now let's create a new repo so we've got a _real_ real plugin, just like [tpope](https://github.com/tpope) or [junegunn](https://github.com/junegunn)!

```sh
cd /path/to/your/projects
mkdir markdown-navigator/
cd markdown-navigator/
git init
```

Now we have somewhere to put our vim plugin, so let's repeat what we did in our local dotfiles repo:

- Create an `ftplugin` folder
- Create a `markdown.vim` file in that folder
- Commit and push the changes to github (or wherever you host your code.)

```vim
" ./ftplugin/markdown.vim
" Up/Down to navigate between headings (by searching for lines starting with #s)
nnoremap <Up> ?^#\+<cr>
nnoremap <Down> /^#\+<cr>
```

then save and push those changes:

```sh
git add .
git commit -m 'Adds header navigation for markdown filetypes'
# obvs use your repo here... 🕵
git remote add origin https://github.com/perrupa/markdown-navigator.vim
git push origin master
```

To make sure the changes come from our plugin, we should make sure to delete the test code we wrote in our dotfiles. Please be sure to go back and delete the `~/.config/vim/ftplugin/markdown.vim` file we created and restart vim to make sure we don't still have those mappings sticking around.

At this point, you should be able to install your minimal plugin with your favourite plugin manager. I use [vim-plug](https://github.com/junegunn/vim-plug), it's always worked great for me but you might prefer another.

```vim
" ~/.config/vim/vimrc
" ...

call plug#begin('~/.vim/bundle')
  " Other plugins...

  " Your GH repo for the plugin here 👇
  Plug 'perrupa/markdown-navigator.vim'
call plug#end()
```

Make sure to source your vimrc file, or restart vim, then run `:PlugInstall` and you should see your plugin included with any other plugins you had added recently.

By this point you should be cheering because you just created your very first Vim plugin! Now you can take all those neat tricks, custom command wrappers, domain-specific scripts or plugin-implementations you created in your dotfiles and share them with the world (or at least your coworkers)!

I've thrown up a tiny example of [the markdown-navigator.vim plugin](https://github.com/perrupa/markdown-navigator.vim) on my [Github account](https://github.com/perrupa/) for those who want to test it before creating their own.
