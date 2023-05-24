import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {User} from "../../interfaces/user.interface";

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService
    ) {}

    public async signIn(name: string, pass: string): Promise<any> {
        const user: User = await this.userService.findOne(name);
        if(user?.password !== pass) throw new UnauthorizedException();
        const {password, ...result} = user;
        return new Promise((resolve, reject) => resolve(true));
    }
}
