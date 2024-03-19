"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4711],{2449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(4848),i=n(8453);const s={title:"Features"},a=void 0,l={id:"features",title:"Features",description:"Flag/Argument parsing",source:"@site/../docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/features.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1710860746,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Features"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"FAQs",permalink:"/docs/faqs"}},r={},c=[{value:"Flag/Argument parsing",id:"flagargument-parsing",level:3},{value:"Configurable Topic Separators",id:"configurable-topic-separators",level:3},{value:"Super Speed",id:"super-speed",level:3},{value:"CLI Generator",id:"cli-generator",level:3},{value:"Testing Helpers",id:"testing-helpers",level:3},{value:"Auto-documentation",id:"auto-documentation",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Hooks",id:"hooks",level:3},{value:"JSON Output",id:"json-output",level:3},{value:"TypeScript (or not)",id:"typescript-or-not",level:3},{value:"Auto-updating Installers",id:"auto-updating-installers",level:3},{value:"Autocomplete",id:"autocomplete",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"flagargument-parsing",children:"Flag/Argument parsing"}),"\n",(0,o.jsx)(t.p,{children:"No CLI framework would be complete without a flag parser. We've built a custom one from years of experimentation that we feel consistently handles user input flexible enough for the user to be able to easily use the CLI in ways they expect, but without compromising strictness guarantees to the developer."}),"\n",(0,o.jsx)(t.h3,{id:"configurable-topic-separators",children:"Configurable Topic Separators"}),"\n",(0,o.jsxs)(t.p,{children:["By default topics will be separated with colons, e.g. ",(0,o.jsx)(t.code,{children:"my:awesome:command"}),". However, you have the option to use spaces if you prefer, e.g. ",(0,o.jsx)(t.code,{children:"my awesome command"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"super-speed",children:"Super Speed"}),"\n",(0,o.jsxs)(t.p,{children:["The overhead for running an oclif CLI command is almost nothing. ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@oclif/core?activeTab=dependencies",children:"It requires very few dependencies"})," (only 28 dependencies in a minimal setup\u2014including all transitive dependencies). Also, only the command to be executed will be required with node. So large CLIs with many commands will load just as fast as a small one with a single command."]}),"\n",(0,o.jsx)(t.h3,{id:"cli-generator",children:"CLI Generator"}),"\n",(0,o.jsxs)(t.p,{children:["Run a single command to scaffold out a fully functional CLI and get started quickly. See ",(0,o.jsx)(t.a,{href:"https://oclif.io/docs/generator_commands",children:"Generator Commands"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"testing-helpers",children:"Testing Helpers"}),"\n",(0,o.jsxs)(t.p,{children:["We've put a lot of work into making commands easily testable and easy to mock out stdout/stderr. The generator will automatically create ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/hello-world/blob/main/test/commands/hello/world.test.ts",children:"scaffolded tests"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"auto-documentation",children:"Auto-documentation"}),"\n",(0,o.jsxs)(t.p,{children:["By default you can pass ",(0,o.jsx)(t.code,{children:"--help"})," to the CLI to get help such as flag options and argument information. This information is also automatically placed in the README whenever the npm package of the CLI is published. See the ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/hello-world",children:"hello-world CLI example"})]}),"\n",(0,o.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,o.jsxs)(t.p,{children:["Using plugins, users of the CLI can extend it with new functionality, a CLI can be split into modular components, and functionality can be shared amongst multiple CLIs. See ",(0,o.jsx)(t.a,{href:"https://oclif.io/docs/plugins#building-your-own-plugin",children:"Building your own plugin"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"hooks",children:"Hooks"}),"\n",(0,o.jsxs)(t.p,{children:["Use lifecycle hooks to run functionality any time a CLI starts, or on custom triggers. Use this whenever custom functionality needs to be shared between various components of the CLI. See ",(0,o.jsx)(t.a,{href:"https://oclif.io/docs/hooks",children:"Hooks"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"json-output",children:"JSON Output"}),"\n",(0,o.jsxs)(t.p,{children:["You can opt-in to using the ",(0,o.jsx)(t.code,{children:"--json"})," flag which will automatically suppress console logs and display the final result of the command as valid JSON output. This is very useful if you want your CLI to be used for scripting in CI/CD environments. See ",(0,o.jsx)(t.a,{href:"https://oclif.io/docs/json",children:"JSON"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"typescript-or-not",children:"TypeScript (or not)"}),"\n",(0,o.jsxs)(t.p,{children:["Everything in the core of oclif is written in TypeScript and the generator can build fully configured TypeScript CLIs or just plain JavaScript CLIs. By virtue of static properties in TypeScript the syntax is a bit cleaner in TypeScript \u2014 but everything will work no matter which language you choose. If you use plugins support, the CLI will automatically use ",(0,o.jsx)(t.code,{children:"ts-node"})," to run the plugins making it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI."]}),"\n",(0,o.jsx)(t.h3,{id:"auto-updating-installers",children:"Auto-updating Installers"}),"\n",(0,o.jsxs)(t.p,{children:["oclif can package your CLI into ",(0,o.jsx)(t.a,{href:"/docs/releasing",children:"different installers"})," that will not require the user to already have node installed on the machine. These can be made auto-updatable by using ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/plugin-update",children:"plugin-update"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,o.jsxs)(t.p,{children:["Include terminal autocompletion for your CLI via ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/plugin-autocomplete",children:"plugin-autocomplete"}),". Once installed, users can complete command names and flag names."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ my-cli p<tab><tab> # will list all commands starting with 'p' for completion\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);