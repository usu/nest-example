import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampInput {
  name: string;
  title: string;
  motto?: string;
}
