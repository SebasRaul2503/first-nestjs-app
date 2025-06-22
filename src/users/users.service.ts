import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findOne(id:string){
        return {id: id, name: 'John Doe'}
    }
}
