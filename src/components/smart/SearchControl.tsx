import { useRef, useState } from 'react';

// redux
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

// components
import Search from '../dumb/Search';

function SearchControl(): JSX.Element {
  const refInput = useRef<HTMLInputElement>(null);

  const search = useAppSelector((s) => s.params.search);
  const { setSearchParams } = useAppDispatch();

  const [value, setValue] = useState(search);

  const onFocus = () => {
    setValue('');
    refInput.current?.focus();
  };

  const onSet = () => {
    setSearchParams({ search: value, page: '' });
    refInput.current?.focus();
  };

  return (
    <Search
      ref={refInput}
      value={value}
      current={search}
      onChange={setValue}
      onSet={onSet}
      onFocus={onFocus}
    />
  );
}

export default SearchControl;
