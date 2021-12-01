import { ContactType } from "./ContactType";

export interface Contact {
    id?: number,
    name: string,
    phone?: string,
    birthDate: string,
    contactTypeId: number,
    contactType: ContactType
}