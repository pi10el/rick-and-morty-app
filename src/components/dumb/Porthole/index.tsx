// components
import Portal from '../Portal';

// assets
import loader from '../../../assets/loader.svg';

// styles
import styles from './styles.module.scss';

const statusColor = (status: string | undefined) => {
  switch (status) {
    case 'Alive':
      return '#5cad4a';

    case 'Dead':
      return '#fc4031';

    case 'unknown':
      return '#ebebf3';

    default:
      return '#9fa268';
  }
};

interface Props {
  onClear: () => void;
  id: string | undefined;
  image: string | undefined;
  name: string | undefined;
  status: string | undefined;
  species: string | undefined;
  gender: string | undefined;
  location: string | undefined;
  seen: string | undefined;
  isFetching: boolean;
}

function Porthole(props: Props): JSX.Element {
  const {
    gender,
    id,
    image,
    isFetching,
    location,
    name,
    onClear,
    seen,
    species,
    status,
  } = props;

  return (
    <section className={styles.porthole}>
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>

        <div className={styles.portal}>
          <div className={styles.status}>
            <span className={status ? styles.open : ''}>{status}</span>
            <div style={{ backgroundColor: statusColor(status) }}>
              {isFetching ? <img src={loader} alt="status_loader" /> : null}
            </div>
          </div>
          <div className={styles.content}>
            {!image ? <Portal /> : <img src={image} alt={`character_${id}`} />}
          </div>
          <button
            type="button"
            aria-label="clear character"
            className={styles.clear}
            disabled={!image}
            onClick={onClear}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.info__container}>
            <div>
              <p>Gender:</p>
              <span>{gender}</span>
            </div>
            <div>
              <p>Species:</p>
              <span>{species}</span>
            </div>
            <div>
              <p>Last location:</p>
              <span>{location}</span>
            </div>
            <div>
              <p>First seen:</p>
              <span>{seen}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Porthole;
