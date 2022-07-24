import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'nestjs',
      entities: ["dist/**/*.entity{.ts,.js"], //telling to typeorm go to entity.ts and create a table first
      synchronize: true,
      autoLoadEntities: true,
    }),

    EmployeeModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
