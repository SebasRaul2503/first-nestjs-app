import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id }
    })
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  create(data: { name: string, email: string }) {
    return this.prismaService.user.create({ data });
  }

  update(id: number, data: { name: string }) {
    return this.prismaService.user.update({
      where: { id },
      data: {
        name: data.name
      }
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: { id }
    })
  }
}
