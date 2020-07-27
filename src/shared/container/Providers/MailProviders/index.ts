import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import IMailProvider from './models/IMailProvider';
import EtherialMailProvider from './implementations/EtherialMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const providers = {
  etherial: container.resolve(EtherialMailProvider),
  ses: container.resolve(SESMailProvider),
};

// usamos o register instance neste caso para que o constructor seja executado
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
