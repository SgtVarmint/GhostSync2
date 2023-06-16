const addUserToList = async (lobbyName, userName) => 
{
    let params = new FormData;
    params.append('lobbyName', lobbyName);
    params.append('userName', userName);
    const response = await fetch('/components/user/php/addNewUserId.php', {
        method: 'POST',
        body: params
    });
    return response;
}