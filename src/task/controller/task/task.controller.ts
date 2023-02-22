import { Controller, Get } from '@nestjs/common';
import { TaskService } from 'src/task/service/task/task.service';

@Controller('task/message')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTask(): string {
    return this.taskService.getTask();
  }
}
