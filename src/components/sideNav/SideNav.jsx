import { Link } from "react-router-dom";

function SideNav() {

    return (
        <nav className="side-nav w-64 h-full bg-gray-800 text-white flex flex-col items-center justify-start p-4">
            <ul className="w-full">
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg"> 
                     <Link className='text-white hover:text-gray-300 flex w-full h-full items-center justify-center' to="/apponitmentCalender">Appointments/Calender</Link>
                </li>
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">
                    <Link to="/stock" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Stock</Link>
                </li>
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">   
                    <Link to="/receipts" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Receipts</Link>
                </li>
                <li className="mb-4 bg-gray-700 h-10 flex items-center justify-center rounded-lg">   
                    <Link to="/register" className="text-white hover:text-gray-300 flex w-full h-full items-center justify-center">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideNav;