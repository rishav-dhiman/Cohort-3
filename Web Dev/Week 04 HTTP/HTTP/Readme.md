        Introduction

1. Intro to the HTTP Protocol, what does it solve
    1. Exploring the network tab in the `chrome developer tools`
    2. Request Response model
2. Diving into some HTTP Constructs
    1. Domain name/IP
    2. Port
    3. Methods
    4. Plaintext vs JSON vs HTML response
    5. Status codes
    6. Body, Headers
    7. Routes

        Request response model

The request-response model is a fundamental communication pattern.
It describes how data is exchanged between a `client` and a `server` or between two systems.
There are various other protocols that exist that let machines communicate with each other.

1. Websockets
2. WebRTC
3. GRP

        Domain names

The way to reach a sever is through its `Domain name` . For example
1. google.com
2. app.100xdevs.com
3. x.com

        IPs

Every domain that you see, actually has an underlying IP that it `resolves` to.
You can check the ip by running the `ping` command.
When you try to visit a website, you are actually visiting the underlying IP address.

        Ports

In networking, **ports** are `logical` endpoints used by protocols to identify `specific processes`  running on a computer or server. They help direct network traffic to the correct application or service on a system.
We need ports to hit different processes

Port 443 is the default port. Whenever your website starts with https, it goes to the 443 port automatically

1. HTTP => 80
2. HTTPS => 443
3. SSH => 22

        Methods

HTTP methods are used to specify the type of action that the client wants to perform on a resource on the server.

💡 You done NEED to use all the methods, but you always should. You can do everything you want with a `GET` or `POST`  method, but it is usually advisable to use them right.

Common methods - CRUD
1. READ - GET -  Retrieve data from a server. (Get my TODOS)
2. CREATE - POST - Submit data to be processed by a server. (Create a TODO)
3. UPDATE - PUT - Update or create a resource on the server (Update my todo)
4. DELETE - Remove a resource from the server. (Delete my todo)

        Responce

The response represents what the server returns you `in response` to the request.
It could be

1. Plaintext data - Not used as often
2. HTML - If it is a website
3. JSON Data - If you want to fetch some data (user details, list of todos…)

        JSON

**JSON** stands for **JavaScript Object Notation**. It is a lightweight, text-based format used for data interchange

        Status codes

200 series (Success)
300 series (Redirection)
400 series (Client Error)
500 series (Server Error)

        Body

In HTTP communications, the **body** (or **payload**) refers to the part of an HTTP message that contains the actual data being sent to the server.

It is usually `JSON` data that is transferred to the server.

        Routes

In the context of HTTP, **routes** are paths or endpoints that define how incoming requests are handled by a server. Routing is a mechanism used to direct incoming HTTP requests to the appropriate handler functions or resources based on the URL path.