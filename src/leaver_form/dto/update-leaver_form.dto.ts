import { PartialType } from '@nestjs/swagger';
import { CreateLeaverFormDto } from './create-leaver_form.dto';

export class UpdateLeaverFormDto {
  Leave_form_deleted: boolean;
  Leave_form_id: number;
  Leave_form_quantity: number;
  discription: string;
  status: boolean;
  user_id: number;
  constructor(
    Leave_form_deleted: boolean,
    Leave_form_id: number,
    Leave_form_quantity: number,
    discription: string,
    status: boolean,
    user_id: number,
  ) {
    Leave_form_deleted;
    Leave_form_id;
    Leave_form_quantity;
    discription;
    status;
    user_id;
  }
}
