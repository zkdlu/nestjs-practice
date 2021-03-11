import { Controller, Get } from '@nestjs/common'

@Controller("my")
export class MyController { 
    @Get()
    findAll(): string {
        return 'My First Controller';
    }
}