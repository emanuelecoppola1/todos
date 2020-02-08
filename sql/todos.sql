drop table if exists todos;
create table todos (
    id integer  primary key, 
    text text not null,
    done integer default 0
);
insert into todos (text) values ("andare a mangiare");
insert into todos (text) values ("alle ore nove");
.header on 
.mode column
select * from todos;
