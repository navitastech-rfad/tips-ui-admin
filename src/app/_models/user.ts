import { Role } from './role';

export class User {
    userId: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    role: Role;
}
