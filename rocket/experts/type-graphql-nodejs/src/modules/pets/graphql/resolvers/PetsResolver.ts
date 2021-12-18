import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Pet } from "../../database/entities/Pet";

@Resolver()
export class PetsResolver {
  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return Pet.find();
  }

  @Mutation(() => Pet)
  async createPet(
    @Arg("name") name: string,
    @Arg("userId") userId: string
  ): Promise<Pet> {
    const pet = Object.assign(new Pet(), {
      name,
      userId,
    });

    await Pet.save(pet);
    return pet;
  }
}
