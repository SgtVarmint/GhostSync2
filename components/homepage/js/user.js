const addUserToList = async () => 
{
    let params = new FormData;
    params.append('username', byID('userInput').value);
    const response = await fetch('/components/homepage/php/user.php', {
        method: 'POST',
        body: params
    });
    return response;
}