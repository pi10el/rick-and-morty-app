import { useState } from 'react';

// redux
import useAppSelector from '../../hooks/useAppSelector';

// api
import { useGetCharactersQuery } from '../../store/slices/api';

// components
import SidebarContainer from '../dumb/SidebarContainer';
import PaginationControl from './PaginationControl';
import CardsControl from './CardsControl';
import Empty from '../dumb/Empty';

function CharactersPanel(): JSX.Element {
  const page = useAppSelector((s) => s.params.page);
  const status = useAppSelector((s) => s.params.status);
  const gender = useAppSelector((s) => s.params.gender);
  const name = useAppSelector((s) => s.params.search);

  const { data } = useGetCharactersQuery({ page, status, gender, name });

  const isData = !data || !data.results.length;

  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContainer
      type="characters"
      isOpen={isOpen}
      setOpen={() => setOpen(!isOpen)}
    >
      {isData ? (
        <Empty />
      ) : (
        <>
          <CardsControl
            characters={data.results}
            setOpen={() => setOpen(false)}
          />
          <PaginationControl pages={data.info.pages} />
        </>
      )}
    </SidebarContainer>
  );
}

export default CharactersPanel;
