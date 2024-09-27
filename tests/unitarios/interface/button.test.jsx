import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../../../pages/components/button';

describe('should renders the button correct props size', () => {
  test('should render component props default', () => {
    render(
      <Button style='filled' color='primary'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass(
      'text-white bg-primary w-auto hover:bg-primary-dark-800'
    );
  });

  test('should render component props size small', () => {
    render(
      <Button style='filled' color='primary' size='sm'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass('px-2 py-1 font-normal');
  });

  test('should render component props size medium', () => {
    render(
      <Button style='filled' color='primary' size='md'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass('px-4 py-2');
  });

  test('should render component props size large', () => {
    render(
      <Button style='filled' color='primary' size='xl'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass('px-6 py-4');
  });
});

describe('should render the button correct props style', () => {
  test('should render component props outline', () => {
    render(
      <Button style='outline' color='primary'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass('bg-transparent border w-auto');
  });

  test('should render component props icon', () => {
    render(
      <Button style='icon' color='primary'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass('p-4 items-center');
  });

  test('should render component props icon', () => {
    render(
      <Button style='link' color='primary'>
        Test Button
      </Button>
    );

    const butoonElement = screen.getByText('Test Button');
    expect(butoonElement).toBeInTheDocument();
    expect(butoonElement).toHaveClass('text-primary');
  });
});
