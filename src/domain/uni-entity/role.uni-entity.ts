import { Prop } from '@nestjs/mongoose';
import { UniEntity } from '../decorator/uni-entity.decorator';
import { IdentityHelper } from '../helper/identity.helper';

@UniEntity()
export class Role {
   @Prop({
      type: String,
      required: true,
      default: () => IdentityHelper.generateUUID(),
   })
   declare _id: string;

   @Prop({ required: true })
   title: string;

   @Prop({ required: true })
   level: number;
}
