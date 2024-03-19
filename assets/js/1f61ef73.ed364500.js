"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5082],{492:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=r(4848),t=r(8453);const c={title:"Error Handling"},s=void 0,a={id:"error_handling",title:"Error Handling",description:"oclif handles intentionally - and unintentionally - thrown errors in two places. First in the Command.catch method and then, finally, in the bin/run catch handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit.",source:"@site/../docs/error_handling.md",sourceDirName:".",slug:"/error_handling",permalink:"/docs/error_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/error_handling.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1710860746,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Error Handling"},sidebar:"docs",previous:{title:"Help Classes",permalink:"/docs/help_classes"},next:{title:"JSON",permalink:"/docs/json"}},i={},d=[{value:"Error Handling in the <code>catch</code> method",id:"error-handling-in-the-catch-method",level:2},{value:"bin/run.js <code>catch</code> handler",id:"binrunjs-catch-handler",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["oclif handles intentionally - and unintentionally - thrown errors in two places. First in the ",(0,o.jsx)(n.code,{children:"Command.catch"})," method and then, finally, in the bin/run ",(0,o.jsx)(n.code,{children:"catch"})," handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit."]}),"\n",(0,o.jsxs)(n.h2,{id:"error-handling-in-the-catch-method",children:["Error Handling in the ",(0,o.jsx)(n.code,{children:"catch"})," method"]}),"\n",(0,o.jsxs)(n.p,{children:["Every ",(0,o.jsx)(n.code,{children:"Command"})," instance has a ",(0,o.jsx)(n.code,{children:"catch"})," method that is called when an error occurs throughout the course of a command run. This method handles the edge case of users asking for help or version output, if applicable, otherwise, it re-throws the error. You can extend or overwrite the ",(0,o.jsx)(n.code,{children:"catch"})," method in your command class."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {Command, flags} from '@oclif/core'\n\nexport default class Hello extends Command {\n  async catch(error) {\n    // do something or\n    // re-throw to be handled globally\n    throw error;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If this type of error handling is being implemented across multiple commands consider using a Custom Base Class (",(0,o.jsx)(n.a,{href:"https://oclif.io/docs/base_class#docsNav",children:"https://oclif.io/docs/base_class#docsNav"}),") for your commands and overriding the ",(0,o.jsx)(n.code,{children:"catch"})," method."]}),"\n",(0,o.jsxs)(n.h2,{id:"binrunjs-catch-handler",children:["bin/run.js ",(0,o.jsx)(n.code,{children:"catch"})," handler"]}),"\n",(0,o.jsxs)(n.p,{children:["Every oclif CLI has a ./bin/run.js file that is the entry point of command invocation. Errors that occur in the CLI, including re-thrown errors from a Command, are caught here in the bin/run.js ",(0,o.jsx)(n.code,{children:"catch"})," handler."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:".catch(require('@oclif/core/handle'))\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This catch handler uses the ",(0,o.jsx)(n.code,{children:"@oclif/errors/handle"})," function to display (and cleanup, if necessary) the error to the user. This handler can be swapped for any function that receives an error argument."]}),"\n",(0,o.jsxs)(n.p,{children:["If you chose to implement your own handler here, we still recommend you delegate finally to the ",(0,o.jsx)(n.code,{children:"@oclif/core/handle"})," function for clean-up and exiting logic."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:".catch((error) => {\n  const oclifHandler = require('@oclif/core/handle');\n  // do any extra work with error\n  return oclifHandler(error);\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var o=r(6540);const t={},c=o.createContext(t);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);