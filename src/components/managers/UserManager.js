const url = 'http://localhost:8088/'

export const createNewUser = (user) => {
    return fetch(`${url}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
}

export const getUserByEmail = (email) => {
    return fetch(`${url}/users?email=${email}`)
        .then(response => response.json())
}

export const getAllUsers = () => {
    return fetch(`${url}/users`)
     .then(response => response.json())
}

export const getSingleUser = (userId) => {
    return fetch(`${url}/users/${userId}`)
        .then(response => response.json())
}

export const deleteUser = (userId) => {
    return fetch(`${url}/users/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}