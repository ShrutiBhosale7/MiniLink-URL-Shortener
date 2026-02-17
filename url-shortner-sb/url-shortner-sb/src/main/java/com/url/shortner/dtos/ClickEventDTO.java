package com.url.shortner.dtos;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;


//Represent analytics of clicked urls
@Data
public class ClickEventDTO {


    private LocalDate clickDate;
    private Long count;


}
