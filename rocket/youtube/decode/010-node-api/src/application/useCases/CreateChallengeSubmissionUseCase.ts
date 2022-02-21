import { Submission } from '../../domain/entities/submission';

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  async execute({ challengeId, studentId }: CreateChallengeSubmissionRequest) {
    const submission = Submission.create({
      challengeId,
      studentId,
    });

    return submission;
  }
}
