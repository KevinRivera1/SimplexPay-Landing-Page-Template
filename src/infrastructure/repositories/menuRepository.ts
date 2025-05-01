import MenuData from '@data/Menu.json';
import type { Menu } from '@domain/menu';

export const getMenuRepository = {
	getAll: async (): Promise<Menu> => Promise.resolve(MenuData),
};
