import { CreatePeriodInput } from './create-period.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePeriodInput extends PartialType(CreatePeriodInput) {
  @Field()
  id: number;
}
