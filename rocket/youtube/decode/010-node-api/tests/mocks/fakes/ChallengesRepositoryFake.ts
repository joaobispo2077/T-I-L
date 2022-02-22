import { ChallengesRepository } from '../../../src/application/repositories/ChallengesRepository';
import { Challenge } from '../../../src/domain/entities/challenge';

export class ChallengesRepositoryFake implements ChallengesRepository {
  private readonly challenges: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.challenges.find((challenge) => challenge.id === id);

    return challenge || null;
  }

  async create(challenge: Challenge): Promise<Challenge> {
    this.challenges.push(challenge);

    return challenge;
  }
}
