function Navbar({setCurrentPage}) {
    return (<nav>
        <div class="navbar">
            <div class="max-width">
                <div class="logo"><a href="#">Pabitra <span>Tamang.</span></a>
                </div>
                <ul class="menu">
                    <li><a onClick={()=>setCurrentPage('About')}>About me</a></li>
                    <li><a onClick={()=>setCurrentPage('Project')}>Projects</a></li>
                    <li><a onClick={()=>setCurrentPage('Contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>)
}
export default Navbar;