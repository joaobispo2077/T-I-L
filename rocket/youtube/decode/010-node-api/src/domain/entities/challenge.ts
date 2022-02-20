import { Entity } from '../../core/domain/Entity';

type ChallengeProps = {
  title: string;
  instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  public static create(props: ChallengeProps, id?: string) {
    return new Challenge(props, id);
  }
}
