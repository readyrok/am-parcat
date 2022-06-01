package com.firstchoicereact.amparcat.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "FILES")
@Getter
@Setter
public class FileEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String name;
    private String contentType;
    private Long size;
    @Lob
    private byte[] data;
    private String uploader;
    private String address;
    private String city;
    private String plateNumber;
}
