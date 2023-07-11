import {Link} from 'react-router-dom';
import { useCartContext } from '../provider/CartProvider';
import { useState } from 'react';
import SideBar from './SideBar';

const NavBar = () => {

    const { state: {totalItem},} = useCartContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
      };
    
      const handleMenuClose = () => {
        setIsMenuOpen(false);
      };
    
  

    return (
        <nav className="bg-gray-900 text-white">
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                    <Link to="/">
                        <span>FakeStore</span>
                    </Link>
                </div>

                <div className="relative z-50">

            <Link to="/carrito">
                <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
   
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{totalItem}</div>
                </button>
            </Link>
           

            {isMenuOpen && (
                <SideBar/>
                )}
                </div>
            </div>
            
          

        
        </nav>
     
     
    )
}

export default NavBar;