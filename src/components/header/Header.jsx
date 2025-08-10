import HomeIcon from '../../assets/images/header/home.png';
import Logo from '../../assets/images/header/logoA.png';
import Button from '../button/Button'

function Header() {

    function handleSignOut(e) {
        e.preventDefault();
        console.log('You clicked signout.');
    }


    return (
        <header className="w-full h-23 bg-red-500">
            <div className="header-container w-full flex items-center justify-between p-4">
                <div className="home-link">
                    <a href="/" className="block max-w-15 w-full">
                        <img src={HomeIcon} alt="Home" />
                    </a>
                </div>
                <div className="logo-container">
                    <img className="max-w-15 w-full" src={Logo} alt="Logo" />
                </div>
                <div className="button-container">
                    <Button text="Sign Out" color="sky-500" tailwindClasses="h-10 max-w-25 w-full border-black rounded-lg text-white font-bold p-1" action={handleSignOut}/>
                </div>
            </div>
        </header>
    );
}

export default Header;