CREATE DEFINER=`root`@`localhost` PROCEDURE `SetVIPStatus`()
BEGIN
    -- Declare control and data variables
    DECLARE is_done INT DEFAULT FALSE;
    DECLARE var_customer_id INT;
    DECLARE var_balance DECIMAL(10,2);

    -- Declare a cursor to iterate through customers
    DECLARE cur_customers CURSOR FOR 
        SELECT CustomerID, Balance FROM Customers;

    -- Handler for when there is no more data
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET is_done = TRUE;

    -- Open the cursor
    OPEN cur_customers;

    -- Begin looping through cursor data
    read_loop: LOOP
        FETCH cur_customers INTO var_customer_id, var_balance;
        IF is_done THEN
            LEAVE read_loop;
        END IF;

        -- Check balance and update VIP status
        IF var_balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = var_customer_id;
        END IF;
    END LOOP;

    -- Close the cursor and commit changes
    CLOSE cur_customers;
    COMMIT;
END;
