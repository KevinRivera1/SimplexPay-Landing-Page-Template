import ExperiencePaymentData from '@data/ExperincePayment.json';
import type { ExperiencePayment } from '@domain/ExperiencePayment';

export const getExperiencePaymentDataRepository = {
	getAll: async (): Promise<ExperiencePayment> =>
		Promise.resolve(ExperiencePaymentData),
};
