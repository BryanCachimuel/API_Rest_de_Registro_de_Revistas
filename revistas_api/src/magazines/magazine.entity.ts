import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    //autorId: string;
}