import { forwardRef } from 'react';

// components
import IconClose from '../../icons/IconClose';
import IconSearch from '../../icons/IconSearch';
import CustomButton from '../CustomButton';

// styles
import styles from './styles.module.scss';

interface Props {
  value: string;
  current: string;
  onSet: () => void;
  onFocus: () => void;
  onChange: (value: string) => void;
}

const Search = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { current, onChange, onFocus, onSet, value } = props;

  return (
    <div className={styles.search}>
      <CustomButton
        size="small"
        shadow="none"
        actived
        onClick={onSet}
        disabled={value === current}
      >
        <IconSearch />
      </CustomButton>
      <input
        ref={ref}
        type="text"
        placeholder="name..."
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[а-я\d ]/i, ''))}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value !== current) onSet();
          if (e.key === 'Delete' && value) onFocus();
        }}
      />

      <button
        type="button"
        className={styles.reset}
        disabled={!value}
        onClick={onFocus}
      >
        <IconClose />
      </button>
    </div>
  );
});

export default Search;
