import { Controller, Get } from '@nestjs/common';
import { ContactsService } from 'src/contacts/service/contacts/contacts.service';

@Controller('contacts/message')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getContacts(): string {
    return this.contactsService.getContacts();
  }
}
