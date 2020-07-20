import { container } from 'tsyringe';

import IStorageProvider from './StorageProviders/models/IStorageProvider';
import IMailProvider from './MailProviders/models/IMailProvider';

import DiskStorageProvider from './StorageProviders/implementations/DiskStorageProvider';
import EtherialMailProvider from './MailProviders/implementations/EtherialMailProvider';

import IMailTemplateProvider from './MailTemplateProviders/models/IMailTemplateProvider';
import HandlebarsTemplateMailProvider from './MailTemplateProviders/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsTemplateMailProvider,
);

// usamos o register instance neste caso para que o constructor seja executado
container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherialMailProvider),
);
