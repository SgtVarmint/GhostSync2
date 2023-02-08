const byID = (elementName) => { return document.getElementById(elementName); }

const getCookie = (cookieName) => {
    let cookieList = document.cookie.split('; ');

    try {
        return cookieList.find((row)=>row.startsWith(cookieName)).split('=')[1];
    } catch {
        return null;
    }
}

const setHeader = (header, value) => {
    this.headers.set(header, value);   
}