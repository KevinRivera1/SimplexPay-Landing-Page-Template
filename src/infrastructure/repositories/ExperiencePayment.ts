import type { ExperiencePayment } from "@domain/ExperiencePayment";
import ExperiencePaymentData from "@data/ExperincePayment.json";


export const getExperiencePaymentDataRepository = {
    getAll: async ():Promise<ExperiencePayment> => Promise.resolve(ExperiencePaymentData)
}