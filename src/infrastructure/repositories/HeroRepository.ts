import HeroData from '@data/Hero.json';
import type { Hero } from '@domain/Hero';

export const getHeroRespository = {
	getAll: async (): Promise<Hero> => Promise.resolve(HeroData),
};
