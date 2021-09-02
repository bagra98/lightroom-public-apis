(self.webpackChunklightroom_public_api=self.webpackChunklightroom_public_api||[]).push([[267],{9164:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return p}});var n=a(22122),i=a(19756),l=(a(15007),a(64983)),d=a(99536),r=["components"],o={},m={_frontmatter:o},s=d.Z;function p(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.mdx)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"common-json-data-model"},"Common JSON Data Model"),(0,l.mdx)("p",null,"The data models for all JSON content share many common elements. Long strings, unique identifiers, and URLs have been truncated here for legibility."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{\n    "base": "https://lr.adobe.io/v2/catalogs/9479135e/",\n    "id": "a3c679e3",\n    "created": "2012-01-03T04:54:32.884643Z",\n    "updated": "2012-01-03T04:54:32.884643Z",\n    "type": "custom for each type",\n    "subtype": "custom for each type",\n    "payload": {\n        "userCreated": "2012-01-03T04:54:15Z",\n        "userUpdated": "2012-01-03T04:54:15Z",\n        // custom for each type\n    },\n    "links": {\n        "self": {\n            "href": "custom/for/each/type/a3c679e3"\n        }\n        // additional links custom for each type\n    }\n}\n')),(0,l.mdx)("p",null,"Unless otherwise noted, all entries at the top level are constructed and provided by the server and can not be modified by clients."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"base")," (URL): Base URL for any relative HREF values in the data. When items are returned in a list, base will typically not be included with each entry."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"id")," (Lightroom-style UUID): Unique Lightroom identifier of this asset. It is usually generated by client on creation but may be generated by the server in some circumstances."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"created")," (ISO 8601 date): Date when asset was first uploaded to the server."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"updated")," (ISO 8601 date): Date when asset was most recently revised on the server."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"type")," (string): Always the same value for a type."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"subtype")," (string): A different set of legal values is defined for each type. Provided by the client on creation. A subtype is always required for types that support it."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"payload")," (optional, table): Metadata about the object provided by the client.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Values supported within the payload generally differ for each document type."),(0,l.mdx)("li",{parentName:"ul"},"If the payload is completely empty, which is allowed for some types, then it will be omitted."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"userCreated")," (ISO 8601 date): Date and time when the user created this document on the client side."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"userUpdated")," (ISO 8601 date): Date and time when the user last updated this document's payload (or other user modifiable data). This should be set at initial creation and updated by a client each time a user makes a change to data within the payload hash. The userUpdated time should not be updated by automated processes (e.g. reverse geocode, etc.)."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"links")," (table): Links to related data.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Each entry is a table containing an ",(0,l.mdx)("inlineCode",{parentName:"li"},"href")," entry with the actual link."),(0,l.mdx)("li",{parentName:"ul"},"All types include the ",(0,l.mdx)("inlineCode",{parentName:"li"},"self")," link."),(0,l.mdx)("li",{parentName:"ul"},"Each type may have other links supported.")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-common-data-model-index-md-d047a23a955149da2fcb.js.map