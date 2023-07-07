const url = 'http://localhost:8088'

export const loginUser = (user) => {
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify({
            email: user.username,
            password: user.password
        })
    }).then(response => response.json())
}

export const registerUser = (newUser) => {
    return fetch(`${url}/register`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newUser)
    }).then(response => response.json())
}