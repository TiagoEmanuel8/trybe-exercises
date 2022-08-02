import ILeaderboard from '../interface/ILeaderboard';
import IMatch from '../interface/IMatch';
import Clubs from '../models/club';
import Matchs from '../models/match';

const calculateResults = (matches: IMatch[]) => {
  let totalPoints = 0;
  let totalVictories = 0;
  let totalDraws = 0;
  let totalLosses = 0;

  matches.forEach((match) => {
    if (match.awayTeamGoals > match.homeTeamGoals) {
      totalVictories += 1;
      totalPoints += 3;
    }

    if (match.awayTeamGoals === match.homeTeamGoals) {
      totalDraws += 1;
      totalPoints += 1;
    }

    if (match.awayTeamGoals < match.homeTeamGoals) { totalLosses += 1; }
  });

  return { totalPoints, totalVictories, totalDraws, totalLosses };
};

const calculateGoals = (matches: IMatch[]) => {
  let goalsFavor = 0;
  let goalsOwn = 0;
  let goalsBalance = 0;

  matches.forEach((match) => {
    goalsFavor += match.awayTeamGoals;
    goalsOwn += match.homeTeamGoals;
    goalsBalance = goalsFavor - goalsOwn;
  });

  return { goalsFavor, goalsOwn, goalsBalance };
};

/** Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * ajuda da Bel com a resolução do sort.
*/
const tieBreaker = (boardMatch: ILeaderboard[]) => {
  boardMatch.sort((team1: ILeaderboard, team2: ILeaderboard) => {
    if (team1.totalPoints > team2.totalPoints) return -1;
    if (team1.totalPoints < team2.totalPoints) return 1;
    if (team1.totalVictories > team2.totalVictories) return -1;
    if (team1.totalVictories < team2.totalVictories) return 1;
    if (team1.goalsBalance > team2.goalsBalance) return -1;
    if (team1.goalsBalance < team2.goalsBalance) return 1;
    if (team1.goalsFavor > team2.goalsFavor) return -1;
    if (team1.goalsFavor < team2.goalsFavor) return 1;
    if (team1.goalsOwn < team2.goalsOwn) return -1;
    if (team1.goalsOwn > team2.goalsOwn) return 1;
    return 0;
  });
  return boardMatch;
};

const boardById = async (id: number, name: string) => {
  const matches = await Matchs.findAll({
    where: { awayTeam: id, inProgress: false },
  });

  const totalGames = matches.length;

  const result1 = calculateResults(matches);
  const result2 = calculateGoals(matches);

  const efficiency = parseFloat(
    ((result1.totalPoints / (totalGames * 3)) * 100).toFixed(2),
  );

  const totalResult = {
    name,
    ...result1,
    ...result2,
    totalGames,
    efficiency,
  };

  return totalResult;
};

const createLeaderboardAway = async (): Promise<ILeaderboard[]> => {
  const allClubs = await Clubs.findAll();

  const allTeams = await Promise.all(allClubs.map((club) => boardById(club.id, club.clubName)));

  const sorted = tieBreaker(allTeams);

  return sorted;
};

export default createLeaderboardAway;
