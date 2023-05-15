import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AdminSidebar = () => {
    const { logout } = useAuth({ middleware: 'auth' });

    return (
        <aside className="md:w-60 2xl:w-72 h-screen">
            <div className="p-4">
                <img src="/img/logo.svg" alt="Imagen Logo" className="w-40" />
            </div>

            <nav className="flex flex-col p-4">
                <Link to="/admin" className="font-bold text-lg">
                    Ordenes
                </Link>

                <Link to="/admin/productos" className="font-bold text-lg">
                    Productos
                </Link>
            </nav>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center rounded bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate uppercase"
                    onClick={logout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
};
