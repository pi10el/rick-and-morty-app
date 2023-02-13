import { useState } from 'react';

// redux
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

// components
import Filter from '../dumb/Filter';
import SidebarContainer from '../dumb/SidebarContainer';
import CustomButton from '../dumb/CustomButton';

function FilterPanel(): JSX.Element {
  const status = useAppSelector((s) => s.params.status);
  const gender = useAppSelector((s) => s.params.gender);

  const [isOpen, setOpen] = useState(false);

  const { setSearchParams } = useAppDispatch();

  const isDisabled = !status && !gender;

  const setFilter = (key: string, value: string) => {
    setSearchParams({ [key]: value, page: '' });
  };

  const resetFilter = () => {
    setSearchParams({ status: '', gender: '', page: '' });
  };

  const isChecked = (key: string, item: string) =>
    ({ status, gender }[key] === item);

  return (
    <SidebarContainer
      type="filter"
      isOpen={isOpen}
      setOpen={() => setOpen(!isOpen)}
    >
      <Filter isChecked={isChecked} setFilter={setFilter} />
      <CustomButton
        size="fill"
        shadow="in"
        actived
        onClick={resetFilter}
        disabled={isDisabled}
      >
        Reset
      </CustomButton>
    </SidebarContainer>
  );
}

export default FilterPanel;
