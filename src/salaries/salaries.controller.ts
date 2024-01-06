import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SalariesService } from './salaries.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('salaries')
export class SalariesController {
  constructor(private readonly salariesService: SalariesService) {}

  @Post()
  create(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salariesService.create(createSalaryDto);
  }

  @UseGuards(AuthGuard)
  @Get('/get-all-table-salaries/:id')
  getAllTableSalaries(@Param('id') id: number) {
    return this.salariesService.getAllTableSalaries(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salariesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaryDto: UpdateSalaryDto) {
    return this.salariesService.update(+id, updateSalaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salariesService.remove(+id);
  }
}
