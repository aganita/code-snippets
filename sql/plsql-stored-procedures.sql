set autotrace off
set serveroutput on ----dbms_output.put_line ('test');


-- remove the duplicates from person_setting_map and create a unique index to avoid duplicated entries in future
---- dedup person_setting_map
declare
  cursor c
  is
    select person_id,
      person_setting_type_id
    from person_setting_map
    group by person_setting_type_id,
      person_id
    having count(*) > 1
    order by person_setting_type_id;
begin
  for m in c
  loop
    dbms_output.put_line(m.person_id||' '||m.person_setting_type_id);
    delete
    from person_setting_map
    where person_id            = m.person_id
    and person_setting_type_id = m.person_setting_type_id
    and person_setting_map_id  <
      (select max(person_setting_map_id)
      from person_setting_map
      where person_id            = m.person_id
      and person_setting_type_id = m.person_setting_type_id
      ) ;
  end loop;
end;
/
commit;
---- create the unique index
---- need to rerun if you can't create the index since it means more dups where created in the meantime
create unique index person_setmap_uniq_idx on person_setting_map (person_id, person_setting_type_id);
  commit;


-- copy information of customer 5779610 to test customer
  declare
    cursor v_customer
    is
      select * from customer where customer_id = 5779610;
  begin
    for vc in v_customer
    loop
      vc.customer_last_name   := 'SANDBOX';
      vc.customer_first_name  := 'TEST';
      vc.store_id             := 'SANDBOX';
      vc.customer_id          := customer_id_seq.nextval;
      vc.customer_control_num := regexp_replace(vc.customer_control_num, '(^.*)([0-9])([A-Z]*$)', '\1\2' || round(dbms_random.value(1,100), 0));
      vc.date_created         := sysdate;
      vc.department_id        := 'EHR';
      vc.store_period_id      := 55213;
      insert into customer values vc;
    end loop;
  end;
  /
  show error


  -- Pull a count of the unique customers that had a visit (counted by dropping the suffix on account numbers and checked in/out visits) in 2014 (DOS 1/1/14-12/31/14).
  ---We also need a total count of unique customers for the practice (again dropping the suffix to count each customer once). We know this will be just a rough estimate. Thanks!
  select regexp_replace('ghjsgf1232', '(^.*)([0-9])(-*)([A-Z]*$)', '\1\2')
  from dual;
  select distinct regexp_replace(customer_control_num, '(^.*)([0-9])(-*)([A-Z]*$)', '\1\2')
  from customer c
  join store_schedule ss
  on (ss.customer_id = c.customer_id)
  where c.store_id   = '810608060'
  and cs.start_time between '01/01/2014' and '12/31/14'
  and cs.checked_in !=0 ;
  select count (distinct regexp_replace(customer_control_num, '(^.*)([0-9])(-*)([A-Z]*$)', '\1\2'))
  from customer c
  join store_schedule cs
  on (cs.customer_id = c.customer_id)
  where c.store_id   = '810608060'
  and cs.start_time between '01/01/2014' and '12/31/14'
  and cs.checked_in !=0 ;


  -- copy all active customer demographics from MainStore (111111) to SecondaryStore (222222). copy ONLY ONE customer acct vs 5 w/the prefix ALL (vs MD or CH)
  declare
    cursor v_customer
    is
      select *
      from customer
      where customer_id in
        (select max(customer_id)
        from customer
        where store_id = '111111'
        group by customer_first_name,
          customer_last_name,
          customer_date_of_birth
        )
    and is_active = 1;
  begin
    for vc in v_customer
    loop
      vc.store_id             := '222222';
      vc.customer_id          := customer_id_seq.nextval;
      vc.customer_control_num := regexp_replace(vc.customer_control_num, '(^.*)([0-9])([A-Z]*$)', '\1\2' || round(dbms_random.value(1,100), 0));
      vc.date_created         := sysdate;
      vc.department_id        := 'AS';
      vc.store_period_id      := 51498;
      insert into customer values vc;
    end loop;
  end;
  /
  show error
  commit;