# HW1


### REST  
The submission file [script.js](https://github.ncsu.edu/scyadav/HW1/blob/master/script.js) includes function for each of the following:  
* listBranches in a given repo under an owner  
* createRepo to create a new repository   
* createIssue to create a new issue in the above created repository   
* editing a repo to enable wiki support  
* listing reactions to the above created issue in the aabove created repository  

All functions are in a single file. In case of any runtime issue, please run the 'createRepo' function first, and follow it up with the other functions in the same order to obtain the required results.

###  About Me  

The link to the web page is-  https://pages.github.ncsu.edu/scyadav/HW1/

###  Concepts  

**(1) Concerns about REST apis:**  

* REST apis use the simple old HTTP for its communication. This actually makes RESTful services vulnerable to application layer security breaches.  
* The REST vocabulary of methods and response codes is extremely limited to effectively communicate the wide variety of requests and responses required across all applications.[1]
* Too many HTTP requests: REST APIs requires clients to do multiple roundtrips to get the requested data.[2]
 Client applications change over a period of time as and when requirements change. Providing an absolute approach to request data, make things worse when a new API call or customization to existing APIs needs to be added. Nesting objects within each ther to avoid extra API calls, will utimately lead to nesting irrelevant data.
* RESTful APIs are very hard to debug since while debugging we have to check different locations - the HTTP request method, the request address, the response code to name a few. Thus, it makes debugging painful.
* Supporting multiple versions means creating new endpoints, which might lead to code duplication. It also causes problems during using and maintaining code.

**(2)**  

**REST APIs:**  

In REST APIs, the server defines a specific set of resources, defined by unique URLs, that a client can request.
REST is covered by the basic idea of URL-based resources. Thus, we can say, that server defines the structure of the data that the client can request.

**Advantages:**  

* Scalable
* Relative ease of integration

**GraphQL:**  

GraphQL is a query language, that can be perfect for APIs. The user can define data using a fully-fledged type system, forming self-documenting schema.   

**Advantages-GraphQL:**  

* GraphQL gives clients the power to request for exactly the data they need.
* GraphQL APIs have been organized in terms of types and fields, not endpoints. Thus, we can access the data capabilities from a single endpoint.
* Having multiple clients means requesting data from multiple services. A GraphQL layer in the middle can simplify and standardize this communication and avoid the need to communicate in different languages.

**Contrast:**  

* GraphQL queries accesses the properties of one resource and smoothly follows references between them. REST APIs require loading from multiple URLs and involve too many HTTP requests, whereas GraphQL APIs can get the entire requested data in a single request.
* GraphQL makes it easier to evolve APIs over time: we can add fields to GraphQL types. To remove functionality, GraphQL includes deprecation as a feature, i.e. we can declare a field as deprecated and hide it from tools as it ages, instead of just removing a field. In REST APIs, supporting multiple versions means creating new endpoints, which might lead to code duplication. It also causes problems during using and maintaining code. Thus, versioning is 'easier' in GraphQL.
* Using GraphQL, the client has full control over the requested data since the data is requested in a declarative manner. But, while using a REST API, there is no client request language. Clients do not have control over what data the server will return[2].

#### References:  
[1] https://mmikowski.github.io/the_lie/  
[2] https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4  
[3] http://graphql.org/
