package com.url.shortner.dtos;

import lombok.Data;

import java.time.LocalDateTime;


//Represent a mapped url
@Data
public class UrlMappingDTO {

    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount;
    private LocalDateTime createdDate;
    private String username;
}
