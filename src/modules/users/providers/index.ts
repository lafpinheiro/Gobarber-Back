import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/Models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/Implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
