module.exports = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    env: {
        API_URL: 'http://strapi:1337',
        IMG_URL: 'http://193.168.147.69:1337'
    },
}
