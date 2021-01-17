import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'


describe('login', () => {
  test('user name input should be in the document', () => {
    const component = render(<MemoryRouter><App /></MemoryRouter>);
    const inputNode = component.getByPlaceholderText('Your Username');
    expect(inputNode).toBeInTheDocument(true);
  });

  test('password input should be in the document', () => {
    const component = render(<MemoryRouter><App /></MemoryRouter>);
    const inputNode = component.getByPlaceholderText('Your Password');
    expect(inputNode).toBeInTheDocument(true);
  });

  test('email input should accept text', () => {
    const component = render(<MemoryRouter><App /></MemoryRouter>);
    const emailInputNode = component.getByPlaceholderText('Your Username');
    expect(emailInputNode.value).toMatch('');
    fireEvent.change(emailInputNode, {target: { value: 'testing' }});
    expect(emailInputNode.value).toMatch('testing');
  });

  test('password input should accept text', () => {
    const component = render(<MemoryRouter><App /></MemoryRouter>);
    const pwInputNode = component.getByPlaceholderText('Your Password');
    expect(pwInputNode.value).toMatch('');
    fireEvent.change(pwInputNode, {target: { value: 'testing' }});
    expect(pwInputNode.value).toMatch('testing');
  });

  test('button is disabled if username and password fields are blank', () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>);
    const buttonNode = getByRole('button');
    expect(buttonNode).toBeDisabled();
  });

  test('can submit form if username and password fields are present', () => {
    const component = render(<MemoryRouter><App /></MemoryRouter>);
    const buttonNode = component.getByRole('button');
    const emailInputNode = component.getByPlaceholderText('Your Username');
    const pwInputNode = component.getByPlaceholderText('Your Password');
    fireEvent.change(emailInputNode, { target: { value: 'test' } });
    fireEvent.change(pwInputNode, { target: { value: 'test' } });
    expect(buttonNode).not.toBeDisabled();
  });
});



