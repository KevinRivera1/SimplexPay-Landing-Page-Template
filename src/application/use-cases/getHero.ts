import { getHeroRespository } from "@infrastructure/repositories/HeroRepository";

export const getHero = async () => await getHeroRespository.getAll();