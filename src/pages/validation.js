export function ProtectedRoute({ children }) {
    if (!localStorage.getItem("token")) {
        location.href = "/";
        return;
    }
    return children;
}

export function Logout({ children }) {
    if (!localStorage.getItem("token")) {
        location.href = "/";
        return null;
    }
    return children;
}