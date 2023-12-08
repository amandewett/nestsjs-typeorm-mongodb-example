import { SharedEntity } from 'src/modules/shared/entity/shared.entity';
import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from 'typeorm';
import { Boolean, Roles } from "../../../enums/enums";

@Entity({ name: "users" })
export class UserEntity extends SharedEntity {
    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column()
    password: string;

    @Column({ default: Roles.User })
    role: string = Roles.User;
};