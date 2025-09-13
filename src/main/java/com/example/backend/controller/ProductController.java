package com.example.backend.controller;

import com.example.backend.entity.ProductEntity;
import com.example.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  private ProductRepo productRepo;

  @PostMapping
  public ResponseEntity<List<ProductEntity>> createProduct(@RequestBody List<ProductEntity> product) {
    return ResponseEntity.ok(productRepo.saveAll(product));
  }
  @PostMapping
  public ResponseEntity<ProductEntity> createProduct(@RequestBody ProductEntity product) {
    return ResponseEntity.ok(productRepo.save(product));
  }

  @GetMapping
  public ResponseEntity<List<ProductEntity>> getProduct() {
    return ResponseEntity.ok(productRepo.findAll());
  }
}
