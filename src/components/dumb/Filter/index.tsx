// components
import CustomButton from '../CustomButton';

// style
import styles from './styles.module.scss';

// const
const fields: { [key: string]: string[] } = {
  status: ['Alive', 'Dead', 'unknown'],
  gender: ['Genderless', 'Male', 'Female', 'unknown'],
};

interface Props {
  isChecked: (key: string, item: string) => boolean;
  setFilter: (key: string, value: string) => void;
}

function Filter(props: Props): JSX.Element {
  const { isChecked, setFilter } = props;

  return (
    <div className={styles.filter}>
      {Object.keys(fields).map((field) => (
        <fieldset key={field}>
          <legend>{`${field[0].toUpperCase()}${field.slice(1)}`}</legend>
          {fields[field].map((item) => (
            <CustomButton
              key={item}
              size="fill"
              actived={isChecked(field, item)}
              onClick={() => setFilter(field, item)}
            >
              {item}
            </CustomButton>
          ))}
        </fieldset>
      ))}
    </div>
  );
}

export default Filter;
