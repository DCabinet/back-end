import { Inject } from '@nestjs/common';
import { MongooseError } from 'mongoose';
import { IUniWriteUnitOfWork } from 'src/application/interface/data-access/uni-data-access/unit-of-work/i-write.unit-of-work';
import { ILogger } from 'src/application/interface/logger/i-logger';
import { Seeder } from 'src/domain/decorator/seeder.decorator';
import { Role } from 'src/domain/uni-entity/role.uni-entity';

const roles = [
   {
      id: '31c0711b-25c7-4a64-aee0-5b08cba13475',
      title: 'admin',
      level: 1,
   },
   {
      id: '43772980-a6b3-4eb5-b83f-14326f96d63c',
      title: 'user',
      level: 2,
   },
];

@Seeder()
export class RoleSeeder {
   constructor(
      @Inject(IUniWriteUnitOfWork)
      private readonly writeUnitOfWork: IUniWriteUnitOfWork,

      @Inject(ILogger)
      private readonly logger: ILogger,
   ) {}

   async seed() {
      try {
         const repo = this.writeUnitOfWork.getRepository(Role.name);

         for (const role of roles) {
            const exists = await repo.any({ _id: role.id });
            if (!exists) {
               await repo.add(role);
               this.logger.log(`Seeded role: ${role.title}`);
            }
         }

         await this.writeUnitOfWork.saveChanges();
      } catch (error) {
         if (!(error instanceof MongooseError)) {
            this.logger.error('Error seeding roles:', error);
         }
      }
   }
}
