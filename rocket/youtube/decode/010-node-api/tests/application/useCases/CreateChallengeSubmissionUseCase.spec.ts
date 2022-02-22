import { CreateChallengeSubmission } from '../../../src/application/useCases/CreateChallengeSubmissionUseCase';
import { Challenge } from '../../../src/domain/entities/challenge';
import { Student } from '../../../src/domain/entities/student';
import { ChallengesRepositoryFake } from '../../mocks/fakes/ChallengesRepositoryFake';
import { StudentsRepositoryFake } from '../../mocks/fakes/StudentsRepositoryFake';

describe('CreateChallengeSubmissionUseCase', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepositoryFake = new StudentsRepositoryFake();
    const challengesRepositoryFake = new ChallengesRepositoryFake();

    const student = Student.create({
      email: 'student@example.com',
      name: 'Student',
    });

    const challenge = Challenge.create({
      title: 'Challenge',
      instructionsUrl: 'https://example.com/instructions',
    });

    await Promise.all([
      studentsRepositoryFake.create(student),
      challengesRepositoryFake.create(challenge),
    ]);

    const sut = new CreateChallengeSubmission(
      studentsRepositoryFake,
      challengesRepositoryFake,
    );

    const response = await sut.execute({
      challengeId: challenge.id,
      studentId: student.id,
    });

    expect(response).toBeTruthy();
  });
});
