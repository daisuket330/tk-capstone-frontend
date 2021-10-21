const UserLogout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/';
        console.log("Logged out")
    }
    return ( 
            <button type = "button" className="btn btn-link" onClick={handleClick}>Logout</button>
            
        );
}
        
export default UserLogout;