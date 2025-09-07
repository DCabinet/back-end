import { Prop } from '@nestjs/mongoose';
import { Entity } from '../decorator/entity.decorator';
import { IdentityHelper } from '../helper/identity.helper';
import { IBaseEntity } from './base/i-base.entity';
import { User } from './user.entity';

@Entity()
export class GroupCabinet extends IBaseEntity {
   @Prop({
      type: String,
      required: true,
      default: () => IdentityHelper.generateUUID(),
   })
   declare _id: string;

   @Prop({ type: String, ref: 'User', required: true })
   owner: string | User;

   @Prop({ required: true, default: () => new Date() })
   createdAt: Date;

   @Prop({ required: true, type: Number })
   pricePerCabinet: number;

   @Prop({ required: true, type: Number })
   maxSlot: number;

   @Prop({ type: String, ref: 'Location', required: true })
   location: string | Location;
}
