const sizes = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px',
};

const maxSizes = {
    mobile: '767px',
    tablet: '1023px',
    laptop: '2559px'
}

export const devices = {
    mobile: `(min-width: ${sizes.mobile}) and (max-width: ${maxSizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet}) and (max-width: ${maxSizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop}) and (max-width: ${maxSizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
};