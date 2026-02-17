package com.url.shortner.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class UrlMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount =0;
    private LocalDateTime createdDate;

    @ManyToOne  //creting many ot one relationship with user table
    @JoinColumn(name="user_id")  //specifies foriegn key linking of this table to user
    private User user;

    @OneToMany(mappedBy = "urlMapping")  //defining onetomany relationship and it is mapped by urlMapping
    private List<ClickEvent> clickEvents;
}
