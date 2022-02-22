import { Submission } from '../../domain/entities/submission';
import { ChallengesRepository } from '../repositories/ChallengesRepository';
import { StudentsRepository } from '../repositories/StudentsRepository';

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository,
  ) {}

  async execute({ challengeId, studentId }: CreateChallengeSubmissionRequest) {
    const isStudentExist = await this.studentsRepository.findById(studentId);

    if (!isStudentExist) {
      throw new Error('Student not found');
    }

    const isChallengeExist = await this.challengesRepository.findById(
      challengeId,
    );

    if (!isChallengeExist) {
      throw new Error('Challenge not found');
    }

    const submission = Submission.create({
      challengeId,
      studentId,
    });

    return submission;
  }
}
