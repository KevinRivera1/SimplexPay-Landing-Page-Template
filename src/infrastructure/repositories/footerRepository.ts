import FooterData from '@data/Footer.json';

export const getFooterDataRepository = {
	getAll: async () => {
		return FooterData.footer.content;
	},
};
