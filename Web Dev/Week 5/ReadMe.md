
        Headers

HTTP headers are key-value pairs sent between a `client` (like a web browser) and a `server` in an HTTP request or response. They convey metadata about the request or response, such as content type, auth information etc.

**Common headers**

1. Authorization (Sends the user auth information)
2. Content-Type - Type of information client is sending (json, binary etc)
3. Referer - Which URL is this request coming from

        Fetch API

There are 2 high level ways a browser can send requests to an HTTP server:
    1. From the browser URL (Default GET request)
    2. From an HTML form or JavaScript (Various request types)