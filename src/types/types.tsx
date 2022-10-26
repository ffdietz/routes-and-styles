export type MovieLinkProp = {
  name: string;
};

export type NavbarLinkType = {
  label: string;
  link: string;
  end: boolean;
};

export type MovieLinkType = {
  title: string;
};

export type MovieType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];
};


export type MovieLayoutProps = {
  data: MovieType | undefined;
}