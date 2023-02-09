const init = () =>
{
    byID('lobbyInput').value = getCookie('lobbyName') ?? '';
    byID('userInput').value = getCookie('userName') ?? '';
    byID('authText').value = getCookie('accessKey') ?? '';

    setKeyEvents();

    byID('authMenuButton').onclick = toggleAuthField;
    byID('authButton').onclick = authButtonClick;

    byID('themeChange').onclick = changeTheme;
}

const setKeyEvents = () => {
    window.addEventListener('keyup', (event) => {
        if(event.code === 'Enter') {
            event.preventDefault();
			document.getElementById("userInput").focus(); 
        }
    });

    document.getElementById("userInput").addEventListener("keyup", (event) => {
		if (event.code === 'Enter')
		{
			event.preventDefault();
			document.getElementById("lobbyButton").click();
		}
	});
	
	document.getElementById("authText").addEventListener("keyup", (event) => {
		if (event.code === 'Enter')
		{
			event.preventDefault();
			document.getElementById("authButton").click();
		}
	});
}

const lobbyButtonClick = () => 
{
    let lobbyName = byID('lobbyInput').value;
    let userName = formatUsername(byID('userInput').value);

    document.cookie = `lobbyName=${lobbyName}`;
    document.cookie = `userName=${userName}`;

    if(!getCookie('userId')) 
    {
        addUserToList(byID('userInput').value)
        .then((response) => {return response.json()})
        .then((response) => {document.cookie = `userId=${response.userId}`});
    }

    setTimeout(() => {document.location = 'components/lobby/lobby.html'}, 50);
}

// const sanitize = (value)  => {

// }

/**
 * It might be better to move this into a function that strips characters from all input, since there are a couple other places where user input is taken
 * (validateUsername, validateLobbyName, validateSomethingElse)
 * @param {*} username 
 * @returns 
 */
const formatUsername = (username) => 
{	
	return username.replaceAll(/<|>/g, "").substring(0, 18);
}

window.addEventListener('load', init);