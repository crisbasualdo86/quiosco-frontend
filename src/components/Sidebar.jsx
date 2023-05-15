import { Categoria } from './Categoria';
import { useQuiosco } from '../hooks/useQuiosco';
import { useAuth } from '../hooks/useAuth';

export const Sidebar = () => {
    const { categorias } = useQuiosco();
    const { logout, user } = useAuth({ middleware: 'auth' });

    return (
        <aside className="md:w-60 2xl:w-72">
            <div className="p-4">
                <img className="w-40" src="img/logo.svg" alt="Image Logo" />
            </div>

            <p className="my-2 text-xl ml-4 font-bold">Hola {user?.name}!</p>

            <div className="mt-6 2xl:mt-10">
                {categorias.map((categoria) => (
                    <Categoria key={categoria.id} categoria={categoria} />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center rounded bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate uppercase"
                    onClick={logout}
                >
                    Cancelar Orden
                </button>
            </div>
        </aside>
    );
};
