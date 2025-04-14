import { getMenuRepository } from '@infrastructure/repositories/menuRepository';

export const getMenuData = async () => {
	return await getMenuRepository.getAll();
};
