import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

interface CreateRepositoryDTO {
  provider: string;
  date: Date;
}

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
  }
}

export default AppointmentsRepository;
