import { Injectable } from '@nestjs/common';
import {User} from "../../interfaces/user.interface";

@Injectable()
export class UsersService {
    public users: User[] = [
        {
            id: 1,
            name: 'Youssef',
            email: 'youssef@gmail.com'
        },
        {
            id: 2,
            name: 'Ayoub',
            email: 'ayoub@gmail.com'
        },
        {
            id: 2,
            name: 'Mohamed',
            email: 'mohamed@gmail.com'
        }
    ];

    async findOne(name: string): Promise<User | undefined> {
        return this.users.find(user => user.name === name);
    }
}
