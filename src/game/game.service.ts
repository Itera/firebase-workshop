import firebase from 'firebase';
import { Game, GameID, Round } from '../types';

/**
 * CRUD for game documents
 */
export function addGame(game: Omit<Game, 'id' | 'rounds'>) {
  return null;
}

export function getGame(id: GameID) {
  return null;
}

export function updateGame(id: GameID, gameData: Partial<Game>) {
  return null;
}

export function deleteGame(id: GameID) {
  return null;
}

// 🔥 Implement transaction for updating the game such that consistency is maintained
export function updateGameTransaction(id: GameID, gameData: Partial<Game>) {}

/**
 * CRUD for round documents
 */
export function addRound(gameId: GameID, round: Omit<Round, 'id'>) {
  return null;
}

export function updateRound(
  gameId: GameID,
  roundId: string,
  roundData: Partial<Round>
) {
  return new Promise((success) => { success([]); })
}

// 🔥 Implement transaction for updating rounds
