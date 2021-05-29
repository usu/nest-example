import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PeriodsService } from './periods.service';
import { Period } from './entities/period.entity';
import { CreatePeriodInput } from './dto/create-period.input';
import { UpdatePeriodInput } from './dto/update-period.input';

@Resolver(() => Period)
export class PeriodsResolver {
  constructor(private readonly periodsService: PeriodsService) {}

  @Mutation(() => Period)
  createPeriod(
    @Args('createPeriodInput') createPeriodInput: CreatePeriodInput,
  ) {
    return this.periodsService.create(createPeriodInput);
  }

  @Query(() => [Period], { name: 'periods' })
  findAll() {
    return this.periodsService.findAll();
  }

  @Query(() => Period, { name: 'period' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.periodsService.findOne(id);
  }

  @Mutation(() => Period)
  updatePeriod(
    @Args('id') id: number,
    @Args('updatePeriodInput') updatePeriodInput: UpdatePeriodInput,
  ) {
    return this.periodsService.update(id, updatePeriodInput);
  }

  @Mutation(() => Period)
  removePeriod(@Args('id', { type: () => Int }) id: number) {
    return this.periodsService.remove(id);
  }
}
