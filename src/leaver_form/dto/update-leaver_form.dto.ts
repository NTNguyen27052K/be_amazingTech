import { PartialType } from '@nestjs/swagger';
import { CreateLeaverFormDto } from './create-leaver_form.dto';

export class UpdateLeaverFormDto {
  // Leave_form_deleted: boolean;
  // Leave_form_id: number;
  // Leave_form_quantity: number;
  // discription: string;
  // user_id: number;
  status: boolean;
  constructor(
    // Leave_form_deleted: boolean,
    // Leave_form_id: number,
    // Leave_form_quantity: number,
    // discription: string,
    // user_id: number,
    status: boolean,
  ) {
    // Leave_form_deleted;
    // Leave_form_id;
    // Leave_form_quantity;
    // discription;
    // user_id;
    status;
  }
}
