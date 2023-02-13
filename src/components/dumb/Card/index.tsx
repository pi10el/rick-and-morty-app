import { useState } from 'react';

// components
import loader from '../../../assets/loader.svg';

// styles
import styles from './styles.module.scss';

type Props = {
  name: string;
  image: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Card(props: Props): JSX.Element {
  const { image, name, ...attr } = props;

  const [isLoad, setLoad] = useState(false);

  return (
    <button type="button" className={styles.card} {...attr}>
      <img
        onLoad={() => setLoad(true)}
        src={isLoad ? image : loader}
        alt={name}
      />
      <p>{name}</p>
    </button>
  );
}

export default Card;
