import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const userAssignmentSchema = z.object({
  userId: z.string(),
  assignedBy: z.string(),
});

const taskStatus = ['OPEN', 'IN_PROGRESS', 'COMPLETED'] as const;

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(taskStatus),
  dueDate: z.coerce.date().optional(),
  tags: z.array(z.string()),
  assignedTo: userAssignmentSchema,
});

export class CreateTaskDto extends createZodDto(CreateTaskSchema) {}
