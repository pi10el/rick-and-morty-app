// redux
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

// utils
import { paginControl } from '../../utils/paginControl';

// components
import IconArrow from '../icons/IconArrow';
import CustomButton from '../dumb/CustomButton';
import PanelContainer from '../dumb/PanelContainer';

function PaginationControl({ pages }: { pages: number }): JSX.Element {
  const page = useAppSelector((s) => s.params.page);
  const { setSearchParams } = useAppDispatch();

  const current = Number(page) || 1;
  const array = paginControl(pages || 0, current);

  const setPage = (value: number) => {
    if (value > 1) setSearchParams({ page: value.toString() });
    else setSearchParams({ page: '' });
  };

  return (
    <PanelContainer type="pagination">
      <CustomButton disabled={current === 1} onClick={() => setPage(1)}>
        1
      </CustomButton>
      <CustomButton
        disabled={current === 1}
        onClick={() => setPage(current - 1)}
      >
        <IconArrow />
      </CustomButton>
      {array.map((el) => (
        <CustomButton
          key={el}
          actived={el === current}
          onClick={() => setPage(el)}
        >
          {el}
        </CustomButton>
      ))}
      <CustomButton
        style={{ transform: 'scaleY(-1)' }}
        disabled={current === pages}
        onClick={() => setPage(current + 1)}
      >
        <IconArrow />
      </CustomButton>
      <CustomButton disabled={current === pages} onClick={() => setPage(pages)}>
        {pages}
      </CustomButton>
    </PanelContainer>
  );
}

export default PaginationControl;
