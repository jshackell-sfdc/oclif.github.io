"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=o,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Prompting"},p=void 0,m={unversionedId:"prompting",id:"prompting",title:"Prompting",description:"The ux export provides a simple cli.prompt() function, for more complex input prompts, we recommend using the inquirer library.",source:"@site/../docs/prompting.md",sourceDirName:".",slug:"/prompting",permalink:"/docs/prompting",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/prompting.md",tags:[],version:"current",lastUpdatedBy:"Shane McLaughlin",lastUpdatedAt:1691790062,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{title:"Prompting"},sidebar:"docs",previous:{title:"Custom Base Class",permalink:"/docs/base_class"},next:{title:"Spinner",permalink:"/docs/spinner"}},l={},c=[{value:"<code>ux.prompt()</code>",id:"uxprompt",level:2},{value:"<code>inquirer</code>",id:"inquirer",level:2}],u={toc:c},d="wrapper";function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/core/blob/main/src/cli-ux/README.md"},"ux")," export provides a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"cli.prompt()")," function, for more complex input prompts, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SBoudrias/Inquirer.js"},"inquirer")," library."),(0,a.kt)("h2",{id:"uxprompt"},(0,a.kt)("inlineCode",{parentName:"h2"},"ux.prompt()")),(0,a.kt)("p",null,"Prompt for basic input with ",(0,a.kt)("inlineCode",{parentName:"p"},"ux"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, ux} from '@oclif/core'\n\nexport class MyCommand extends Command {\n  async run() {\n    // just prompt for input\n    const name = await ux.prompt('What is your name?')\n\n    // mask input after enter is pressed\n    const secondFactor = await ux.prompt('What is your two-factor token?', {type: 'mask'})\n\n    // hide input while typing\n    const password = await ux.prompt('What is your password?', {type: 'hide'})\n\n    this.log(`You entered: ${name}, ${secondFactor}, ${password}`)\n  }\n}\n")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"prompt demo",src:n(740).Z,width:"941",height:"605"})),(0,a.kt)("h2",{id:"inquirer"},(0,a.kt)("inlineCode",{parentName:"h2"},"inquirer")),(0,a.kt)("p",null,"Here is an example command that uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SBoudrias/Inquirer.js"},"inquirer"),". You will need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"inquirer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/inquirer")," (for TypeScript CLIs) for this to work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, Flags} from '@oclif/core'\nimport * as inquirer from 'inquirer'\n\nexport class MyCommand extends Command {\n  static flags = {\n    stage: Flags.string({options: ['development', 'staging', 'production']})\n  }\n\n  async run() {\n    const {flags} = await this.parse(MyCommand)\n    let stage = flags.stage\n    if (!stage) {\n      let responses: any = await inquirer.prompt([{\n        name: 'stage',\n        message: 'select a stage',\n        type: 'list',\n        choices: [{name: 'development'}, {name: 'staging'}, {name: 'production'}],\n      }])\n      stage = responses.stage\n    }\n    this.log(`the stage is: ${stage}`)\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": inquirer >= v9 is an ESM package. If you aren't using ESM in your CLI/plugin, you should set ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#moduleResolution"},(0,a.kt)("inlineCode",{parentName:"a"},"moduleResolution")," to ",(0,a.kt)("inlineCode",{parentName:"a"},"node16"))," in your tsconfig.json and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},"import it using ",(0,a.kt)("inlineCode",{parentName:"a"},"await import")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, Flags} from '@oclif/core'\n\nexport class MyCommand extends Command {\n  static flags = {\n    stage: Flags.string({options: ['development', 'staging', 'production']})\n  }\n\n  async run() {\n    const {flags} = await this.parse(MyCommand)\n    let stage = flags.stage\n    if (!stage) {\n      const { default: inquirer } = await import(\"inquirer\")\n      let responses: any = inquirer.prompt([{\n        name: 'stage',\n        message: 'select a stage',\n        type: 'list',\n        choices: [{name: 'development'}, {name: 'staging'}, {name: 'production'}],\n      }])\n      stage = responses.stage\n    }\n    this.log(`the stage is: ${stage}`)\n  }\n}\n")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inquirer demo",src:n(2813).Z,width:"1254",height:"806"})))}g.isMDXComponent=!0},2813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/inquirer_demo-4d4cd8f9cf0bf300a5b853a4beef5672.gif"},740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prompt_demo-7bc9d5f614fdad73636bec3c864aff15.gif"}}]);