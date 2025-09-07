import { Prop } from '@nestjs/mongoose';
import { Entity } from '../decorator/entity.decorator';
import { IBaseEntity } from './base/i-base.entity';
import { IdentityHelper } from '../helper/identity.helper';
import { GroupCabinet } from './group-cabinet.entity';
import { User } from './user.entity';
import { CabinetStatusEnum } from '../enum/cabinet-status.enum';

@Entity()
export class Cabinet extends IBaseEntity {
   @Prop({
      type: String,
      required: true,
      default: () => IdentityHelper.generateUUID(),
   })
   declare _id: string;

   @Prop({ type: String, ref: 'GroupCabinet', required: true })
   groupCabinet: string | GroupCabinet;

   @Prop({ required: true, type: String, ref: 'User' })
   currentUser: string | User;

   @Prop({ required: true, type: Number, default: 0 })
   status: CabinetStatusEnum;
}
