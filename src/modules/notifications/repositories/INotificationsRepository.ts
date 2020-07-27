import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotification';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notificaion';

export default interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
