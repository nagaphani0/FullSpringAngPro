package com.example.backend.repo;


import com.example.backend.entity.CategoryEntity;
import com.example.backend.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<ProductEntity, Long> { }

