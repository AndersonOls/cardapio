package com.example.cardapio.controller;

import com.example.cardapio.dtos.FoodResponseDTO;
import com.example.cardapio.model.FoodModel;
import com.example.cardapio.repositories.FoodRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("foods")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity<FoodModel> saveProduct(@RequestBody @Valid FoodResponseDTO foodResponseDTO){
        var foodModel = new FoodModel();
        BeanUtils.copyProperties(foodResponseDTO, foodModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(foodRepository.save(foodModel));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<List<FoodModel>> getAllFoods(){
        return ResponseEntity.status(HttpStatus.OK).body(foodRepository.findAll());
    }
}
