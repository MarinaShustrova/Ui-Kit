const { mergeConfig } = require('vite')

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@chromatic-com/storybook',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': resolve(__dirname, './src'),
                },
            },
        })
    },
    docs: {},
}
