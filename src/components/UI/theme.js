const base = {
    main: '#FFA508',
    animS: '0.3s',
    animM: '0.5s',
    transparent: 'transparent',
    textSizeS: '0.8em',
    textSizeM: '1.2em',
    textSizeL: '1.8em',
    primary: '#FF343A',
    primaryL: '#FF5351',
    primaryD: '#C2282C',
    accent: '#98E837',
    accentD: '#98E837',
    accentL: '#98E837',
    spaceXS: '3',
    spaceS: '5',
    spaceM: '10',
    spaceL: '20',
    roundCorners: '5px',
    menuHeight: '50px',
    gameMenuHeight: '48px',
    mediaMinWidth: '500px',
    bg1: '#C72D79',
    bg2: '#C72B2D'
}

/*
    neutral: '#121212',
    neutralL: '#212121',
*/
export const night =     {
    ...base,
    neutral: '#121212',
    neutralL: '#212121',
    neutralD: 'black',
    text: '#CCCCCC',
    textInverted: '#CCCCCC',
}

export const day = {
    ...base,
    neutral: '#FFFCF4',
    neutralL: 'white',
    neutralD: '#E5E2DB',
    text: '#525252',
    textInverted: '#525252',
}