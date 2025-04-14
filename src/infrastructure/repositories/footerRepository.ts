import FooterData from '@data/Footer.json';
import type { Content } from '@domain/footer';

export const getFooterDataRepository = {
	getAll: async (): Promise<Content> => Promise.resolve(FooterData.footer.content)
};
