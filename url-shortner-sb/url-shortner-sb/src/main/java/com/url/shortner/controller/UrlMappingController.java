package com.url.shortner.controller;


import com.url.shortner.dtos.ClickEventDTO;
import com.url.shortner.dtos.UrlMappingDTO;
import com.url.shortner.models.ClickEvent;
import com.url.shortner.models.User;
import com.url.shortner.service.UrlMappingService;
import com.url.shortner.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {

    private UrlMappingService urlMappingService;
    private UserService userService;

    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")  //looks after authentication part
    public ResponseEntity<UrlMappingDTO> createShortUrl(@RequestBody Map<String,String> request, Principal principal)
    {
        String originalUrl =request.get("originalUrl");   //Getting the url in the format of key-value pair :
        User user =userService.findByUsername(principal.getName());  //getting the user as every url in database is mapped with user
        UrlMappingDTO urlMappingDTO= urlMappingService.createShortUrl (originalUrl,user);
        return  ResponseEntity.ok(urlMappingDTO);
    }

    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")  //looks after authentication part
    public ResponseEntity<List<UrlMappingDTO>> getUserUrls(Principal principal)
    {
        User user=userService.findByUsername(principal.getName());
        List<UrlMappingDTO> urls=urlMappingService.getUserUrls(user);  //getting urls for a perticular users
        return ResponseEntity.ok(urls);
    }

    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")  //looks after authentication part
    public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl,
                                                                  @RequestParam("startDate") String startDate,
                                                                  @RequestParam("endDate") String endDate)
    {
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME; //to format the date and time as yyyy-mm-dd and hh:mm:ss
        LocalDateTime start =LocalDateTime.parse(startDate,formatter);
        LocalDateTime end = LocalDateTime.parse(endDate,formatter);
        List<ClickEventDTO> clickEventDTOS =urlMappingService.getClickEventsByDate(shortUrl,start,end);
        return ResponseEntity.ok(clickEventDTOS);

//        this method is for getting the data of urls by date
    }

    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")  //looks after authentication part
    public ResponseEntity<Map<LocalDate,Long>> getTotalClicksByDate(Principal principal,@RequestParam("startDate") String startDate,
                                                                    @RequestParam("endDate") String endDate) {
    //we need user as parameter as total clicks by the user is needed
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE ; //to format the date and time as yyyy-mm-dd and hh:mm:ss
        User user = userService.findByUsername(principal.getName());
        LocalDate start =LocalDate.parse(startDate,formatter);
        LocalDate end = LocalDate.parse(endDate,formatter);
        Map<LocalDate, Long> totalClicks =urlMappingService.getTotalClicksByUserAndDate(user,start,end);
        return ResponseEntity.ok(totalClicks);

    }

}
