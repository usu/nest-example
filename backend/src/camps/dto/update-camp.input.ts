import { CreateCampInput } from './create-camp.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampInput extends PartialType(CreateCampInput) {}
