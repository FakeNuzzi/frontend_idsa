import React, { useEffect, useState } from 'react'
import { listTicket} from '../listeServices/ticketService'
import { useNavigate } from 'react-router-dom'


const UserInterfaceComponent = () => {

    const [tickets, setTickets] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllTicket();
    }, [])

    function getAllTicket() {
        listTicket().then((response) => {
            setTickets(response.data);
        }).catch(error => {
            console.error(error);
        })
    }


    function pagaTicket(id_ticket) {
        navigator(`/pagaTicket/${id_ticket}`)
    }

    function back2Menu() {
        navigator('/MenuComponent')
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista Ticket</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>prezzo</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        tickets.map(ticket =>
                            <tr key={ticket.id_ticket}>
                                <td>{ticket.id_ticket}</td>
                                <td>{ticket.prezzo}</td>
                                
                                <td>
                                    <button className='btn btn-info' onClick={() => pagaTicket(ticket.id_ticket)}>paga</button>
                                </td>
                            </tr>)
                    }
                </tbody>
                <button className='btn btn-primary mb-2' onClick={back2Menu}>Torna al Menu</button>
            </table>
        </div>
    )
}

export default UserInterfaceComponent