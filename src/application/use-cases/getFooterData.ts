import { getFooterDataRepository } from '@infrastructure/repositories/footerRepository';

export const getFooterData = async () => {
	return await getFooterDataRepository.getAll();
};
