const { createRequestHandler } = require("@mbarto/remix-run-vercel")

module.exports = createRequestHandler({
    build: require("./_build"),
})
