import BannerTryItNowData from '@data/BannerTryItNow.json';
import type { BannerTryItNow } from '@domain/BannerTryItNow';

export const getBannerTryItNowRepository = {
	getAll: async (): Promise<BannerTryItNow> =>
		Promise.resolve(BannerTryItNowData),
};
