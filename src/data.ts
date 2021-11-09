import {PreviewFilm, DetailFilm} from './types';

export const FILM_LIST_DATA: {items: PreviewFilm[]; errorMessage?: string} = {
  items: [
    {
      id: 'tt1160419',
      title: 'Dune: Part One',
      image:
        'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$15.4M',
      gross: '$69.3M',
    },
    {
      id: 'tt10665338',
      title: 'Halloween Kills',
      image:
        'https://m.media-amazon.com/images/M/MV5BM2RmMGY2Y2UtNjA1NS00NGE4LThiNzItMmE1NTk5NzI5NmE0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$8.7M',
      gross: '$85.9M',
    },
    {
      id: 'tt2382320',
      title: 'No Time to Die',
      image:
        'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$7.8M',
      gross: '$133.3M',
    },
    {
      id: 'tt13544716',
      title: 'Boku no Hero Academia: World Heroes Mission',
      image:
        'https://m.media-amazon.com/images/M/MV5BNTBhYjYzZjEtOTU0OC00N2Q3LTgzYzgtNTk2NDRmNzZhMjFmXkEyXkFqcGdeQXVyNTkyODc5MjA@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$6.4M',
      gross: '$6.2M',
    },
    {
      id: 'tt7097896',
      title: 'Venom: Let There Be Carnage',
      image:
        'https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$5.8M',
      gross: '$190.4M',
    },
    {
      id: 'tt9639470',
      title: 'Last Night in Soho',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$4.2M',
      gross: '$4.2M',
    },
    {
      id: 'tt11125620',
      title: 'The Addams Family 2',
      image:
        'https://m.media-amazon.com/images/M/MV5BNzQ5NzJjMDgtNzhjMC00NTQ2LTgzOTUtZThiMWMwYmYwMGYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$3.1M',
      gross: '$52.7M',
    },
    {
      id: 'tt8847712',
      title: 'The French Dispatch',
      image:
        'https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
      weekend: '$2.6M',
      gross: '$4.5M',
    },
  ],
  errorMessage: '',
};

export const FILMS_BY_ID: {[id: string]: DetailFilm} = {
  tt1160419: {
    id: 'tt1160419',
    title: 'Dune: Part One',
    image:
      'https://imdb-api.com/images/original/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6762_AL_.jpg',
    plot: "A mythic and emotionally charged hero's journey, \"Dune\" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
  },
  tt10665338: {
    id: 'tt10665338',
    title: 'Halloween Kills',
    image:
      'https://imdb-api.com/images/original/MV5BNzZhY2Q4OTAtZDdlMi00OTljLWFlNjItMmViY2ZmZWRkZjdiXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_Ratio0.6791_AL_.jpg',
    plot: 'The saga of Michael Myers and Laurie Strode continues in the next thrilling chapter of the Halloween series.',
  },
  tt2382320: {
    id: 'tt2382320',
    title: 'No Time to Die',
    image:
      'https://imdb-api.com/images/original/MV5BMTk3ZGM2YzQtMmYxYy00NDZjLWFmOTUtZTQwMzg0ZjA5ZjU3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_Ratio0.6791_AL_.jpg',
    plot: 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
  },
  tt13544716: {
    id: 'tt13544716',
    title: 'Boku no Hero Academia: World Heroes Mission',
    image:
      'https://imdb-api.com/images/original/MV5BNTBhYjYzZjEtOTU0OC00N2Q3LTgzYzgtNTk2NDRmNzZhMjFmXkEyXkFqcGdeQXVyNTkyODc5MjA@._V1_Ratio0.6762_AL_.jpg',
    plot: '',
  },
  tt7097896: {
    id: 'tt7097896',
    title: 'Venom: Let There Be Carnage',
    image:
      'https://imdb-api.com/images/original/MV5BYzljNzQ1MzMtODI5NS00MDRlLTgzYmQtNjE1NDk4MTIxODI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6791_AL_.jpg',
    plot: "Plot unknown. Sequel to the 2018 film 'Venom'.",
  },
  tt9639470: {
    id: 'tt9639470',
    title: 'Last Night in Soho',
    image:
      'https://imdb-api.com/images/original/MV5BZWUxZjlkZDctZDkyNS00ZWRjLThlYjQtMzIyNGQzMGZmOWM3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6791_AL_.jpg',
    plot: "A young fashion student, named Eloise (Thomasin McKenzie) obsessed with all things '60s as well as harbouring a strange Sixth Sense, moves to London. Somehow she is able to form a strange connection across time with Sandie (Anya Taylor-Joy) a dazzling young woman with dreams of becoming a star. As Eloise disappears deeper into this rabbit hole and her connection with Sandie grows, everything begins to fall apart, in the most surreal way possible.",
  },
  tt11125620: {
    id: 'tt11125620',
    title: 'The Addams Family 2',
    image:
      'https://imdb-api.com/images/original/MV5BZWE4NDkyNDktZWI0Zi00ZGMwLWFhNmUtMjU2ZTgyZWNkZTVkXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_Ratio0.6791_AL_.jpg',
    plot: "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters. Sequel to the 2019 animated film, 'The Addams Family'.",
  },
  tt8847712: {
    id: 'tt8847712',
    title: 'The French Dispatch',
    image:
      'https://imdb-api.com/images/original/MV5BMmIyYTBiZDUtODM1Yi00NmM3LWJkNmYtNTY3Y2Q0YmZmMDcyXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_Ratio0.6791_AL_.jpg',
    plot: 'A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in "The French Dispatch Magazine".',
  },
};
