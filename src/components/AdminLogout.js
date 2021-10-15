const AdminLogout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/adminhome';
        console.log("Logged out")
    }
    return ( 
            <button type = "button" class="btn btn-link" onClick={handleClick}>Logout</button>
            
        );
}
        
export default AdminLogout;