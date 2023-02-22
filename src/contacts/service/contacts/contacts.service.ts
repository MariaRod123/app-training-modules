import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getContacts(): string {
    return 'Hola desde el servicio Contacts!';
  }
}
