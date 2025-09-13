package com.example.backend.DTO;

import lombok.Data;

@Data
public class CategotyDTO {
  private Long id;
//    "categoryId": 1,

//    "categoryName": "Mobile"
  private String categoryName;


//    "parentCategoryId": 0
private Long parentCategoryId;


}
