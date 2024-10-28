import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export const MOBILE_STORY_PARAMETERS = {
    viewport: {
        defaultViewport: 'iphone5',
    },
    docs: {
        inlineStories: false,
        iframeHeight:
            INITIAL_VIEWPORTS.iphone5.styles &&
            'height' in INITIAL_VIEWPORTS.iphone5.styles &&
            INITIAL_VIEWPORTS.iphone5.styles.height,
    },
}

export const TABLET_STORY_PARAMETERS = {
    viewport: {
        viewports: MINIMAL_VIEWPORTS,
        defaultViewport: 'ipad10p',
    },
    docs: {
        inlineStories: false,
        iframeHeight:
            INITIAL_VIEWPORTS.ipad10p.styles &&
            'height' in INITIAL_VIEWPORTS.ipad10p.styles &&
            INITIAL_VIEWPORTS.ipad10p.styles.height,
    },
}

export const DEFAULT_STORY_PARAMETERS = {
    controls: {
        disable: false,
    },
    actions: {
        disable: false,
    },
}
