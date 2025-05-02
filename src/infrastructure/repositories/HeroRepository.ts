import type {Hero} from '@domain/Hero';
import HeroData from '@data/Hero.json';

export const getHeroRespository = {
    getAll: async ():Promise<Hero> => Promise.resolve(HeroData)
}