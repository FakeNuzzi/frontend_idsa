import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import ProfiloMedico from '../components/viste/ProfiloMedico'
import { createMedico, getMedico, updateMedico } from '../adminServices/MedicoService'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import '@testing-library/jest-dom'

jest.mock('../adminServices/MedicoService')

describe('ProfiloMedico', () => {
  test('renders form with empty fields when no id_medico is provided', async () => {
    render(<ProfiloMedico />, { wrapper: MemoryRouter })

    expect(screen.getByLabelText('First Name:')).toHaveValue('')
    expect(screen.getByLabelText('Last Name:')).toHaveValue('')
    // ...assert the rest of the fields...
  })

  test('fetches and displays data when id_medico is provided', async () => {
    getMedico.mockResolvedValueOnce({
      data: {
        nome: 'Test',
        cognome: 'User',
        data_n: '1999-01-01',
        cf: 'TSTUSR99A01Z999A',
        email: 'test.user@gmail.com',
        password: 'password',
        stipendio: 1000,
        specializza: 'specializzazione',
      }
    })

    render(
      <MemoryRouter initialEntries={['/medico/1']}>
        <Routes>
          <Route path="/medico/:id_medico" element={<ProfiloMedico />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => screen.getByLabelText('First Name:'))

    expect(screen.getByLabelText('First Name:')).toHaveValue('Test')
    expect(screen.getByLabelText('Last Name:')).toHaveValue('User')
    // ...assert the rest of the fields...
  })

  test('calls createMedico when form is submitted with no id_medico', async () => {
    createMedico.mockResolvedValueOnce({})

    render(<ProfiloMedico />, { wrapper: MemoryRouter })

    fireEvent.click(screen.getByText('Submit'))

    await waitFor(() => expect(createMedico).toHaveBeenCalled())
  })

  test('calls updateMedico when form is submitted with id_medico', async () => {
    getMedico.mockResolvedValueOnce({
        data: {
          nome: 'Test',
          cognome: 'User',
          data_n: '1999-01-01',
          cf: 'TSTUSR99A01Z999A',
          email: 'test.user@gmail.com',
          password: 'password',
          stipendio: 1000,
          specializza: 'specializzazione',
        }
    })
    updateMedico.mockResolvedValueOnce({})

    render(
      <MemoryRouter initialEntries={['/medico/1']}>
        <Routes>
          <Route path="/medico/:id_medico" element={<ProfiloMedico />} />
        </Routes>
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('Submit'))

    await waitFor(() => expect(updateMedico).toHaveBeenCalled())
  })
})