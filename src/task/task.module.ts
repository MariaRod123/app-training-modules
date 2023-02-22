import { Module } from '@nestjs/common';
import { TaskController } from './controller/task/task.controller';
import { TaskService } from './service/task/task.service';

@Module({
  imports: [TaskModule],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
