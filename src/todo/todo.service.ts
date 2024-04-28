import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  create(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }
}
