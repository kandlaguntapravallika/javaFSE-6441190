package com.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/account/details")
    public String getAccountDetails() {
        return "Account details from Account Service";
    }
}
