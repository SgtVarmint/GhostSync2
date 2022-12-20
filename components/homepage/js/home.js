const init = () =>
{
    byID('lobbyInput').value = getLocal('lobbyName');
    byID('userInput').value = getLocal('userName');
    
    byID('authNavBtn').onclick = toggleAuthField;
    byID('authButton').onclick = authButtonClick;
}

const byID = (elementName) => document.getElementById(elementName);

const getLocal = (itemName) => localStorage.getItem(itemName);

const setLocal = (itemName, value) => localStorage.setItem(itemName, value);

const lobbyButtonClick = () => 
{
    let lobbyName = byID('lobbyInput').value;
    let userName = formatUsername(byID('userInput').value);

    setLocal('lobbyName', lobbyName);
    setLocal('userName', userName);

    if(!getLocal('userId')) 
    {
        addUserToList();
    }

    redirect('components/lobby/lobby.html');
}

/**
 * It might be better to move this into a function that strips characters from all input, since there are a couple other places where user input is taken
 * @param {*} username 
 * @returns 
 */
const formatUsername = (username) => 
{	
	return username.replaceAll(/<|>/g, "").substring(0, 18);
}

const redirect = (path) => 
{
    let domain = document.location.href.split("http://")[1];
    window.location.replace("http://" + getLocal("auth") + domain + path);
}

window.addEventListener('load', init);