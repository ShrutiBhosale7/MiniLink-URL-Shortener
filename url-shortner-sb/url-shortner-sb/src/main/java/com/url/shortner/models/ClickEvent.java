package com.url.shortner.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class ClickEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "click_date")
    private LocalDateTime clickDate;

    @ManyToOne
    @JoinColumn(name="url_mapping_id")  //it defines this foriegn key in database that links to urlmapping table
    private UrlMapping urlMapping;
}
