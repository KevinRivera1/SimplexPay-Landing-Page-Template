import MenuData from '@data/Menu.json';

export const getMenuRepository = {
	getAll: async () => {
		return MenuData;
	},
};
