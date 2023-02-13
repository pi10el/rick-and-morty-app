// styles
import styles from './styles.module.scss';

function Empty(): JSX.Element {
  return (
    <div className={styles.empty}>
      <div className={styles.line} />
    </div>
  );
}

export default Empty;
