interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  created: string;
}

interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

interface Character {
  id: string;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  location: Location;
  origin?: Location;
  image: string;
  episode?: Episode[];
  created?: string;
}

interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

interface Characters {
  results: Character[];
  info: Info;
}

interface ResponseCharacters {
  characters: Characters;
}

interface ResponseCharacter {
  character: Character;
}

interface CharactersQueryProps {
  page?: string;
  name?: string;
  gender?: string;
  status?: string;
}
