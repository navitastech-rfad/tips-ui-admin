import { Role } from './role';

export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    roleName: string;
    role: Role;
}
