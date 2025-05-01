import { getExperiencePaymentDataRepository } from "@infrastructure/repositories/ExperiencePayment";

export const getExperiencePayment = async () => await getExperiencePaymentDataRepository.getAll();