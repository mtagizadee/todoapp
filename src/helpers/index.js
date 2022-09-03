const generateAuthHeader = (token) => {
    return { Authorization: `Bearer ${token}` }
}

export default {
    generateAuthHeader
}