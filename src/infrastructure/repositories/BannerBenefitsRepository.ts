import BannerBenefitsData from '@data/BannerBenefits.json';
import type { Benefits } from '@domain/BannerBenefits';

export const getBannerBenefitsRepository = {
	getAll: async (): Promise<Benefits> => Promise.resolve(BannerBenefitsData),
};
