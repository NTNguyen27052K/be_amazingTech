import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LeaverFormService } from './leaver_form.service';
import { CreateLeaverFormDto } from './dto/create-leaver_form.dto';
import { UpdateLeaverFormDto } from './dto/update-leaver_form.dto';

@Controller('leaver-form')
export class LeaverFormController {
  constructor(private readonly leaverFormService: LeaverFormService) {}

  @Get('/getLeaveFormsByCompanyId/:id')
  getLeaveFormsByCompanyId(@Param('id') id: number) {
    return this.leaverFormService.getAllLeaveFormsByCompanyId(id);
  }
  @Put('/updateLeaverForm/:id')
  updateLeaverForm(@Param('id') id: number, @Body() updateLeaverForm: any) {
    return this.leaverFormService.updateLeaverForm(id, updateLeaverForm);
  }

  @Post()
  create(@Body() createLeaverFormDto: CreateLeaverFormDto) {
    return this.leaverFormService.create(createLeaverFormDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaverFormService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateLeaverFormDto: UpdateLeaverFormDto,
  // ) {
  //   return this.leaverFormService.update(+id, updateLeaverFormDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaverFormService.remove(+id);
  }
}
