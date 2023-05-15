import PropTypes from 'prop-types';
import { useQuiosco } from '../hooks/useQuiosco';

export const Categoria = ({ categoria }) => {
    const { handleClickCategoria, categoriaActual } = useQuiosco();
    const { id, nombre, icono } = categoria;

    return (
        <button
            type="button"
            onClick={() => handleClickCategoria(id)}
            className={`${
                categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'
            } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer h-14 2xl:h-20`}
        >
            <img
                className="w-8 2xl:w-12"
                src={`img/icono_${icono}.svg`}
                alt={nombre}
            />
            <p className="2xl:text-lg font-bold cursor-pointer truncate">
                {nombre}
            </p>
        </button>
    );
};

Categoria.propTypes = {
    categoria: PropTypes.object.isRequired,
};
