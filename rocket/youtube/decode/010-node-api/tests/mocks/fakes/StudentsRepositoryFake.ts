import { StudentsRepository } from '../../../src/application/repositories/StudentsRepository';
import { Student } from '../../../src/domain/entities/student';

export class StudentsRepositoryFake implements StudentsRepository {
  private readonly students: Student[] = [];

  async findById(id: string): Promise<Student | null> {
    const student = this.students.find((student) => student.id === id);

    return student || null;
  }

  async create(student: Student): Promise<Student> {
    this.students.push(student);

    return student;
  }
}
