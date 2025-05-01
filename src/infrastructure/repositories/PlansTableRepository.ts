import PlansTableData from '@data/PlansTable.json';
import type { Plans } from '@domain/PlansTable';

export const getPlansTableRespository = {
	getAll: async (): Promise<Plans> => Promise.resolve(PlansTableData),
};
