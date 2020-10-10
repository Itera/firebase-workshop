import React, { FC } from 'react';
import CreateGame from './CreateGame';
import GameList from './GameList';
import { Game } from '../../types';

export interface HomePageProps {
  games: Game[];
  user: firebase.User | null;
}

export const HomePage: FC<HomePageProps> = ({ games, user }) => {
  return (
    <div className="home">
      <h1>Cards Against Developers!</h1>
      <CreateGame />

      {games?.length > 0 ? (
        <GameList games={games} />
      ) : (
        <p> There are no active games. Try creating a new one!</p>
      )}
    </div>
  );
};
