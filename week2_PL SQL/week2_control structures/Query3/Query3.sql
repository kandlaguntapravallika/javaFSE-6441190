CREATE DEFINER=`root`@`localhost` PROCEDURE `SendLoanReminders`()
BEGIN
    DECLARE is_done INT DEFAULT FALSE;
    DECLARE borrower_name VARCHAR(255);
    DECLARE total_loan DECIMAL(10, 2);
    DECLARE due_date DATE;

    -- Cursor to fetch upcoming loan due details
    DECLARE loan_cursor CURSOR FOR 
        SELECT cust.Name, ln.LoanAmount, ln.EndDate
        FROM Loans ln
        JOIN Customers cust ON ln.CustomerID = cust.CustomerID
        WHERE ln.EndDate BETWEEN CURDATE() AND CURDATE() + INTERVAL 30 DAY;

    -- Handler to detect when the cursor is done
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET is_done = TRUE;

    OPEN loan_cursor;

    loan_loop: LOOP
        FETCH loan_cursor INTO borrower_name, total_loan, due_date;
        IF is_done THEN
            LEAVE loan_loop;
        END IF;

        -- Display the reminder message
        SELECT CONCAT('Reminder: Loan for customer ', borrower_name, 
                      ' with amount $', total_loan,
                      ' is due on ', DATE_FORMAT(due_date, '%Y-%m-%d')) AS ReminderMessage;
    END LOOP;

    CLOSE loan_cursor;
END;
