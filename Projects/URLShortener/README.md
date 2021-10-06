# API Project: URL Shortener Microservice by Soumyadeepta Das


### User Stories

1. POST a URL to `[project_url]/api/shorturl/<new url>` and receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. Valid URL format `http(s)://www.example.com(/more/routes)` , invalid format throws error like `{"error":"invalid URL"}`.
3. the shortened URL redirects to the original link.


#### Usage:

[this_project_url]/api/shorturl/1

#### Will redirect to:

https://www.google.com