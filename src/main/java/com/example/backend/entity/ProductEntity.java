package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@Table(name = "products")
public class ProductEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
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

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getProductSku() {
    return productSku;
  }

  public void setProductSku(String productSku) {
    this.productSku = productSku;
  }

  public String getProductName() {
    return productName;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public Integer getProductPrice() {
    return productPrice;
  }

  public void setProductPrice(Integer productPrice) {
    this.productPrice = productPrice;
  }

  public String getProductShortName() {
    return productShortName;
  }

  public void setProductShortName(String productShortName) {
    this.productShortName = productShortName;
  }

  public String getProductDescription() {
    return productDescription;
  }

  public void setProductDescription(String productDescription) {
    this.productDescription = productDescription;
  }

  public String getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(String createdDate) {
    this.createdDate = createdDate;
  }

  public String getLastModifiedDate() {
    return lastModifiedDate;
  }

  public void setLastModifiedDate(String lastModifiedDate) {
    this.lastModifiedDate = lastModifiedDate;
  }

  public String getDeliveryTimeSpan() {
    return deliveryTimeSpan;
  }

  public void setDeliveryTimeSpan(String deliveryTimeSpan) {
    this.deliveryTimeSpan = deliveryTimeSpan;
  }

  public Long getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(Long categoryId) {
    this.categoryId = categoryId;
  }

  public String getProductImageUrl() {
    return productImageUrl;
  }

  public void setProductImageUrl(String productImageUrl) {
    this.productImageUrl = productImageUrl;
  }

  public String getCategoryName() {
    return categoryName;
  }

  public void setCategoryName(String categoryName) {
    this.categoryName = categoryName;
  }

  @Override
  public String toString() {
    return "ProductEntity{" +
      "id=" + id +
      ", productSku='" + productSku + '\'' +
      ", productName='" + productName + '\'' +
      ", productPrice=" + productPrice +
      ", productShortName='" + productShortName + '\'' +
      ", productDescription='" + productDescription + '\'' +
      ", createdDate='" + createdDate + '\'' +
      ", lastModifiedDate='" + lastModifiedDate + '\'' +
      ", deliveryTimeSpan='" + deliveryTimeSpan + '\'' +
      ", categoryId=" + categoryId +
      ", productImageUrl='" + productImageUrl + '\'' +
      ", categoryName='" + categoryName + '\'' +
      '}';
  }
}

