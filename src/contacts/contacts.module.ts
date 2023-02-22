import { Module } from '@nestjs/common';
import { ContactsController } from './controller/contacts/contacts.controller';
import { ContactsService } from './service/contacts/contacts.service';

@Module({
  imports: [ContactsModule],
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
