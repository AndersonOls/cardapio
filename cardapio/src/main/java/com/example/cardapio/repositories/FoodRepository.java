package com.example.cardapio.repositories;

import com.example.cardapio.model.FoodModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FoodRepository extends JpaRepository <FoodModel, UUID> {
}
