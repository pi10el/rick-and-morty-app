// components
import IconGithub from '../../icons/IconGithub';

// styles
import styles from './styles.module.scss';

function GitLink(): JSX.Element {
  return (
    <a
      className={styles.link}
      target="_blank"
      rel="noreferrer"
      href="https://github.com/pi10el"
    >
      <IconGithub />
    </a>
  );
}

export default GitLink;
