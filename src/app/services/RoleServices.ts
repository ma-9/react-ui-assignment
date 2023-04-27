function getRoles(): any[] {
    try {
        return JSON.parse(localStorage.getItem("react_ui_assignment_roles") || '')
    } catch (error) {
        return [];
    };
}

const setRoles = (roles = []) => {
    try {
        localStorage.setItem("react_ui_assignment_roles", JSON.stringify(roles))
    } catch (error) {
        console.warn('react_ui_assignment_error', error)
    };
}

const RoleServices = {
    getRoles,
    setRoles,
};

export default RoleServices;