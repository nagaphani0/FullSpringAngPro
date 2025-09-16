package com.example.backend.controller;

import com.example.backend.entity.ProductEntity;
import com.example.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  private ProductRepo productRepo;

  @PostMapping("/batch")
  public ResponseEntity<List<ProductEntity>> createProduct(@RequestBody List<ProductEntity> product) {
    return ResponseEntity.ok(productRepo.saveAll(product));
  }
  @PostMapping
  public ResponseEntity<ProductEntity> createProducts(@RequestBody ProductEntity product) {
    return ResponseEntity.ok(productRepo.save(product));
  }

  @GetMapping
  public ResponseEntity<List<ProductEntity>> getProduct() {
    return ResponseEntity.ok(productRepo.findAll());
  }
  @PutMapping
  public ResponseEntity<ProductEntity> updateProduct(@RequestBody ProductEntity product) {
    Optional<ProductEntity> optionalProduct =productRepo.findById(product.getId());
    if(optionalProduct.isPresent()) {
      ProductEntity existingProduct = optionalProduct.get(); // 👈 Unwrap the Optional

      existingProduct.setProductName(product.getProductName());
      existingProduct.setProductDescription(product.getProductDescription());
      existingProduct.setProductImageUrl(product.getProductImageUrl());
      existingProduct.setProductPrice(product.getProductPrice());
      existingProduct.setProductShortName(product.getProductShortName());
      existingProduct.setCategoryName(product.getCategoryName());

      return ResponseEntity.ok(productRepo.save(existingProduct));
    }
  else {
    return ResponseEntity.notFound().build();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    if (!productRepo.existsById(id)) {
      return ResponseEntity.notFound().build(); // 404
    }
    productRepo.deleteById(id);
    return ResponseEntity.noContent().build(); // 204 No Content
  }
}
