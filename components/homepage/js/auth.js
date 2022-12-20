const toggleAuthField = () => 
{
    byID('auth').classList.toggle('hidden');
    byID('authText').focus();
}

const defocusAuthInput = () => 
{
    byID('auth').classList.add('hidden');
}

const authenticate = async () =>
{
    let params = new FormData;
    params.append('accessCode', byID('authText').value);
    const response = await fetch('/components/homepage/php/authentication.php', 
    {
        method: 'POST',
        body: params
    });
    return response;
}

const checkAuthorization = (response) => 
{
    if(response.status === 'denied') 
    {
        byID('lobbyButton').onclick = toastMessage("You are not authenticated for access to this site", 2, "body", "5%", "13%", "13%", "0");
    } 
    else 
    {
        toastMessage("Successfully Authenticated", 2, "body", "5%", "13%", "13%", "0");
        byID('lobbyButton').disabled = false;
        byID('lobbyButton').onclick = lobbyButtonClick;
        setLocal('auth', response.status);
        setLocal('access', byID('authText').value);
    }
};

const authButtonClick = () => 
{
    authenticate()
    .then((response) => { return response.json() })
    .then(checkAuthorization)
    .then(defocusAuthInput);
}