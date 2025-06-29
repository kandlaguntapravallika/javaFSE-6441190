CREATE DEFINER=`root`@`localhost` PROCEDURE `ProcessMonthlyInterest`()
BEGIN
    DECLARE finished INT DEFAULT FALSE;
    DECLARE acc_id INT;
    DECLARE acc_balance DECIMAL(10, 2);

    DECLARE accounts_cursor CURSOR FOR 
        SELECT AccountID, Balance 
        FROM Accounts 
        WHERE AccountType = 'Savings';

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = TRUE;

    OPEN accounts_cursor;

    read_loop: LOOP
        FETCH accounts_cursor INTO acc_id, acc_balance;
        IF finished THEN
            LEAVE read_loop;
        END IF;

        -- Apply 1% interest
        SET acc_balance = acc_balance * 1.01;

        UPDATE Accounts
        SET Balance = acc_balance
        WHERE AccountID = acc_id;
    END LOOP;

    CLOSE accounts_cursor;
    COMMIT;
END
