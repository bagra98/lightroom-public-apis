(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[965],{83347:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return m}});var a=t(22122),o=t(19756),s=(t(15007),t(64983)),r=t(99536),i=["components"],l={},u={_frontmatter:l},d=r.Z;function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.mdx)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"links-and-pagination"},"Links and Pagination"),(0,s.mdx)("h3",{id:"links"},"Links"),(0,s.mdx)("p",null,"Content returned from the Lightroom APIs often includes a ",(0,s.mdx)("inlineCode",{parentName:"p"},"base")," URL and table of relative ",(0,s.mdx)("inlineCode",{parentName:"p"},"links")," that should be used when assembling subsequent requests. To ensure the most robust future-proofing, clients should avoid cobbling together their own fully formed URLs when possible."),(0,s.mdx)("p",null,"For example, the API to retrieve a catalog might return (unique identifiers have been shortened to preserve readability):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'{\n    "base": "https://lr.adobe.io/v2/catalogs/18c23e15/",\n    ...\n    "links" {\n        "self": {\n            "href": "/v2/catalogs/18c23e15"\n        },\n        "/rels/albums": {\n            "href": "albums"\n        }\n    }\n}\n')),(0,s.mdx)("p",null,"To construct the API endpoint to enumerate the albums in the catalog, an application should concatenate the ",(0,s.mdx)("inlineCode",{parentName:"p"},"base")," with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"/rels/albums")," value in ",(0,s.mdx)("inlineCode",{parentName:"p"},"href"),". When composing these two elements into a single URL, clients should use the standard rules for URI resolution as defined in section 5.2 of RFC 3986. We strongly recommend that clients use standard library implementations to avoid worrying about corner cases of the RFC URI rules."),(0,s.mdx)("h3",{id:"pagination"},"Pagination"),(0,s.mdx)("p",null,"Indefinitely long lists of content, such as albums and assets, may be paginated during their return. Therefore, a client may need to make multiple calls to enumerate the entire list. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"links")," subsection of returned content will contain a ",(0,s.mdx)("inlineCode",{parentName:"p"},"next")," field that encapsulates the API call for fetching an additional page of assets. Sample recursive JavaScript might be:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"function getPagedJSONContentP(url) {\n    return new Promise(function(resolve, reject) {\n        var response = {\n            resources: []\n        }\n        function getPage(url) {\n            getJSONContentP(url).then(function(page) {\n                response.base = page.base\n                response.resources = response.resources.concat(page.resources)\n                if (page.links.next) {\n                    getPage(page.base + page.links.next.href)\n                }\n                else {\n                    resolve(response)\n                }\n            }, reject)\n        }\n        getPage(url)\n    })\n}\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-links-and-pagination-index-md-4e62fce5d89cc2a13949.js.map