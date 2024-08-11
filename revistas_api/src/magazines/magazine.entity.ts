import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";

@Entity()
export class Magazine {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    yearPublication: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    numberPages: number;

    @Column()
    stock: number;

    @Column()
    price: number;
    
    @Column()
    authorId: number;

    /*Relación Muchos a Uno */
    @ManyToOne(() => User, user => user.magazines)
    author: User
}