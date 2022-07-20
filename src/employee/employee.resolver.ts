import { Resolver, Query } from '@nestjs/graphql';
import { Employee } from './entities/employee.entities';

@Resolver(()=>Employee)
export class EmployeeResolver {

    @Query(()=>Employee)
    findall() {

    }
}
