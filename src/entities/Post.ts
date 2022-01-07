import { Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post{
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ type : "text" })
    title!: string;

    // @ManyToOne()
    // author!: Author;

    // @ManyToOne(() => Publisher)
    // publisher?: Publisher;

    // @ManyToMany()
    // tags = new Collection<BookTag>(this);

    // constructor(title: string, author: Author){
    //     this.title = title;
    //     this.author = author
    // }
}