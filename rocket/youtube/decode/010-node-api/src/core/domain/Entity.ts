import crypto from 'crypto';

export abstract class Entity<GenericProps> {
  protected _id: string;
  public props: GenericProps;

  constructor(props: GenericProps, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}
