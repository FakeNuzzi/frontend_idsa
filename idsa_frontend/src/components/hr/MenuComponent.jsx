import { useNavigate } from 'react-router-dom'

const MenuComponent = () => {

    const navigator = useNavigate();

    function menuPaziente() {
        navigator('/pazienti')
    }

    function menuMedici() {
        navigator('/medici')
    }

    return (
        <div className="container">
            <h2 className="text-center">Scegli la entità</h2>
            <button className='btn btn-primary mb-2' onClick={menuPaziente}>Paziente</button>
            <button className='btn btn-danger mb-2' onClick={menuMedici}>Medico</button>
        </div>

    )
}

export default MenuComponent