import { getOurMissionRepository } from '@infrastructure/repositories/OurMissionRepository';

export const getOurMission = async () => await getOurMissionRepository.getAll();
