import React, { useEffect, useState } from 'react'
import { listReferti} from '../../services/RefertoService'
import { useNavigate } from 'react-router-dom'


const VisualizzaCartella = () => {

    const [referti, setReferti] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllReferti();
    }, [])

    function getAllReferti() {
        listReferti().then((response) => {
            setReferti(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function back2Menu() {
        navigator('/MenuComponent')
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista referti</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>codice visita</th>
                        <th>referto</th>
                        <th>prescrizione</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        referti.map(referto =>
                            <tr key={referto.id_appuntamento}>
                                <td>{referto.id_appuntamento}</td>
                                <td>{referto.referto}</td>
                                <td>{referto.prescr}</td>
                             
                            </tr>)
                    }
                </tbody>
                <button className='btn btn-primary mb-2' onClick={back2Menu}>Torna al Menu</button>
            </table>
        </div>
    )
}

export default VisualizzaCartella