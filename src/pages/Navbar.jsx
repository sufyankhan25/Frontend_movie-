import {Link} from 'react-router-dom'
import  '../css/Navbar.css'
function Navbar(){

return(
    <nav className='navbar'>
<div className="className='Navbar-brands'">
<Link to="/">Movie App</Link>
</div>
<div>
<Link to="/">Home</Link>
<Link to="/favourite">Favourites</Link>
</div>
</nav>
)

}

export default Navbar