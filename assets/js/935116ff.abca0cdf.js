"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2638],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3048:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={title:"FAQs"},s=void 0,p={unversionedId:"faqs",id:"faqs",title:"FAQs",description:"Why Node?",source:"@site/../docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/docs/faqs",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/faqs.md",tags:[],version:"current",lastUpdatedBy:"Willhoit",lastUpdatedAt:1694207576,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{title:"FAQs"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Generator Commands",permalink:"/docs/generator_commands"}},u={},c=[{value:"Why Node?",id:"why-node",level:2},{value:"I want a single binary CLI like with Go",id:"i-want-a-single-binary-cli-like-with-go",level:2},{value:"Should I use TypeScript or JavaScript?",id:"should-i-use-typescript-or-javascript",level:2},{value:"What editor is best for oclif?",id:"what-editor-is-best-for-oclif",level:2},{value:"Should I use npm or yarn?",id:"should-i-use-npm-or-yarn",level:2},{value:"How can I make the oclif generator run faster?",id:"how-can-i-make-the-oclif-generator-run-faster",level:2},{value:"Why isn&#39;t Node X supported?",id:"why-isnt-node-x-supported",level:2},{value:"How do I pronounce &quot;oclif&quot;?",id:"how-do-i-pronounce-oclif",level:2}],d={toc:c},h="wrapper";function f(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-node"},"Why Node?"),(0,a.kt)("p",null,"There are a number of reasons why Node is the best choice for writing CLI code. At Salesforce, we've released the heroku CLI in Ruby, Go, as well as Node. ",(0,a.kt)("a",{parentName:"p",href:"https://blog.heroku.com/evolution-of-heroku-cli-2008-2017"},"This article gets more into detail on that history"),", but we've certainly found that Node offers the best of everything."),(0,a.kt)("p",null,"First, JavaScript is the biggest language in the world. More people are able to write JavaScript than any other language and it by far has the biggest open source community. Everyone can write it and you'll find the most helpful libraries to help build your CLI."),(0,a.kt)("p",null,"We've found that Node has the best cross platform support of any language we've used. In general, if you write code on macOS, you won't find many issues making it also run on Windows."),(0,a.kt)("p",null,"Node has the best support for our ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins"},"plugins")," model. Plugins are a way to share code between CLIs, to modularize a CLIs codebase, or allow users to add functionality to an existing CLI. With Node, we're able to have separate dependency versions sitting alongside one another. This means if you want to release an update to a dependency in one plugin, it won't affect how another plugin works. oclif takes this to an extreme and even flag parsing is done at the individual plugin level. If we ever want to make a breaking change to flag parsing (we certainly don't intend to, but this is just an example), you can update just one plugin and keep the old behavior in other plugins. This is very helpful for large CLI codebases where you want to migrate to new code slowly."),(0,a.kt)("h2",{id:"i-want-a-single-binary-cli-like-with-go"},"I want a single binary CLI like with Go"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeit/pkg"},"pkg"),". Just make sure to add the commands and other source files by setting ",(0,a.kt)("inlineCode",{parentName:"p"},'pkg.scripts: "./lib/**/*.js"')," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",null,"In the Salesforce CLI, however, we prefer to ship a tarball (and various installers) that has Node baked in. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"oclif pack")," to create a set of tarballs for different platforms with Node built in. You'll likely need to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/plugin-update"},"@oclif/plugin-update")," with this, otherwise the users won't have a way to update the CLI from the tarball without reinstalling it."),(0,a.kt)("h2",{id:"should-i-use-typescript-or-javascript"},"Should I use TypeScript or JavaScript?"),(0,a.kt)("p",null,"We suggest TypeScript as we find the typing to really help when refactoring code and updating dependencies. It's nicer to get compilation errors rather than finding errors in production."),(0,a.kt)("p",null,"We've put a lot of care into making it easy to make a TypeScript CLI even if you've never written TypeScript before. We generate CLIs and plugins that use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},"ts-node")," to make it fast to run the TypeScript code without a compilation step. You won't have to mess around with build configuration using oclif."),(0,a.kt)("p",null,"Still, the languages today are very similar. The code you write in JavaScript will be nearly identical to what you would have in TypeScript. (Just no type definitions, of course)"),(0,a.kt)("h2",{id:"what-editor-is-best-for-oclif"},"What editor is best for oclif?"),(0,a.kt)("p",null,"Of course if you already have a go-to editor, you should use that. However, we typically recommend ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"vscode"),"."),(0,a.kt)("p",null,"Microsoft has done a great job with this editor and it works particularly well in TypeScript projects. You'll get nice type checking, linting, and autocomplete right out of the box."),(0,a.kt)("h2",{id:"should-i-use-npm-or-yarn"},"Should I use npm or yarn?"),(0,a.kt)("p",null,"It really doesn't make that much of a difference. If you're just getting started, keep it simple and use npm which comes with Node. We like to use yarn internally as it's a bit faster and we find the lockfiles friendlier."),(0,a.kt)("h2",{id:"how-can-i-make-the-oclif-generator-run-faster"},"How can I make the oclif generator run faster?"),(0,a.kt)("p",null,"If you're using npx, install it first with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g oclif"),". This won't stay current with updates though, so you'll need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm update -g oclif")," to get new versions of the generator."),(0,a.kt)("h2",{id:"why-isnt-node-x-supported"},"Why isn't Node X supported?"),(0,a.kt)("p",null,"The oclif project follows and supports ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"Node's LTS support schedule"),". This allows oclif to stay current with Node's development."),(0,a.kt)("h2",{id:"how-do-i-pronounce-oclif"},'How do I pronounce "oclif"?'),(0,a.kt)("p",null,'We say "oh-cliff".'))}f.isMDXComponent=!0}}]);