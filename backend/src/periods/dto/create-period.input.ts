import { InputType } from '@nestjs/graphql';

@InputType()
export class CreatePeriodInput {
  description?: string;
  start: Date;
  end: Date;
  campId: number;
}
