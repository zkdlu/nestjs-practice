import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common'
import { Request } from 'express'
import { CreateMyDto } from './create-my.dto';
import { UpdateMyDto } from './update-my.dto';

@Controller("my")
export class MyController { 
    @Post()
    create(@Body() createMyDto: CreateMyDto) {
      return 'Create Body';
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return `Get Path variable: ${id}`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateMyDto: UpdateMyDto) {
      return `Put Path variable: ${id} Update Body`;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return `Delete Path variable: ${id}`;
    }
}