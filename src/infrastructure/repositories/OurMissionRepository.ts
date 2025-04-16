import OurMissionData from '@data/OurMission.json';
import type { OurMission } from '@domain/OurMission';

export const getOurMissionRepository = {
	getAll: async (): Promise<OurMission> => Promise.resolve(OurMissionData),
};
