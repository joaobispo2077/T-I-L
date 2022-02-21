import { Entity } from '../../core/domain/Entity';
import { MakePartial } from '../../utils/generics';

type SubmissionProps = {
  challengeId: string;
  studentId: string;
  createdAt: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  public static create(
    props: MakePartial<SubmissionProps, 'createdAt'>,
    id?: string,
  ) {
    const createdAt = props.createdAt ?? new Date();

    return new Submission({ ...props, createdAt }, id);
  }
}
