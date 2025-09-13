package com.example.backend.DTO;

import lombok.Data;

@Data
public class ProductDTO {
  private Long id;
  private String productSku;
//    "productSku": "w45",
  private String productName;
//    "productName": "Head Phone Black Magical ",
  private Integer productPrice;
//    "productPrice": 7500,
  private String productShortName;
//    "productShortName": "w45",
  private String productDescription;
//    "productDescription": "Text containing information about product like quality,color,size,material used,duration.Also include text that explain in brief how selected product is better than other local products. ",
  private String createdDate;

//      "createdDate": "2025-09-06T00:08:01.153",
  private String lastModifiedDate;
//    "deliveryTimeSpan": "2- days",
  private String deliveryTimeSpan;
//    "categoryId": 6,
  private Long categoryId;
//    "productImageUrl": "https://cdn.pixabay.com/photo/2024/08/13/18/37/ai-generated-8966845_1280.jpg",
  private String productImageUrl;
//    "categoryName": "headphones"
  private String categoryName;

}
