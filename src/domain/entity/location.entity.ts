import { Prop } from '@nestjs/mongoose';
import { Entity } from '../decorator/entity.decorator';
import { IBaseEntity } from './base/i-base.entity';
import { IdentityHelper } from '../helper/identity.helper';

@Entity()
export class Location extends IBaseEntity {
   @Prop({
      type: String,
      required: true,
      default: () => IdentityHelper.generateUUID(),
   })
   declare _id: string;

   @Prop({ type: String, required: true })
   name: string;

   @Prop({ type: Number, required: true })
   zipCode: number;
}
