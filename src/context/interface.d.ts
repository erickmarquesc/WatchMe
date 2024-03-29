import { ButtonHTMLAttributes } from 'react';

interface GenreNames {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}
export interface Genre extends GenreNames {
  id: number;
  title: string;
};

export interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
};

export interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
};

export interface IconProps extends GenreNames {
  color: string;
};

interface Genre extends GenreNames {
  id: number;
  title: string;
};

export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

export interface ContentProps {
  selectedGenre: Genre;
  movies: Movie[]
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
};

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
};

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

export interface MovieConstextProps {
  genres: GenreResponseProps[];
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
}
export interface MovieContextProviderProps {
  children: ReactNode,
}