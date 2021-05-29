import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CampsService } from './camps.service';
import { PeriodsService } from '../periods/periods.service';
import { Camp } from './entities/camp.entity';
import { CreateCampInput } from './dto/create-camp.input';
import { UpdateCampInput } from './dto/update-camp.input';

@Resolver(() => Camp)
export class CampsResolver {
  constructor(
    private readonly campsService: CampsService,
    private readonly periodsService: PeriodsService,
  ) {}

  @Mutation(() => Camp)
  createCamp(@Args('createCampInput') createCampInput: CreateCampInput) {
    return this.campsService.create(createCampInput);
  }

  @Query(() => [Camp], { name: 'camps' })
  findAll() {
    return this.campsService.findAll();
  }

  @Query(() => Camp, { name: 'camp' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campsService.findOne(id);
  }

  @ResolveField()
  async periods(@Parent() camp: Camp) {
    const { id } = camp;
    return await this.periodsService.findByCamp(id);
  }

  @Mutation(() => Camp)
  updateCamp(
    @Args('id') id: number,
    @Args('updateCampInput') updateCampInput: UpdateCampInput,
  ) {
    return this.campsService.update(id, updateCampInput);
  }

  @Mutation(() => Camp)
  removeCamp(@Args('id', { type: () => Int }) id: number) {
    return this.campsService.remove(id);
  }
}
