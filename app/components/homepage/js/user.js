const addUserToList = async (userInput) => 
{
    let params = new FormData;
    params.append('username', userInput);
    const response = await fetch('/components/homepage/php/user.php', {
        method: 'POST',
        body: params
    });
    return response;
}