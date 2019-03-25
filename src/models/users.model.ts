import { Entity, model, property } from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}
