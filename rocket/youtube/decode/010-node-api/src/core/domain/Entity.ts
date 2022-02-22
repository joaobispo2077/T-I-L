import crypto from 'crypto';

export abstract class Entity<GenericProps> {
  protected _id: string;
  public props: GenericProps;

  get id(): string {
    return this._id;
  }

  constructor(props: GenericProps, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}
