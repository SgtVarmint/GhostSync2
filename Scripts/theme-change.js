function themeChanger() {
    var root = document.querySelector(':root')

    var rootStyles = getComputedStyle(root)
    var mainColor = rootStyles.getPropertyValue('--primary')
    console.log("main color = ", mainColor)
    root.style.setProperty('--primary', '#3D315B')
}