import './App.css'
function Navbar(){

    
    return(
        <div className="Navbar">
            <div className="title">
            <img src={require('./assets/craft.png') } style={{height:'35px',marginLeft:'120px'}} />
            </div>
            <div className="menu">
                <div className="menuItem">Product</div>
                <div className="menuItem">Solutions</div>
                <div className="menuItem">Resources</div>
                <div className="menuItem">Company</div>
                <div className="menuItem">Contact us</div>
            </div>
        </div>
    )
}

export default Navbar;