// styles
import styles from './styles.module.scss';

type Props = {
  size?: 'small' | 'middle' | 'fill';
  shadow?: 'in' | 'out' | 'none';
  actived?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function CustomButton({ children, ...props }: Props): JSX.Element {
  const { size = 'small', shadow = 'out', actived = false, ...attr } = props;

  const customStyle = (): string => {
    const btnSize = styles[`button_${size}`];
    const btnShadow = styles[`button_${shadow}`];
    const isActive = !actived ? '' : styles.active;

    return `${styles.button} ${btnSize} ${btnShadow} ${isActive}`;
  };

  return (
    <button className={customStyle()} type="button" {...attr}>
      {children}
    </button>
  );
}

export default CustomButton;
