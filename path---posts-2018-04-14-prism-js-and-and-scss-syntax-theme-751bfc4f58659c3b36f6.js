webpackJsonp([90698680116035],{343:function(a,s){a.exports={data:{markdownRemark:{id:"/Users/christophermarlow/Projects/cmarlow-static/posts/2018-04-14 prismJS and and scss syntax theme.md absPath of file >>> MarkdownRemark",html:'<p>I wanted to add compile-time syntax highlighting to the code sections of this blog today, so I took a look around.</p>\n<p>I was already using gatsby-transformer-remark for markdown to HTML conversion of blog posts, so I needed to add a plugin that would parse my code blocks into styleable html. Enter the handy Gatsby plugin <a href="https://github.com/chasm/gatsby-remark-prismjs">gatsby-remark-prismjs</a>, it was super simple to configure for use with gatsby-transformer-remark. I only needed to add it as a plugin in my Gatsby config</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// In your gatsby-config.js change this simple include:</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token string">\'gatsby-transformer-remark\'</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// to this \'configured\' include:</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token string">\'gatsby-transformer-remark\'</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">\'gatsby-remark-prismjs\'</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<h3>Congatulations, you now have annotated, but unstyled, code blocks.</h3>\n<p>Now we need to include some CSS to apply some colors to our marked-up syntax. PrismJS has <a href="https://github.com/PrismJS/prism-themes">plenty of excellent, standard themes</a>, but I wanted some simpler. It needed to be easily readable without being too jarring or removed from the style and theme of this site, so I looked around for something simple to extend.</p>\n<p><a href="https://github.com/MoOx/sass-prism-theme-base"><code class="language-text">MoOx/sass-prism-theme-base</code></a> by<a href="https://github.com/MoOx">MoOx</a> was a great base to build off of. The repo wasn\'t easily consumable by yarn, so I copied the <code class="language-text">_prism.scss</code> and <code class="language-text">s.scss</code> into my project to be used there. I may need to investigate sharing a variant of a base SASS PrismJS theme, as that\'s exactly what I was looking for.</p>\n<p>I created a base <code class="language-text">_syntax-theme.scss</code> file to contain my variables and setting overrides, it looks a little like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sass"><code class="language-sass"><span class="token comment">// _syntax-theme.scss</span>\n<span class="token variable-line"><span class="token variable">$code</span><span class="token punctuation">:</span>     #454390;</span>\n<span class="token variable-line"><span class="token variable">$value</span><span class="token punctuation">:</span>    #e6d06c;</span>\n<span class="token variable-line"><span class="token variable">$keyword</span><span class="token punctuation">:</span>  #f12769;</span>\n<span class="token variable-line"><span class="token variable">$operator</span><span class="token punctuation">:</span> #f00;</span>\n<span class="token variable-line"><span class="token variable">$subtle</span><span class="token punctuation">:</span>   #aaa;</span>\n<span class="token variable-line"><span class="token variable">$comment</span><span class="token punctuation">:</span>  #999;</span>\n\n<span class="token variable-line"><span class="token variable">$code-color</span><span class="token punctuation">:</span>         <span class="token variable">$code</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-fade</span><span class="token punctuation">:</span>    <span class="token variable">$subtle</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-comment</span><span class="token punctuation">:</span> <span class="token variable">$comment</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-keyword</span><span class="token punctuation">:</span> <span class="token variable">$keyword</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-value</span><span class="token punctuation">:</span>   <span class="token variable">$code</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-string</span><span class="token punctuation">:</span>  <span class="token variable">$value</span>;</span>\n\n<span class="token variable-line"><span class="token variable">$code-tab-size</span><span class="token punctuation">:</span>      2;</span>\n<span class="token variable-line"><span class="token variable">$code-font-size</span><span class="token punctuation">:</span> \t   18px;</span>\n<span class="token variable-line"><span class="token variable">$code-line-height</span><span class="token punctuation">:</span>\t 1.7;</span>\n\n<span class="token atrule-line"><span class="token atrule">@import</span> "prism";</span></code></pre>\n      </div>\n<p>I hope this quick explanation helps get some more people out there blogging about code.</p>\n<p>Later!</p>',frontmatter:{date:"April 14, 2018",path:"/posts/2018-04-14 prismJS and and scss syntax theme",title:"Custom syntax highlighting for Gatsby"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-2018-04-14-prism-js-and-and-scss-syntax-theme-751bfc4f58659c3b36f6.js.map