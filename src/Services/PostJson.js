export function PostData(userData) {
    let BaseUrl = 'http://localhost:8080/puzzleApp/hello.php';

    const myData = {
        value: userData
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(myData)
    };

    return new Promise((resolve, reject) => {
        fetch(BaseUrl, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson)
            })
            .catch((error) => {
                console.error(error);
                reject(error)
            });
    })
}