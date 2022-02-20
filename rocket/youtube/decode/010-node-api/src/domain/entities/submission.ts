import { Entity } from '../../core/domain/Entity';

type SubmissionProps = {
  challengeId: string;
  studentId: string;
  createdAt: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  public static create(props: SubmissionProps, id?: string) {
    return new Submission(props, id);
  }
}
