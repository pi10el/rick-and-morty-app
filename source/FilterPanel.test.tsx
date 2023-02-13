import userEvent from '@testing-library/user-event';
import renderWithRedux from '../../helpers/renderWithRedux';
import FilterPanel from '../src/components/smart/FilterPanel';

describe('FilterPanel component tests', () => {
  test('Reset filter button', async () => {
    const { getByTestId, getAllByTestId } = renderWithRedux(<FilterPanel />);
    const resetBtn = getByTestId('filter-reset');
    const statusBlock = getAllByTestId('filter-item-status');
    const genderBlock = getAllByTestId('filter-item-gender');

    expect(resetBtn).toBeDisabled();
    await userEvent.click(statusBlock[0]);
    await userEvent.click(genderBlock[0]);
    expect(resetBtn).not.toBeDisabled();
    await userEvent.click(resetBtn);
    expect(resetBtn).toBeDisabled();
  });

  test('Block checking buttons', async () => {
    const { getAllByTestId } = renderWithRedux(<FilterPanel />);
    const statusBlock = getAllByTestId('filter-item-status');
    const genderBlock = getAllByTestId('filter-item-gender');

    expect(statusBlock[0]).not.toHaveClass('active');
    await userEvent.click(statusBlock[0]);
    expect(statusBlock[0]).toHaveClass('active');
    await userEvent.click(statusBlock[1]);
    expect(statusBlock[1]).toHaveClass('active');

    expect(genderBlock[0]).not.toHaveClass('active');
    await userEvent.click(genderBlock[0]);
    expect(genderBlock[0]).toHaveClass('active');
    await userEvent.click(genderBlock[1]);
    expect(genderBlock[1]).toHaveClass('active');
  });
});
