import Clubs from '../models/club';

const allClubs = async () => {
  const clubs = await Clubs.findAll();
  if (!clubs) throw new Error('Clubs not found');
  return clubs;
};

const clubById = async (id:string) => {
  const club = await Clubs.findByPk(id);
  if (!club) throw new Error('Club not found');
  return club;
};

export default {
  allClubs,
  clubById,
};
