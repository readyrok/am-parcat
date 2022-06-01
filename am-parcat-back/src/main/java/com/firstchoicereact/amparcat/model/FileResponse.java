package com.firstchoicereact.amparcat.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileResponse {
    private String id;
    private String name;
    private Long size;
    private String url;
    private String contentType;
    private String uploader;
    private String address;
    private String city;
    private String plateNumber;
}
