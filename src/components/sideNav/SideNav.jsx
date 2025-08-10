function SideNav() {

    return (
        <nav className="side-nav w-64 h-full bg-gray-800 text-white flex flex-col items-center justify-start p-4">
            <ul className="w-full">
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">
                    <a href="/" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Appointments/Calender</a>
                </li>
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">
                    <a href="/about" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Stock</a>
                </li>
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">   
                    <a href="/services" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Receipts</a>
                </li>
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">   
                    <a href="/services" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Register</a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNav;