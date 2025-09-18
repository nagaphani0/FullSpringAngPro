package com.example.backend.DTO;

import lombok.Data;

@Data
public class UserDTO {
  private Long id;

//    "CustId": 0,
//    "Name": "string",
  private String Name;

//    "MobileNo": "string",
  private String MobileNo;

//    "Password": "string"
  private String Password;

}
