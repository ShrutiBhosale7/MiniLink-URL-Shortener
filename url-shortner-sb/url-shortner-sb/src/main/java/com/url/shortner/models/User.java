package com.url.shortner.models;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name="users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)   //jpa automatically generates this
    private Long id;
    private String email;
    private String username;
    private String password;
    private String role="ROLE_USER";


}

//Tihs represents the user in db which stores id,email,username,password for each user
