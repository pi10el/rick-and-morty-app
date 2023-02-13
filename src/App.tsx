// components
import CharactersPanel from './components/smart/CharactersPanel';
import PortholePanel from './components/smart/PortholePanel';
import FilterPanel from './components/smart/FilterPanel';
import SearchControl from './components/smart/SearchControl';
import GitLink from './components/dumb/GitLink';

function App(): JSX.Element {
  return (
    <>
      <header className="block top">
        <SearchControl />
      </header>

      <main className="wrapper">
        <CharactersPanel />
        <PortholePanel />
        <FilterPanel />
      </main>

      <footer className="block bottom">
        <p>Created by Pi10el</p>
        <GitLink />
      </footer>
    </>
  );
}

export default App;
