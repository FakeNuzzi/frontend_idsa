import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import VisualizzaMedico from '../components/viste/VisualizzaMedico';
import React from 'react';
import '@testing-library/jest-dom';

jest.mock('../adminServices/MedicoService', () => ({
  getMedico: jest.fn().mockResolvedValue({
    data: {
      id_utente: '1',
      nome: 'Test',
      cognome: 'User',
      data_n: '2000-01-01',
      cf: 'TESTCF',
      email: 'test@example.com',
      stipendio: '5000',
      specializ: 'Test Specialization',
    },
  }),
}));

describe('VisualizzaMedico component', () => {
  test('renders medico details', async () => {
    const history = createMemoryHistory();
    history.push('/visualizzaMedico/1/1');

    render(
        <Router history={history}>
          <VisualizzaMedico />
        </Router>
    );

    expect(screen.findByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test Specialization')).toBeInTheDocument();
    expect(screen.getByText('2000-01-01')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });
});