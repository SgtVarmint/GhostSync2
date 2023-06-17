const byID = (elementName) => { return document.getElementById(elementName); }

const getCookie = (cookieName) => {
    let cookieList = document.cookie.split('; ');

    try {
        return cookieList.find((row)=>row.startsWith(cookieName)).split('=')[1];
    } catch {
        return null;
    }
}

const changeTheme = () => {
    var root = document.querySelector(':root')

    var rootStyles = getComputedStyle(root)
    var mainColor = rootStyles.getPropertyValue('--primary')
    console.log("main color = ", mainColor)
    root.style.setProperty('--primary', '#3D315B')
}