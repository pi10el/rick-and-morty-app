import userEvent from '@testing-library/user-event';
import renderWithRedux from '../../helpers/renderWithRedux';
import SearchControl from './SearchControl';

describe('SearchControl component tests', () => {
  test('Input change event', async () => {
    const { getByTestId } = renderWithRedux(<SearchControl />);
    const input = getByTestId('search-input');

    expect(input).toHaveValue('');
    await userEvent.type(input, 'Rick');
    expect(input).toHaveValue('Rick');
  });

  test('Input clear button', async () => {
    const { getByTestId } = renderWithRedux(<SearchControl />);
    const input = getByTestId('search-input');
    const clearBtn = getByTestId('search-clear');

    expect(clearBtn).toBeDisabled();
    await userEvent.type(input, 'Rick');
    expect(clearBtn).not.toBeDisabled();
    await userEvent.click(clearBtn);
    expect(input).toHaveFocus();
  });

  test('Input set button', async () => {
    const { getByTestId } = renderWithRedux(<SearchControl />);
    const input = getByTestId('search-input');
    const setBtn = getByTestId('search-set');

    expect(setBtn).toBeDisabled();
    await userEvent.type(input, 'Rick');
    expect(setBtn).not.toBeDisabled();
    await userEvent.click(setBtn);
    expect(input).toHaveFocus();
    expect(setBtn).toBeDisabled();
  });

  test('Input value search options', () => {
    const { getByTestId } = renderWithRedux(<SearchControl />, {
      params: { search: 'Rick' },
    });

    expect(getByTestId('search-input')).toHaveValue('Rick');
  });
});
