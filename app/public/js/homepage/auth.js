const toggleAuthField = () => 
{
    byID('authMenu').classList.toggle('hidden');
    byID('authText').focus();
}

const defocusAuthInput = () => 
{
    byID('authMenu').classList.toggle('hidden');
}

const authenticate = async () =>
{
    let params = new FormData;
    params.append(0, {AccessCode:byID('authText').value});
    const response = await fetch('/Authentication/Authentication.php', 
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({AccessCode: byID('authText').value}),
    });
    return response;
}

const checkAuthorization = (response) => 
{
    response = JSON.parse(response)
    if(response.status === 'denied') 
    {
        byID('lobbyButton').onclick = toastMessage("You are not authenticated for access to this site", 2, "body", "5%", "13%", "13%", "0");
    } 
    else 
    {
        toastMessage("Successfully Authenticated", 2, "body", "5%", "13%", "13%", "0");
        byID('lobbyButton').disabled = false;
        byID('lobbyButton').onclick = lobbyButtonClick;
        document.cookie = 'accessKey=' + byID('authText').value;
    }
};

const authButtonClick = () => 
{
    authenticate()
    .then((response) => { return response.json() })
    .then(checkAuthorization)
    .then(defocusAuthInput);
}