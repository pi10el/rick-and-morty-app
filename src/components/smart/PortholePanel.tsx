// redux
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

// api
import { useGetCharacterQuery } from '../../store/slices/api';

// component
import Porthole from '../dumb/Porthole';

function PortholePanel(): JSX.Element {
  const character = useAppSelector((s) => s.params.character);

  const { data, isFetching } = useGetCharacterQuery(character);

  const { setSearchParams } = useAppDispatch();

  const onClear = () => setSearchParams({ character: '' });

  return (
    <Porthole
      id={data?.id}
      image={data?.image}
      name={data?.name || 'unknown'}
      status={data?.status || ''}
      species={data?.species || ''}
      gender={data?.gender || ''}
      location={data?.location.name || ''}
      seen={!data?.episode ? '' : data.episode.slice(-1)[0].name}
      isFetching={isFetching}
      onClear={onClear}
    />
  );
}

export default PortholePanel;
