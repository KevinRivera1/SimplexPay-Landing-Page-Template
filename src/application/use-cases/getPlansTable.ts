import { getPlansTableRespository } from '@infrastructure/repositories/PlansTableRepository';
export const getPlansTable = async () =>
	await getPlansTableRespository.getAll();
