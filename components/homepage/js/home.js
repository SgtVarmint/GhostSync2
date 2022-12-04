const byID = (elementName) => document.getElementById(elementName);

const getLocal = (itemName) => localStorage.getItem(itemName);

const setLocal = (itemName, value) => localStorage.setItem(itemName, value);

const checkAuthorization = (response) => 
{
    if(response.status === 'denied') 
    {
        byID('lobbyButton').onclick = () => 
        {
            toastMessage("You are not authenticated for access to this site", 2, "body", "5%", "13%", "13%", "0");
        };
    } 
    else 
    {
        byID('lobbyButton').disabled = false;
        setLocal('auth', response.status);
    }
};

const init = () =>
{
    byID('lobbyInput').value = getLocal('lobbyName');
    byID('userInput').value = getLocal('userName');
    byID('lobbyButton').onclick = lobbyButtonClick;
    
    byID('authNavBtn').onclick = focusAuthInput;
    byID('authButton').onclick = authButtonClick;
    
    authenticate()
        .then((response) => { return response.json() })
        .then(checkAuthorization);
}

const focusAuthInput = () => 
{
    byID('auth').classList.toggle('hidden');
    byID('authText').focus();
}

async function authenticate()
{
    let params = new FormData;
    params.append('accessCode', getLocal('access'));
    const response = await fetch('/components/homepage/php/authentication.php', 
    {
        method: 'POST',
        body: params
    });
    return response;
}

const authButtonClick = () => 
{
    setLocal('access', byID('authText').value);
	setLocal('lobbyName', byID("lobbyInput").value.toUpperCase());
	setLocal('userName', byID('userInput').value);
	location.reload();
}

const lobbyButtonClick = () => 
{
    let lobbyName = byID('lobbyInput').value.toUpperCase();
    let userName = formatUsername(byID('userInput').value);

    setLocal('lobbyName', lobbyName);
    setLocal('userName', userName);

    if(!getLocal('userId')) 
    {

    }
}

/**
 * Cleans up username provided by user input by stripping bad characters
 * @param {*} username 
 * @returns 
 */
const formatUsername = (username) => 
{	
	return username.replaceAll(/<|>/g, "").substring(0, 18);
}

const redirect = () => 
{
    
}

window.addEventListener('load', init);