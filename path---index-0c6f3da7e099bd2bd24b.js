webpackJsonp([0x81b8806e4260],{340:function(s,a){s.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"I wanted to add compile-time syntax highlighting to the code sections of this blog today, so I took a look around. I was already using gatsby-transformer-remark for markdown to HTML conversion of blog posts, so I needed to add a plugin that would…",html:'<p>I wanted to add compile-time syntax highlighting to the code sections of this blog today, so I took a look around.</p>\n<p>I was already using gatsby-transformer-remark for markdown to HTML conversion of blog posts, so I needed to add a plugin that would parse my code blocks into styleable html. Enter the handy Gatsby plugin <a href="https://github.com/chasm/gatsby-remark-prismjs">gatsby-remark-prismjs</a>, it was super simple to configure for use with gatsby-transformer-remark. I only needed to add it as a plugin in my Gatsby config</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// In your gatsby-config.js change this simple include:</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token string">\'gatsby-transformer-remark\'</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// to this \'configured\' include:</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token string">\'gatsby-transformer-remark\'</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">\'gatsby-remark-prismjs\'</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<h3>Congatulations, you now have annotated, but unstyled, code blocks.</h3>\n<p>Now we need to include some CSS to apply some colors to our marked-up syntax. PrismJS has <a href="https://github.com/PrismJS/prism-themes">plenty of excellent, standard themes</a>, but I wanted some simpler. It needed to be easily readable without being too jarring or removed from the style and theme of this site, so I looked around for something simple to extend.</p>\n<p><a href="https://github.com/MoOx/sass-prism-theme-base"><code class="language-text">MoOx/sass-prism-theme-base</code></a> by<a href="https://github.com/MoOx">MoOx</a> was a great base to build off of. The repo wasn\'t easily consumable by yarn, so I copied the <code class="language-text">_prism.scss</code> and <code class="language-text">s.scss</code> into my project to be used there. I may need to investigate sharing a variant of a base SASS PrismJS theme, as that\'s exactly what I was looking for.</p>\n<p>I created a base <code class="language-text">_syntax-theme.scss</code> file to contain my variables and setting overrides, it looks a little like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sass"><code class="language-sass"><span class="token comment">// _syntax-theme.scss</span>\n<span class="token variable-line"><span class="token variable">$code</span><span class="token punctuation">:</span>     #454390;</span>\n<span class="token variable-line"><span class="token variable">$value</span><span class="token punctuation">:</span>    #e6d06c;</span>\n<span class="token variable-line"><span class="token variable">$keyword</span><span class="token punctuation">:</span>  #f12769;</span>\n<span class="token variable-line"><span class="token variable">$operator</span><span class="token punctuation">:</span> #f00;</span>\n<span class="token variable-line"><span class="token variable">$subtle</span><span class="token punctuation">:</span>   #aaa;</span>\n<span class="token variable-line"><span class="token variable">$comment</span><span class="token punctuation">:</span>  #999;</span>\n\n<span class="token variable-line"><span class="token variable">$code-color</span><span class="token punctuation">:</span>         <span class="token variable">$code</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-fade</span><span class="token punctuation">:</span>    <span class="token variable">$subtle</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-comment</span><span class="token punctuation">:</span> <span class="token variable">$comment</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-keyword</span><span class="token punctuation">:</span> <span class="token variable">$keyword</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-value</span><span class="token punctuation">:</span>   <span class="token variable">$code</span>;</span>\n<span class="token variable-line"><span class="token variable">$code-color-string</span><span class="token punctuation">:</span>  <span class="token variable">$value</span>;</span>\n\n<span class="token variable-line"><span class="token variable">$code-tab-size</span><span class="token punctuation">:</span>      2;</span>\n<span class="token variable-line"><span class="token variable">$code-font-size</span><span class="token punctuation">:</span> \t   18px;</span>\n<span class="token variable-line"><span class="token variable">$code-line-height</span><span class="token punctuation">:</span>\t 1.7;</span>\n\n<span class="token atrule-line"><span class="token atrule">@import</span> "prism";</span></code></pre>\n      </div>\n<p>I hope this quick explanation helps get some more people out there blogging about code.</p>\n<p>Later!</p>',id:"/Users/cmarlow/Projects/cmarlow-static/posts/2018-04-14 prismJS and and scss syntax theme.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-04-14T00:00:00.000Z",path:"/posts/2018-04-14 prismJS and and scss syntax theme",title:"Custom syntax highlighting for Gatsby"}}},{node:{excerpt:"Was a dope night. \n \n",html:'<p>Was a dope night.</p>\n<p><img src="/images/2018-01-19-frequencies/1.jpg">\n<img src="/images/2018-01-19-frequencies/2.jpg">\n<img src="/images/2018-01-19-frequencies/3.jpg"></p>',id:"/Users/cmarlow/Projects/cmarlow-static/posts/2018-01-19 Frequencies.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-01-19T00:00:00.000Z",path:"/posts/2018-01-19-Frequencies",title:"Frequencies 2018-01-19"}}},{node:{excerpt:"This is dope. Some really dope stuff coming this way. Elit iusto ipsa debitis perspiciatis elit? Iure quis aliquid architecto totam iusto! Beatae labore ullam facere sapiente aliquid Expedita impedit tempore dolorem quasi quasi omnis Nemo ipsa…",html:'<p>This is dope.</p>\n<p>Some really dope stuff coming this way.</p>\n<p>Elit iusto ipsa debitis perspiciatis elit? Iure quis aliquid architecto totam iusto! Beatae labore ullam facere sapiente aliquid Expedita impedit tempore dolorem quasi quasi omnis Nemo ipsa deserunt nesciunt facere pariatur. Molestiae suscipit ad aut quis sunt. Laudantium exercitationem omnis dolore aspernatur aliquid Molestiae exercitationem harum eaque error vel quas perspiciatis asperiores? Assumenda blanditiis alias nam harum harum. Quos ex accusantium molestias alias reprehenderit autem? Nobis labore iusto aliquam blanditiis tempora? Molestias quasi maxime quisquam culpa sunt, doloremque Sint delectus quisquam accusamus quo sapiente. Necessitatibus minus excepturi pariatur repudiandae dolore Quae in eveniet voluptatum enim iste natus Natus molestias corporis nihil ducimus sapiente. Repellendus earum officiis praesentium sapiente dolores? Iusto sit nisi quae aperiam temporibus vero. Vero nulla ipsum molestiae quis qui.</p>\n<p>Possimus tempora ad consequuntur corporis sed. Omnis accusamus nemo eligendi inventore ipsa. Neque rem incidunt nemo facilis cum dolor? Cum sapiente consequatur fuga eaque sit? Tempora numquam assumenda quisquam quas id, non? Eos aut odit nulla veniam vitae rerum! Iusto repellendus necessitatibus in ducimus quod. Eveniet dolor veritatis dignissimos a deleniti earum libero Ullam ad accusantium adipisci voluptatibus numquam Tempore nostrum ducimus porro inventore iste quisquam Architecto perspiciatis expedita quibusdam sed dicta Obcaecati corporis architecto architecto provident tempora. Culpa commodi ipsum obcaecati praesentium blanditiis, quo Eligendi voluptas excepturi voluptatem dolor quis natus Autem sapiente omnis esse tempora vitae.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * Comments\n **/</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => 10</span></code></pre>\n      </div>\n<p>Nulla perspiciatis voluptate nihil fuga suscipit Laboriosam consectetur recusandae natus commodi dicta dolore Quaerat asperiores fugiat laborum exercitationem error eveniet Debitis quis autem molestiae minima natus Et magnam voluptates provident eligendi laudantium Eos nisi alias nemo eum sapiente soluta explicabo? Non iure quam laborum maxime laborum Deserunt ad sequi dolorem quis incidunt. Corrupti eos quidem quasi qui fugiat Accusamus quia neque saepe repellendus eius possimus. Magni voluptas velit sed pariatur dignissimos perferendis rerum! Totam ex ipsa vitae corrupti sint iusto</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">crushByAdding</span><span class="token punctuation">(</span>numberArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y\n  <span class="token keyword">return</span> numberArray<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">crushByAdding</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>Mega dopeness</h2>\n<p>Bladow</p>',id:"/Users/cmarlow/Projects/cmarlow-static/posts/2018-01-04 Test.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-01-04T00:00:00.000Z",path:"/posts/2018-01-04-Test",title:"This is my Test Post"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-0c6f3da7e099bd2bd24b.js.map