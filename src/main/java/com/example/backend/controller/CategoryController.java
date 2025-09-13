package com.example.backend.controller;

import com.example.backend.entity.CategoryEntity;
import com.example.backend.entity.ProductEntity;
import com.example.backend.repo.CategoryRepo;
import com.example.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

  @Autowired
  private CategoryRepo CatRepo;

  @PostMapping
  public ResponseEntity<List<CategoryEntity>> createCat(@RequestBody List<CategoryEntity> cat) {
    return ResponseEntity.ok(CatRepo.saveAll(cat));
  }
  @GetMapping
  public ResponseEntity<List<CategoryEntity>> getCat() {
    return ResponseEntity.ok(CatRepo.findAll());
  }
}
