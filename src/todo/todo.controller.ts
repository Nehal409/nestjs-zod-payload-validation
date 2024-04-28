import { Controller, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTaskDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.todoService.create(createTaskDto);
  }
}
