// styles
import styles from './styles.module.scss';

interface Props {
  type: 'cards' | 'pagination';
  scroll?: boolean;
  children: React.ReactNode;
}

function PanelContainer({ children, ...props }: Props): JSX.Element {
  const { type, scroll = false } = props;

  return (
    <div className={`${styles[type]} ${styles.container}`}>
      <div className={styles[`${type}__content`]}>
        {!scroll ? children : <div>{children}</div>}
      </div>
    </div>
  );
}

export default PanelContainer;
