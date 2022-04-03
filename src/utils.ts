export const getCurrentUser = () => {
    const userInfo = localStorage.getItem("userData")
    return userInfo === null ? null : JSON.parse(userInfo)
}