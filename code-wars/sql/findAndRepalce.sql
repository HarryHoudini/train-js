--https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions
-- Given a string of digits, you should replace any digit below 5 with '0'
-- and any digit 5 and above with '1'. Return the resulting string.

-- Note: input will never be an empty string

SELECT x, TRANSLATE(x, '123456789', '000011111') AS res
FROM fakebin

select x,   regexp_replace(regexp_replace(x, '[0-4]', '0', 'g'), '[5-9]', '1', 'g')
AS res from fakebin;


create or replace function binString(s text)
    RETURNS  text
LANGUAGE 'plpgsql' AS $$

      DECLARE RetString text :='';
      Declare tempString text:='';
      Declare temp_no INT;
      declare i int :=length(s);
      declare cout int :=1;
    BEGIN
     WHILE (cout <= i) LOOP
         temp_no = cast(substring(s,cout,1) as INT);
         if (temp_no >= 5) then
          RetString := concat(RetString,'1');

         elsif (temp_no < 5) and (temp_no >=0) then
          RetString := concat(RetString,'0');
         end if;
         cout:= cout + 1;
      END LOOP;
    RETURN RetString;
  END; $$;

  Select x, binString(x) as res from fakebin;
