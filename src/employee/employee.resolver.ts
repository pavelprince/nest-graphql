import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entities';

@Resolver(() => Employee)
export class EmployeeResolver {

    constructor(private employeeService: EmployeeService) { }

    @Query(() => [Employee], { name: "getAllemployees" })
    findall() {
        // return this.employeeService.findAll();

    }

    @Mutation(() => Employee, { name: "createEmployee" })
    create(@Args('employee') employee: EmployeeCreateDTO) {
        return this.employeeService.create(employee);
    }
} 
