# Todo React UI

---

A simple todo ``React`` UI for a `todo service`.

## OpenApi

To generate the `OpenApi` client stubs for the `todo service` the backend service must be running on port `8080`.
As soon as it is running we can run `npm run generate:openapi` in the terminal. This command will create a `api` folder
in the `src` folder where all the client stubs for the `todo service` are located.

For more information see [this](https://blog.logrocket.com/generating-integrating-openapi-services-react/) blog post.

## Local Development

For local development the following steps must be done prior starting the dev server.
1. Make sure the backend `todo service` is running on port `8080`.
2. Run `npm run generate:openai` to generate the `OpenApi` client stubs.
3. Run `npm run start:proxy:dev` to start local `CORS` proxy server which is used to send request to the locally
   running backend `todo service`.
