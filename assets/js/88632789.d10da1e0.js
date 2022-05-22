(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(o,".").concat(u)]||b[u]||h[u]||i;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},166:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/P5FUhk8-4f38f66302c6bc31867446a5694ea49b.jpeg"},167:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chunky1-2e58c303682485e8fd466b0b301b7929.png"},168:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chunky2-7e0e0fa5ee6530770e979e754a498749.png"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(116)),o=["components"],l={title:"Bases and Equippable NFTs"},s={unversionedId:"lego25-equippable",id:"lego25-equippable",isDocsHomePage:!1,title:"Bases and Equippable NFTs",description:"We introduce the concept of a BASE.",source:"@site/docs/lego25-equippable.md",slug:"/lego25-equippable",permalink:"/lego25-equippable",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/lego25-equippable.md",version:"current",sidebar:"docs",previous:{title:"Multi-resource NFTs",permalink:"/lego2-multi-resource"},next:{title:"On-chain emotes",permalink:"/lego3-emote"}},c=[{value:"How a Base Works: Chunkies Example",id:"how-a-base-works-chunkies-example",children:[]},{value:"Example: Leveling Characters",id:"example-leveling-characters",children:[]},{value:"Example: Music",id:"example-music",children:[]},{value:"Example: Games",id:"example-games",children:[]},{value:"Theming",id:"theming",children:[]},{value:"Other Examples",id:"other-examples",children:[]},{value:"Implementations",id:"implementations",children:[]}],p={toc:c};function b(e){var t=e.components,l=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We introduce the concept of a BASE."),Object(i.b)("p",null,"A Base can be considered a ",Object(i.b)("em",{parentName:"p"},"catalogue of parts")," from which an NFT can be composed. Parts can be\neither of the ",Object(i.b)("inlineCode",{parentName:"p"},"slot")," type or ",Object(i.b)("inlineCode",{parentName:"p"},"fixed")," type. Slots are intended for equippables."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: a base is added to an NFT as a separate ",Object(i.b)("a",{parentName:"p",href:"lego2-multi-resource"},"resource")," by specifying the\nbase and cherry picking the list of parts per NFT. The approach differs slightly per\nimplementation, so the examples below will mostly use pseudo-code to communicate the concept.")),Object(i.b)("p",null,"Bases can be of different media types."),Object(i.b)("p",null,"The base's type indicates what the final output of an NFT will be when this resource is being\nrendered. Supported types are PNG, SVG, audio, video, even mixed."),Object(i.b)("p",null,"It is easiest to understand bases and equippables through a visual example like a PNG or SVG base,\nso we will focus on this in the explanations below. Additional examples of different types are at\nthe end of this page."),Object(i.b)("p",null,"The most important concept to understand with regard to equippables is that the final output is not\nstatic. Equipping, e.g., a hat onto a rhino does not generate a new static image in place of an old\none. Instead, the hat is dynamically rendered ",Object(i.b)("em",{parentName:"p"},"inside")," the image of the rhino, and the image of the\nrhino has to be prepared for this functionality in advance."),Object(i.b)("p",null,"This is what the Base system allows: minting collections with equippability in mind, regardless of\ntype - audio files can be prepared with slots for audio stems, movie bases can be prepared with\nfilter slots, but video files can also have a slot for subtitles, or even an alternative audio\ntrack, and more."),Object(i.b)("h2",{id:"how-a-base-works-chunkies-example"},"How a Base Works: Chunkies Example"),Object(i.b)("p",null,'A base is a list of "components" a combination of which can be used to form a single NFT.'),Object(i.b)("p",null,"Let's take for example an avatar project called Chunkies: chubby characters that can hold items,\nwear headwear, and have have different backgrounds along with looking unique between each other.\nHere are some combinations."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chunky examples",src:a(166).default})),Object(i.b)("p",null,"Each Chunky is a combination of different parts from the Chunky base. "),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chunky base",src:a(167).default})),Object(i.b)("p",null,"Some of those parts are slots into which other compatible images can be placed - these are the equippables. The slots are not visible when inspected individually - on the final composition they would come, for example, behind the Chunky (background), or between the fingers and the palm. The red diagonal lines below show where an item would appear."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chunky slots",src:a(168).default})),Object(i.b)("p",null,"The process of adding an equippable resource to an NFT:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"create a base entity"),Object(i.b)("li",{parentName:"ol"},"add a new resource to the target NFT. ")),Object(i.b)("p",null,"This new resource defines a base and some picked parts, like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'    "resources": [\n        {\n            "base": "base-8788686-CHUNKBASE",\n            "id": "Whqja-r1",\n            "parts": [\n                "var1_body",\n                "var1_eyes",\n                "1fa78_handleft",\n                "1fa78_handright",\n                "var1_head",\n                "background",\n                "foreground",\n                "headwear",\n                "objectleft",\n                "objectright",\n                "necklace",\n            ],\n            "pending": false,\n            "themeId": "bandicoot",\n            "thumb": "ipfs://ipfs/QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"\n        }\n    ],\n')),Object(i.b)("p",null,"You can see in the mock code above that we are dealing with the ",Object(i.b)("inlineCode",{parentName:"p"},"resources")," array of a certain NFT. "),Object(i.b)("p",null,"This NFT in particular has only a single resource - the equippable base itself. The ",Object(i.b)("inlineCode",{parentName:"p"},"base")," value refers to the ID of the Base meta-entity, the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," of the resource is used for indexing and to be able to target a specific resource when wanting to replace, accept, or remove it, while ",Object(i.b)("inlineCode",{parentName:"p"},"pending")," tells us whether the NFT owner has accepted this resource (false is yes). "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2757\ufe0f More info on acceptance mechanics in ",Object(i.b)("a",{parentName:"p",href:"lego2-multi-resource"},"multi resource NFTs"),".")),Object(i.b)("p",null,"The most important part is ",Object(i.b)("inlineCode",{parentName:"p"},"parts")," - this is the array in which we specify which parts from the assigned ",Object(i.b)("inlineCode",{parentName:"p"},"base")," make up this NFT. The parts themselves are defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"base")," itself, like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  ...,\n  {\n    type: 'slot',\n    id: 'headwear',\n    equippable: [\n      '9cba890074545f2e7c-KANPRTN',\n      'e0b9bdcc456a36497a-EVNTS',\n    ],\n    z: 13,\n  },\n  {\n    type: 'fixed',\n    id: 'var1_head',\n    src: 'ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR/var1/var1_head.svg',\n    z: 9,\n  },\n  ...\n")),Object(i.b)("p",null,"The first slot is ",Object(i.b)("inlineCode",{parentName:"p"},"headwear")," and you can see it is a ",Object(i.b)("inlineCode",{parentName:"p"},"slot")," type. The ",Object(i.b)("inlineCode",{parentName:"p"},"equippable")," array lists the collections that are allowed as equippables. The issuer of the base can modify this value at any time, adding and removing collections at will. "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fixed")," part just points to a visual which should be rendered. It is immutable."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"z"),' value in both indicates on which layer the visual appears on the SVG base, height-wise. The higher the number, the "closer to camera" it is. This is especially important for slot, since - per the image above - the ',Object(i.b)("inlineCode",{parentName:"p"},"z")," value of the handheld slot needs to be between the fingers and the palm, and the ",Object(i.b)("inlineCode",{parentName:"p"},"z")," value of the background needs to be the lowest of all to be rendered at the bottom."),Object(i.b)("p",null,"Thus, a resource which is a base will cherry pick part from that base to compose a final NFT, until we get our colorful chunkies."),Object(i.b)("p",null,"Our flagship project, Kanaria, uses this same approach. If you wish, you can explore its full base ",Object(i.b)("a",{parentName:"p",href:"https://gist.github.com/Yuripetusko/dccd18ef3efe6058d73c29dbe0ef5b6f"},"here"),"."),Object(i.b)("p",null,"A full graphical breakdown of the Kanaria project and how its base works is also available\n",Object(i.b)("a",{parentName:"p",href:"https://url.rmrk.app/demobird"},"here"),"."),Object(i.b)("h2",{id:"example-leveling-characters"},"Example: Leveling Characters"),Object(i.b)("p",null,"A fully decentralized and on-chain way of representing level-requirements for characters is possible by using equippables and multi resources."),Object(i.b)("p",null,"If we take for example a Chunky that is level 1, this NFT can have a resource that points to the Chunky base, but from it picks only the parts that have the ",Object(i.b)("inlineCode",{parentName:"p"},"equippable")," value set to level-1 collections of items, limiting the NFT to equipping only level 1 gear."),Object(i.b)("p",null,'The level itself can be an equippable NFT inside the avatar - a "level brain" which needs to collect experience in the form of successful quest trips. Based on the achievements collected, the Chunky can get a different type of level-up. '),Object(i.b)("p",null,"For example, for level 2, a Chunky needs to have two successful quests. If those quests are done in a fire world, then the next resource could have a fire ",Object(i.b)("a",{parentName:"p",href:"#theming"},"theme"),'. If they are done in a water world, a water theme could apply. The NFT owner would choose which "quest successes" to equip into the "Level NFT" which is inside the avatar, and use them to create full "experience sets" this way.'),Object(i.b)("p",null,"Once this Chunky has amassed enough experience to go to level 2, a new resource can be added to it, targeting the previous one by ID to replace it when accepted by the NFT owner. This resource will point to the same base, but will now pick slot parts that are configured to accept level 1 and level 2 collections of items, thereby making it possible to now equip higher level gear."),Object(i.b)("p",null,'Another example is giving "brain NFTs" with a certain number of slots to a certain level character. For example, a character of level 2 can have only 2 skills ',Object(i.b)("em",{parentName:"p"},"equipped")," into its brain, but if the avatar is aware of more than 2 skills, the player must choose which ones to load after a rest period, like with wizard spells in Dungeons and Dragons."),Object(i.b)("h2",{id:"example-music"},"Example: Music"),Object(i.b)("p",null,"A song NFT could have as a resource a music base with a fixed beat, but slots for vocals, drums, synth, effect, even a slot for a visualization - perhaps even for some runnable ",Object(i.b)("a",{parentName:"p",href:"https://p5js.org/"},"p5.js")," code."),Object(i.b)("p",null,"Not only is this really cool in the context of paying royalties to anyone who contributed to a song's creation with their own stem, but we can take it further: the song itself, or maybe just a single stem can be made equippable on the base resource of a metaverse land. "),Object(i.b)("p",null,"That way, whoever enters this land gets it played as a soundtrack of the area, background music. The music is thus compatible not just with its own project, or the issuer's associated projects, but with any project that can be launched on RMRK standards."),Object(i.b)("h2",{id:"example-games"},"Example: Games"),Object(i.b)("p",null,"The game use case is so obvious, we turned it into a proof of concept with ",Object(i.b)("a",{parentName:"p",href:"https://skybreach.app"},"Skybreach"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A house can be equipped on a plot of land."),Object(i.b)("li",{parentName:"ul"},"A billboard can be equipped and then additionally community governed to earn yield to shareholders."),Object(i.b)("li",{parentName:"ul"},"An avatar can equip a jacket. That jacket can have pockets which equip stuff, and slots for patches."),Object(i.b)("li",{parentName:"ul"},"An NPC can be an NFT which has a personality-NFT installed, or a skill-NFT for sale.")),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("p",null,"The RMRK spec supports theme interpolation. This allows for yet another layer of uniqueness to be applied to your NFTs without having to specifically design and develop them."),Object(i.b)("p",null,"A base will contain themes keyed by name, like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"...\nthemes: {\n  sunkissed: {\n    theme_color_1: '#ffd592',\n    theme_color_2: '#edffd9',\n    theme_color_3: '#eb5a8b',\n    theme_color_4: '#ee9154',\n  },\n  retrosteel: {\n    theme_color_1: '#98baff',\n    theme_color_2: '#8af3fc',\n    theme_color_3: '#5562e9',\n    theme_color_4: '#d16dd1',\n  },\n  ...\n")),Object(i.b)("p",null,"These are variables that can contain any value - in this example they are colors. Then, an SVG itself can contain a placeholder data attribute that this variable is inserted into, but which has a default value of its own:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<svg height="100" width="100">\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" data-theme_color_3="red" />\n</svg>\n')),Object(i.b)("p",null,"Finally, the theme is selected as part of the resource being added to the NFT:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    "resources": [\n        {\n            "base": "base-8788686-CHUNKBASE",\n            "id": "Whqja-r1",\n            "parts": [...],\n            "pending": false,\n            "themeId": "sunkissed", // <--- THIS HERE\n            "thumb": "ipfs://ipfs/QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"\n        }\n    ],\n')),Object(i.b)("p",null,"This does take a little bit of extra work in making the SVGs and preparing them for use, but it results in orders of magnitude more of possible combinations on your NFTs."),Object(i.b)("p",null,"A more comprehensive example is available ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/themeadd.md"},"here"),"."),Object(i.b)("h2",{id:"other-examples"},"Other Examples"),Object(i.b)("p",null,"A creative application of composability and equippability is the\n",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/bitfalls/status/1508793028454014978?s=20&t=v1MmdhrE3WrtfjBkj3kcxw"},"Mushroomtopia composable PFP project"),"."),Object(i.b)("p",null,"Some interesting early experiments with game-related equippables can be seen in the following video:"),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/_RW7XymkI_M",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Another interesting example is using equippable NFTs to represent on-chain participation, like in the example of ",Object(i.b)("a",{parentName:"p",href:"https://app.subsocial.network/6214/referendum-voting-rewards-the-past-the-present-the-future-32141"},"Kusama Governance Rewards"),". For a breakdown, please see the video below."),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lpT7hubqzFQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("h2",{id:"implementations"},"Implementations"),Object(i.b)("p",null,"The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/equip.md"},"Kusama")),Object(i.b)("li",{parentName:"ul"},"EVM (in development)"),Object(i.b)("li",{parentName:"ul"},"Pallets (in development)")))}b.isMDXComponent=!0}}]);