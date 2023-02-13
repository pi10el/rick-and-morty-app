import { render } from '@testing-library/react';
import CustomButton from '../src/components/dumb/CustomButton';

describe('CustomButton component tests', () => {
  test('Button default props', () => {
    const { getByRole } = render(<CustomButton />);

    expect(getByRole('button')).toHaveClass('button_small');
    expect(getByRole('button')).toHaveClass('button_out');
    expect(getByRole('button')).not.toHaveClass('active');
  });

  test('Button size small', () => {
    const { getByRole } = render(<CustomButton size="small" />);
    expect(getByRole('button')).toHaveClass('button_small');
  });

  test('Button size middle', () => {
    const { getByRole } = render(<CustomButton size="middle" />);
    expect(getByRole('button')).toHaveClass('button_middle');
  });

  test('Button size fill', () => {
    const { getByRole } = render(<CustomButton size="fill" />);
    expect(getByRole('button')).toHaveClass('button_fill');
  });

  test('Button shadow out', () => {
    const { getByRole } = render(<CustomButton shadow="out" />);
    expect(getByRole('button')).toHaveClass('button_out');
  });

  test('Button shadow in', () => {
    const { getByRole } = render(<CustomButton shadow="in" />);
    expect(getByRole('button')).toHaveClass('button_in');
  });

  test('Button activated', () => {
    const { getByRole } = render(<CustomButton actived />);
    expect(getByRole('button')).toHaveClass('active');
  });

  test('Button disabled', () => {
    const { getByRole } = render(<CustomButton actived={false} />);
    expect(getByRole('button')).not.toHaveClass('active');
  });
});
