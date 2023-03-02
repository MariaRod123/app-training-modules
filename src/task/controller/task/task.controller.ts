import { Controller, Get } from '@nestjs/common';
import { TaskService } from 'src/task/service/task/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('message')
  getTask(): string {
    return this.taskService.getTask();
  }
}
