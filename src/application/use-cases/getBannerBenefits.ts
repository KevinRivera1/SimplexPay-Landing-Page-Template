import { getBannerBenefitsRepository } from '@infrastructure/repositories/BannerBenefitsRepository';

export const getBannerBenefits = async () =>
	await getBannerBenefitsRepository.getAll();
