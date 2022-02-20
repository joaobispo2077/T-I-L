import { Entity } from '../../core/domain/Entity';

type CorrectionProps = {
  grade: number;
  submissionId: string;
  createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }

  public static create(props: CorrectionProps, id?: string) {
    return new Correction(props, id);
  }
}
