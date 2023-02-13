// styles
import styles from './styles.module.scss';

// components
import IconFilter from '../../icons/IconFilter';
import IconCharacters from '../../icons/IconCharacters';
import CustomButton from '../CustomButton';

interface Props {
  children: React.ReactNode;
  type: 'characters' | 'filter';
  isOpen: boolean;
  setOpen: () => void;
}

function SidebarContainer(props: Props): JSX.Element {
  const { children, isOpen, setOpen, type } = props;

  const customStyle = (tag: string): string => {
    const tagType = styles[`${tag}__${type}`];
    const checkOpen = !isOpen ? styles[`${tag}__${type}_close`] : '';

    return `${styles[tag]} ${tagType} ${checkOpen}`;
  };

  return (
    <section>
      <div className={customStyle('content')}>
        {children}
        <div className={customStyle('button')}>
          <CustomButton size="middle" actived onClick={setOpen}>
            {type === 'characters' ? <IconCharacters /> : <IconFilter />}
          </CustomButton>
        </div>
      </div>

      <button
        type="button"
        aria-label="overlay"
        className={customStyle('overlay')}
        onClick={setOpen}
      />
    </section>
  );
}

export default SidebarContainer;
