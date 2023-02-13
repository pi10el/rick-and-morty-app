// redux
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

// components
import Card from '../dumb/Card';
import PanelContainer from '../dumb/PanelContainer';

interface Props {
  characters: Character[];
  setOpen: () => void;
}

function CardsControl({ characters, setOpen }: Props): JSX.Element {
  const character = useAppSelector((s) => s.params.character);
  const { setSearchParams } = useAppDispatch();

  const setId = (id: string): void => {
    setSearchParams({ character: id });
    setOpen();
  };

  return (
    <PanelContainer type="cards" scroll>
      {characters.map((el) => (
        <Card
          key={el.id}
          name={el.name}
          image={el.image}
          onClick={() => setId(el.id)}
          disabled={el.id === character}
        />
      ))}
    </PanelContainer>
  );
}

export default CardsControl;
