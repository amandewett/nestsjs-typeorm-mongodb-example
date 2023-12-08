import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, ObjectId, ObjectIdColumn } from 'typeorm';

export class SharedEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
};