import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../../pages/components/input';

const UseContext = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

test('should renders the input component with the correct props', () => {
  render(
    <UseContext>
      <Input
        label='test-input'
        name='test-input'
        size='large'
        error={false}
        className='test-class'
      />
    </UseContext>
  );

  const inputElement = screen.getByRole('textbox', { name: 'test-input' });
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveClass('test-class');
});
