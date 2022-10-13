const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
})
