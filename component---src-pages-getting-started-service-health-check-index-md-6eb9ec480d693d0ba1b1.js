(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[673],{37487:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return h},default:function(){return m}});var r=n(22122),o=n(19756),i=(n(15007),n(64983)),a=n(99536),d=["components"],h={},l={_frontmatter:h},p=a.Z;function m(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"lightroom-services-health-check"},"Lightroom Services Health Check"),(0,i.mdx)("p",null,"Registered partner applications can check the health of the Lightroom Services through the ",(0,i.mdx)("inlineCode",{parentName:"p"},"/v2/health")," API on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://lr.adobe.io")," endpoint. The health check requires only the API key obtained by ",(0,i.mdx)("a",{parentName:"p",href:"./integration.md"},"Creating an Integration"),"."),(0,i.mdx)("p",null,"Sample cURL might be:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -H "X-API-Key: NEW_API_KEY" https://lr.adobe.io/v2/health\n')),(0,i.mdx)("p",null,"with an expected response of the form:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'while (1) {}\n{"version":"aaf68f5ea64545693f3add0c309d420d42653bb0"}\n')),(0,i.mdx)("p",null,"If the API key is not subscribed to the Lightroom Services, an error will be returned:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'while (1) {}{"code":"403003", "description":"Api Key is invalid"}\n')),(0,i.mdx)("p",null,"Any other error indicates that the Lightroom Services are down. Partner applications are advised to retry the check with an exponential backoff in time until the service is restored."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-service-health-check-index-md-6eb9ec480d693d0ba1b1.js.map