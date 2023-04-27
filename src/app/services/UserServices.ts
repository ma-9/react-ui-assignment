function getUsers(): any[] {
    try {
        return JSON.parse(localStorage.getItem("react_ui_assignment_users") || '')
    } catch (error) {
        return [];
    };
}

const setUsers = (users = []) => {
    try {
        localStorage.setItem("react_ui_assignment_users", JSON.stringify(users))
    } catch (error) {
        console.warn('react_ui_assignment_error', error)
    };
}

const UserServices = {
    getUsers,
    setUsers,
};

export default UserServices;