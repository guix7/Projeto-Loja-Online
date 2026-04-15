import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            
            {/* LOGO */}
            <h1 className="text-xl font-bold">
                Loja Virtual
            </h1>

            {/* LINKS */}
            <div className="flex gap-4">
                <Link 
                    to='/' 
                    className="hover:text-gray-300 transition"
                >
                    Home
                </Link>

                <Link 
                    to='/login' 
                    className="hover:text-gray-300 transition"
                >
                    Login
                </Link>

                <Link 
                    to='/register' 
                    className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Cadastro
                </Link>
            </div>

        </nav>
    )
}

export default Navbar;