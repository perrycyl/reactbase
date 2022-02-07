/**
1920×1080
1536×864
1366×768
414×896
375×667
360×640
 * 
 */

const sizes = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1920px',
    wideDesktop: '2560px'
};

const maxSizes = {
    smallMobile: '479px',
    mobile: '767px',
    tablet: '1023px',
    laptop: '1919px',
    desktop: '2559px'
}

export const devices = {
    smallMobile: `(max-width: ${sizes.smallMobile})`,
    mobile: `(min-width: ${sizes.mobile}) and (max-width: ${maxSizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet}) and (max-width: ${maxSizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop}) and (max-width: ${maxSizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop}) and (max-width: ${maxSizes.desktop})`,
    wideDesktop: `(min-width: ${sizes.wideDesktop})`
};