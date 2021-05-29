import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePeriodInput {
  @Field()
  description?: string;

  @Field()
  start: Date;

  @Field()
  end: Date;
}
