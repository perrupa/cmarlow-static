---
id: posts/2018-04-14 prismJS and and scss syntax theme
path: /posts/2018-04-14 prismJS and and scss syntax theme
date: 2018-04-14
title: Custom syntax highlighting for Gatsby
---

I wanted to add compile-time syntax highlighting to the code sections of this blog today, so I took a look around.

I was already using gatsby-transformer-remark for markdown to HTML conversion of blog posts, so I needed to add a plugin that would parse my code blocks into styleable html. Enter the handy Gatsby plugin [gatsby-remark-prismjs](https://github.com/chasm/gatsby-remark-prismjs), it was super simple to configure for use with gatsby-transformer-remark. I only needed to add it as a plugin in my Gatsby config

```js
// In your gatsby-config.js change this simple include:
plugins: [
  'gatsby-transformer-remark'
]

// to this 'configured' include:
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [ 'gatsby-remark-prismjs' ]
    }
  }
]
```

### Congratulations, you now have annotated, but unstyled, code blocks.

Now we need to include some CSS to apply some colors to our marked-up syntax. PrismJS has [plenty of excellent, standard themes](https://github.com/PrismJS/prism-themes), but I wanted some simpler. It needed to be easily readable without being too jarring or removed from the style and theme of this site, so I looked around for something simple to extend.

[`MoOx/sass-prism-theme-base`](https://github.com/MoOx/sass-prism-theme-base) by [MoOx](https://github.com/MoOx) was a great base to build off of. The repo wasn't easily consumable by yarn, so I copied the `_prism.scss` for the base styles into my project to be used there. I may need to investigate sharing a variant of a base SASS PrismJS theme, as that's exactly what I was looking for.

I created a base `_syntax-theme.scss` file to contain my variables and setting overrides, it looks a little like this:

```sass
// _syntax-theme.scss
$code:     #454390;
$value:    #e6d06c;
$keyword:  #f12769;
$operator: #f00;
$subtle:   #aaa;
$comment:  #999;

$code-color:         $code;
$code-color-fade:    $subtle;
$code-color-comment: $comment;
$code-color-keyword: $keyword;
$code-color-value:   $code;
$code-color-string:  $value;

$code-tab-size:      2;
$code-font-size: 	   18px;
$code-line-height:	 1.7;

@import "prism";
```

I hope this quick explanation helps get some more people out there blogging about code.

Later!
