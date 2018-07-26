
const themes = [
    {
        main: 'orange',
        animS: '0.3s',
        animM: '0.5s',
        neutral: '#383838',
        neutralD: '#141414',
        neutralL: '#C4C4C4',
        text: '#141414',
        textInverted: '#DEDEDE',
        textSizeS: '0.8em',
        textSizeM: '1.2em',
        textSizeL: '1.8em',
        transparent: 'transparent',
        primary: '#E07831',
        primaryL: '#FFA638',
        primaryD: '#A64E20',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB',
        spaceXS: '3',
        spaceS: '5',
        spaceM: '10',
        spaceL: '20'
    },
    {
        main: '#FFA508',
        animS: '0.3s',
        animM: '0.5s',
        neutral: '#2E2547',
        neutralD: '#1C162B',
        neutralL: '#392E59',
        text: '#150E19',
        textInverted: '#C39BE3',
        transparent: 'transparent',
        textSizeS: '0.8em',
        textSizeM: '1.2em',
        textSizeL: '1.8em',
        primary: '#FFA508',
        primaryL: '#FFD377',
        primaryD: '#9C2E0F',
        accent: '#E3658B',
        accentD: '#9E3A50',
        accentL: '#F791B2',
        spaceXS: '3',
        spaceS: '5',
        spaceM: '10',
        spaceL: '20'
    },
    {
        main: '#89C939',
        animS: '0.3s',
        animM: '0.5s',
        neutral: '#061333',
        neutralD: '#030A19',
        neutralL: '#081C4A',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        textSizeS: '0.8em',
        textSizeM: '1.2em',
        textSizeL: '1.8em',
        primary: '#89C939',
        primaryL: '#C3ED92',
        primaryD: '#3B611B',
        accent: '#F2E451',
        accentD: '#978623',
        accentL: '#F2E291',
        spaceXS: '3',
        spaceS: '5',
        spaceM: '10',
        spaceL: '20'
    }
]

// const pick = () => {
//     let r = Math.random();
//     console.log("pick theme, r = " + r);
//         switch(true){
//             case (r < 0.25):
//                 return 'day'
//             case (r < 0.5):
//                 return 'night'
//             case (r < 0.75):
//                 return 'other'
//             default: 
//                 return 'default'
//         }
// }
const themeNames = ['default', 'day', 'night', 'other'];
const theme = () => {
    let counter = 0;
    return {
        setTheme: (theme) => {
            //caller passes in the theme object, this method sets a prop theme with name on it
            counter++;
            let name = themeNames[counter % (themeNames.length-1)];
            console.log("theme counter " + counter + " name " + name);
            theme.theme = name;
        },
        theme: 'default',
        default: themes[0],
        day: themes[1],
        night: themes[2],
        other: themes[3]
    }
}

export default theme

// export default {
//     main: 'orange',
//     animS: '0.3s',
//     animM: '0.5s',
//     neutral: '#303030',
//     neutralD: '#C4C4C4',
//     neutralL: '#C4C4C4',
//     text: '#303030',
//     textInverted: '#D1D1D1',
//     transparent: 'transparent',
//     primary: '#E07831',
//     primaryL: '#FFA638',
//     primaryD: '#A64E20',
//     accent: '#24C2C7',
//     accentD: '#157275',
//     accentL: '#7ACFDB'
// };








/*
neutral: '#CFC4A9',
F7E9A8
153F4C
black and grey: 2B284C   F7EBA8
limey green: 86BF33 L B0FC43 D 608A25
dull yellow: D4AF2C
aqua blue: 38B1C7
purple looks good for info
pink C75DB7 L EB8CE9
orange: E07831 L FFA638
*/