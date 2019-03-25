import {DefaultCrudRepository} from '@loopback/repository';
import {Users} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.username
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Users, dataSource);
  }
}
