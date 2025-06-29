CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateEmployeeBonus`(
    IN in_department VARCHAR(255),
    IN in_bonus_percentage DECIMAL(5, 2)
)
BEGIN
    DECLARE done_flag INT DEFAULT FALSE;
    DECLARE emp_id INT;
    DECLARE emp_salary DECIMAL(10, 2);

    DECLARE emp_cursor CURSOR FOR 
        SELECT EmployeeID, Salary 
        FROM Employees 
        WHERE Department = in_department;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done_flag = TRUE;

    OPEN emp_cursor;

    update_loop: LOOP
        FETCH emp_cursor INTO emp_id, emp_salary;
        IF done_flag THEN
            LEAVE update_loop;
        END IF;

        SET emp_salary = emp_salary * (1 + in_bonus_percentage / 100);

        UPDATE Employees
        SET Salary = emp_salary
        WHERE EmployeeID = emp_id;
    END LOOP;

    CLOSE emp_cursor;
    COMMIT;
END
