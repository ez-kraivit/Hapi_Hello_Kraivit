exports.plugin = {
    name: "HelloFun",
    once: true,
    register: async (server, options) => {
        server.app._HelloJA = 'Hello World!';
    }
}