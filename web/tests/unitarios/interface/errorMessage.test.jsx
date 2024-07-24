import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessage from '../../../pages/components/errorMessage';

describe('ErrorMessage Component', () => {
  test('renders error message for the given field', () => {
    const error = {
      'test-input': { message: 'Test error message' },
    };

    render(<ErrorMessage field='test-input' error={error} />);
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  test('does not render any message if no error is present', () => {
    const error = {};

    render(<ErrorMessage field='test-input' error={error} />);
    expect(screen.queryByText('Test error message')).not.toBeInTheDocument();
  });
});
