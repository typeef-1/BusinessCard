module.exports = {
    content:[
        './components/**/*.{vue.js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{vue.js}',
    ],
    plugins:[
        require('@tailwindcss/typography')
    ],
    theme: {
        extend: {
            fontFamily:{
                custom:['CustomFont', 'monospace']
            }
        }
    }
}