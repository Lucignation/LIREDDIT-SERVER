import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constant';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

console.log("Dirname", __dirname);

const main = async () =>{
    const orm = MikroORM.init(mikroConfig);
    (await orm).getMigrator().up();
    const post = (await orm).em.create(Post, { title: "This is my first title" });
    (await orm).em.persistAndFlush(post);

   const posts =  (await orm).em.find(Post, {});

   console.log(`Theese are the posts: ${posts}`);

    // console.log("--------------------- sq2 -------------------------");
    // (await orm).em.nativeInsert(Post, { title: "This is my post 2" });

}

main().catch(err => console.log(err));

console.log("Hello world")