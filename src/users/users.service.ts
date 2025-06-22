import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOne(id: string) {
    return { id: id, name: 'John Doe' };
  }

  create(data: any) {
    return { message: 'Usuario creado', data };
  }

  update(id: string, data: any) {
    return { message: `Usuario ${id} actualizado`, data };
  }

  remove(id: string) {
    return { message: `Usuario ${id} eliminado` };
  }

}
