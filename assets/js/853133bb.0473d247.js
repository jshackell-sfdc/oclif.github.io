"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8204],{9585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const o={title:"oclif TSLint to ESLint Migration"},l=void 0,r={permalink:"/blog/2019/12/05/oclif-eslint-migration",source:"@site/blog/2019-12-05-oclif-eslint-migration.md",title:"oclif TSLint to ESLint Migration",description:"Back in February of this year, plans were announced to deprecate TSLint in favor of ESLint. TSLint's goal has become to work toward a \u201cunified developer experience\u201d by supporting ESLint development going forward.",date:"2019-12-05T00:00:00.000Z",formattedDate:"December 5, 2019",tags:[],readingTime:2.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"oclif TSLint to ESLint Migration"},unlisted:!1,prevItem:{title:"Customizing Help in oclif",permalink:"/blog/2020/05/05/introducing-custom-help-classes"},nextItem:{title:"oclif's Current Node Support",permalink:"/blog/2019/10/31/oclif-node-updates"}},a={authorsImageUrls:[]},c=[{value:"What has changed in oclif",id:"what-has-changed-in-oclif",level:2},{value:"How does this affect you",id:"how-does-this-affect-you",level:2},{value:"When will this take effect",id:"when-will-this-take-effect",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Back in February of this year, plans were announced to ",(0,i.jsx)(n.a,{href:"https://github.com/palantir/tslint/issues/4534",children:"deprecate TSLint"})," in favor of ESLint. TSLint's goal has become to work toward a \u201cunified developer experience\u201d by supporting ESLint development going forward."]}),"\n",(0,i.jsx)(n.h2,{id:"what-has-changed-in-oclif",children:"What has changed in oclif"}),"\n",(0,i.jsx)(n.p,{children:"To keep inline with the community, oclif has transitioned to ESLint for all our core libraries as well as all our official plugins."}),"\n",(0,i.jsx)(n.p,{children:"Starting in v1.15.x, oclif will now optionally generate projects with ESLint for both TypeScript and JavaScript CLI\u2019s."}),"\n",(0,i.jsx)(n.p,{children:"ESLint does require Node to be on stable LTS version, at the time of writing, Node 8.10.x, Node 10.13.x & Node 12.x.x."}),"\n",(0,i.jsx)(n.h2,{id:"how-does-this-affect-you",children:"How does this affect you"}),"\n",(0,i.jsx)(n.p,{children:"Existing CLI\u2019s are unchanged, but any newly generated CLI's will only give the option of using ESLint. If you are running tslint in your CLI, we recommend you switch to ESLint as well."}),"\n",(0,i.jsxs)(n.p,{children:["In migrating our projects we took the following steps (for an example of these changes see this ",(0,i.jsx)(n.a,{href:"https://github.com/oclif/githubcli/pull/10",children:"pull request"}),")."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install eslint"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"$ yarn add eslint eslint-config-oclif eslint-config-oclif-typescript --dev"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add eslint related files"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ echo \'{\n  "extends": [\n    "oclif",\n    "oclif-typescript"\n  ],\n  "rules": {\n  }\n}\' > .eslintrc\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remove tslint and related packages"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"$ yarn remove @oclif/tslint tslint"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remove tslint related configuration files"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"$ rm tslint.json"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change lint script in our package.json from something like:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"lint": "tsc -p test --noEmit && tslint -p test -t stylish"'})}),"\n",(0,i.jsx)(n.p,{children:"to"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"lint": "eslint . --ext .ts --config .eslintrc"'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To preserve the test compile (tsc -p test --noEmit) we also made the following updates to our scripts:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"pretest": "tsc -p test --noEmit"'})}),"\n",(0,i.jsx)(n.p,{children:"In some cases we had our posttest duplicating the same steps as our lint script so it\u2019s cleaner to have it reference the lint job directly with:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"posttest": "yarn lint"'})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"yarn lint --fix"}),". This attempts to auto-fix any linting violations automatically. In the case an auto-fix isn\u2019t available it should be fixed manually or ignored (see the ",(0,i.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring",children:"eslint configuration doc"})," for more information)"]}),"\n",(0,i.jsxs)(n.li,{children:["Do a search in the codebase for ",(0,i.jsx)(n.code,{children:"tslint"})," and remove any unnecessary tslint disabling comments, like:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"/* tslint:disable:object-literal-sort-keys */\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are on a version of Node that is not supported by ESLint, you will also need to update your Node engine. ESLint supports Node 8, 10, and 12 so you should upgrade to the most recent Node version compatible with your CLI and also supported by ESLint (see ESLint's ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint#installation-and-usage",children:"Installation and Usage"})," instructions)."]}),"\n",(0,i.jsx)(n.h2,{id:"when-will-this-take-effect",children:"When will this take effect"}),"\n",(0,i.jsx)(n.p,{children:"These changes have taken effect in oclif v1.15.1. When you generate a new CLI or plugin it will now contain configuration for ESLint instead of TSLint."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);