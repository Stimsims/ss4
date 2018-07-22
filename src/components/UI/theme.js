
const themes = [
    {
        main: 'orange',
        animS: '0.3s',
        animM: '0.5s',
        neutral: '#303030',
        neutralD: '#C4C4C4',
        neutralL: '#C4C4C4',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: '#E07831',
        primaryL: '#FFA638',
        primaryD: '#A64E20',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    },
    {
        main: 'red',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'red',
        neutralD: 'red',
        neutralL: 'red',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'red',
        primaryL: 'red',
        primaryD: 'red',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    },
    {
        main: 'pink',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'pink',
        neutralD: 'pink',
        neutralL: 'pink',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'pink',
        primaryL: 'pink',
        primaryD: 'pink',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    },
    {
        main: 'green',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'green',
        neutralD: 'green',
        neutralL: 'green',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'green',
        primaryL: 'green',
        primaryD: 'green',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
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
            let name = themeNames[counter % themeNames.length];
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