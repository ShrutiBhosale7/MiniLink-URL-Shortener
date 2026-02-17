package com.url.shortner.dtos;
//dtos- Data Transfer Objects

import lombok.Data;

import java.util.Set;

@Data
public class RegisterRequest {

    private String username;
    private String email;
    private Set<String> role;
    private String password;


}
