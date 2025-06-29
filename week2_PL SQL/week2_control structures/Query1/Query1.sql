CREATE DEFINER=`root`@`localhost` PROCEDURE `ApplyLoanDiscount`()
BEGIN
    -- Declare variables
    DECLARE is_done INT DEFAULT FALSE;
    DECLARE var_customer_id INT;
    DECLARE var_dob DATE;
    DECLARE var_age INT;

    -- Declare cursor for selecting customer ID and DOB
    DECLARE cur_customers CURSOR FOR 
        SELECT CustomerID, DOB FROM Customers;

    -- Handler for end of data
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET is_done = TRUE;

    -- Open cursor
    OPEN cur_customers;

    -- Loop through each customer
    read_loop: LOOP
        FETCH cur_customers INTO var_customer_id, var_dob;
        IF is_done THEN
            LEAVE read_loop;
        END IF;

        -- Calculate age
        SET var_age = TIMESTAMPDIFF(YEAR, var_dob, CURDATE());

        -- Apply discount if age is over 60
        IF var_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = var_customer_id;
        END IF;
    END LOOP;

    -- Close cursor
    CLOSE cur_customers;

    -- Commit transaction
    COMMIT;
END;
