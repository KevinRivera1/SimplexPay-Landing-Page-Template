import { getBannerTryItNowRepository } from '@infrastructure/repositories/BannerTryItNowRepository';

export const getBannerTryItNow = async () => {
	return await getBannerTryItNowRepository.getAll();
};
