const { channel } = require("bridge")

channel.addListener("fromReact", msg => channel.send("fromNode", `Replying to '${msg}'.`))