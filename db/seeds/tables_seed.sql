drop table if exists reminder_interval, behavior_value, teacher, student, behavior, time_slot, student_log

create table reminder_interval (
    reminder_interval_id serial primary key,
    reminder_interval int
);
insert into reminder_interval ( reminder_interval)
values (5),(10),(15),(30),(60);


create table behavior_value (
    behavior_value_id serial primary key,
    behavior_value varchar(10)
);
insert into behavior_value (behavior_value)
values ('positive'),('negative');



create table teacher (
    teacher_id serial primary key,
    teacher_name varchar(50),
    teacher_email varchar(180),
    hash text
);

create table student (
    student_id serial primary key,
    student_name varchar(50)
);
alter table student
    add column reminder_interval int,
    add foreign key (reminder_interval) references reminder_interval (reminder_interval_id);


create table behavior (
    behavior_id serial primary key
);
alter table behavior
    add column behavior_value int,
    add foreign key (behavior_value) references behavior_value (behavior_value_id);


create table time_slot (
    time_slot_id serial primary key,
    time_value varchar(50)
);
insert into time_slot (time_value)
values ('9:15'),('9:20'),('9:25'),('9:30'),('9:35'),('9:40'),('9:45'),('9:50'),('9:55'),
('10:00'),('10:05'),('10:10'),('10:15'),('10:20'),('10:25'),('10:30'),('10:35'),('10:40'),('10:45'),('10:50'),('10:55'),
('11:00'),('11:05'),('11:10'),('11:15'),('11:20'),('11:25'),('11:30'),('11:35'),('11:40'),('11:45'),('11:50'),('11:55'),
('12:00'),('12:05'),('12:10'),('12:15'),('12:20'),('12:25'),('12:30'),('12:35'),('12:40'),('12:45'),('12:50'),('12:55'),
('1:00'),('1:05'),('1:10'),('1:15'),('1:20'),('1:25'),('1:30'),('1:35'),('1:40'),('1:45'),('1:50'),('1:55'),
('2:00'),('2:05'),('2:10'),('2:15'),('2:20'),('2:25'),('2:30'),('2:35'),('2:40'),('2:45'),('2:50'),('2:55'),
('3:00'),('3:05'),('3:10'),('3:15'),('3:20'),('3:25'),('3:30');

create table student_log (
    log_id serial primary key,
    log_comment varchar(180),
    log_date date
);
alter table student_log
    add column teacher_id int,
    add foreign key (teacher_id) references teacher (teacher_id);
alter table student_log
    add column student_id int,
    add foreign key (student_id) references student (student_id);
alter table student_log
    add column behavior_id int,
    add foreign key (behavior_id) references behavior (behavior_id);
alter table student_log
    add column time_slot_id int,
    add foreign key (time_slot_id) references time_slot (time_slot_id);
