import FooterData from '@data/Footer.json';

//export const getFooterDataRepository = async () => {
//	return  FooterData.footer.content;
//};

export const getFooterDataRepository = {
	getAll: async () => {
		return FooterData.footer.content;
	},
};
