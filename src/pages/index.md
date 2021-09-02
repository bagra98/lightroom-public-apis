---
title: Overview - Adobe Lr
description: This is the overview page of Adobe Lr
contributors:
  - https://github.com/icaraps 
---

<Hero slots="heading, text"/> 

# Adobe Lr API

Adobe Product API offers limitless ways to integrate your most important customer data into key business processes. Adobe Product API offer limitless ways.

<Resources slots="heading, links"/>

#### Resources

* [Quickstart Guide](https://www.adobe.io/apis/experiencecloud/Lr/docs.html)
* [Adobe Lr Github Repo](https://github.com/AdobeDocs/Lr-2.0-apis)

## Overview

This documentation provides instructions for Adobe Lr 2.0 APIs. For working with Lr 1.4 APIs, see [Lr 1.4 API Documentation](https://github.com/AdobeDocs/Lr-1.4-apis).

The Adobe Lr APIs are a collection of APIs that power Adobe Lr products like Analysis Workspace. 
The APIs allow for the creation of data rich user interfaces that you can use to manipulate and integrate data.
You can also create reports to explore, get insights, or answer important questions about your data.

## Discover 

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Get Started

[Quickstart Guide](guides/)
    
Get started with the Adobe Lr APIs.

<DiscoverBlock slots="heading, link, text"/> 

### Guides

[Calculated Metrics API](guides/calculated_metrics_api/) 
     
Returns information on the user's company that is necessary for making other Adobe Lr API calls.

<DiscoverBlock slots="link, text"/>

[Segments API](guides/segments_api/) 

Provides configuration guidance and best practices for the /segments endpoint.

<DiscoverBlock slots="link, text"/>

[Reporting Guide API](guides/reporting_api/)

Provides configuration guidance and best practices for the /reports endpoint.

<DiscoverBlock slots="link, text"/>

[Migrating from 1.4 to 2.0](guides/migrating/)

For help migrating from the 1.4 versions of the Lr API to the newer and more capable /reports API.   

<DiscoverBlock width="100%" slots="heading, link, text"/>

### API References

[Try the API](api/) 

Try the Lr API with Swagger UI. Explore, make calls, with full endpoint descriptions.

## Contributing 

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions 
or deletions for this documentation, check out the source from [this github repo](https://github.com/adobe/gatsby-theme-spectrum-example), and submit a pull 
request with your contribution. For more information, refer to the [contributing page](support/contribute/).

## API Requests & Rate Limits

The timeout for API requests through adobe.io is currently *60 seconds*.

The default rate limit for an Adobe Lr Company is *120 requests per minute*. (The limit is enforced as *12 requests every 6 seconds*).
When rate limiting is being enforced you will get `429` HTTP response codes with the following response body: `{"error_code":"429050","message":"Too many requests"}`    
