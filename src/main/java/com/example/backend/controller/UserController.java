package com.example.backend.controller;

import com.example.backend.entity.UserEntity;
import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserRepo userRepo;

  @PostMapping
  public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity user) {
    return ResponseEntity.ok(userRepo.save(user));
  }

  @GetMapping
  public ResponseEntity<List<UserEntity>> getUsers() {
    return ResponseEntity.ok(userRepo.findAll());
  }

  @PutMapping
  public ResponseEntity<UserEntity> updateUser(@RequestBody UserEntity user) {
    Optional<UserEntity> optionalUser = userRepo.findById(user.getId());
    if (optionalUser.isPresent()) {
      UserEntity existingUser = optionalUser.get(); // 👈 Unwrap the Optional

      existingUser.setName(user.getName());
      existingUser.setMobileNo(user.getMobileNo());
      existingUser.setPassword(user.getPassword());

      return ResponseEntity.ok(userRepo.save(existingUser));
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    if (!userRepo.existsById(id)) {
      return ResponseEntity.notFound().build(); // 404
    }
    userRepo.deleteById(id);
    return ResponseEntity.noContent().build(); // 204 No Content
  }
}
