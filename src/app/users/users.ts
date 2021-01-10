import { UsersCompany } from './usersCompany';
import { UsersAddress } from './usersAddress';
export interface Users {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: UsersAddress;
    company: UsersCompany;
}