webpackJsonp([35783957827783],{103:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,n=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,u=l&&l(Object);return function c(f,i,p){if("string"!=typeof i){if(u){var s=l(i);s&&s!==u&&c(f,s,p)}var d=n(i);a&&(d=d.concat(a(i)));for(var m=0;m<d.length;++m){var h=d[m];if(!(e[h]||t[h]||p&&p[h])){var y=o(i,h);try{r(f,h,y)}catch(e){}}}return f}return f}})},198:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(4),o=n(a),l=r(34),u=n(l);t.default=function(e){var t=e.posts;e.data,t.map(function(e){return e.node.frontmatter.title});return o.default.createElement("section",null,o.default.createElement("h2",null,"Posts"),o.default.createElement("p",null,"Some things I found out that I felt worth writing down."),o.default.createElement("ol",null,t.map(function(e){var t=e.node;return o.default.createElement("li",{key:t.frontmatter.path},o.default.createElement(u.default,{to:t.frontmatter.path},t.frontmatter.title))})))},e.exports=t.default},203:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=r(4),c=n(u),f=r(34),i=n(f),p=r(198),s=n(p),d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"page-index"},c.default.createElement("section",null,c.default.createElement("p",null,"Senior Front End Developer @"," ",c.default.createElement("a",{href:"https://shopify.ca/"},"Shopify"),"."),c.default.createElement("p",null,"I uncomplicate things."),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("a",{href:"http://www.twitter.com/perrupa"},"@perrupa on Twitter")),c.default.createElement("li",null,c.default.createElement("a",{href:"http://www.instagram.com/perrupa"},"@perrupa on Instagram")),c.default.createElement("li",null,c.default.createElement("a",{href:"http://www.facebook.com/christopher.marlow"},"@christopher.marlow on Facebook")))),c.default.createElement("section",null,c.default.createElement("h2",null,"Pages"),c.default.createElement("p",null,c.default.createElement(i.default,{to:"/high-park/"},"Some photos that I took in High Park."))),c.default.createElement(s.default,{posts:this.getPosts()}))},t.prototype.getPosts=function(){var e=this.props.data.allMarkdownRemark.edges;return Array.from(e)},t}(u.Component);t.query="** extracted graphql fragment **";t.default=d}});
//# sourceMappingURL=component---src-pages-index-js-e1de9546eaec38c8ebd8.js.map