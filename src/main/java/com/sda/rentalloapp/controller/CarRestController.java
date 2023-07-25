package com.sda.rentalloapp.controller;

import com.sda.rentalloapp.domain.Car;
import com.sda.rentalloapp.dto.CarDto;
import com.sda.rentalloapp.mapper.CarMapper;
import com.sda.rentalloapp.service.CarService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@@ -15,15 +17,20 @@
public class CarRestController {

    private final CarService carService;
    private final CarMapper carMapper;

    public CarRestController(CarService carService) {
    public CarRestController(CarService carService, CarMapper carMapper) {
            this.carService = carService;
            this.carMapper = carMapper;
        }

        @GetMapping("/cars")
        public List<Car> allCars() {
            public List<CarDto> allCars() {
                log.info("all cars request");

                return carService.getAllCars();
                return carService.getAllCars()
                        .stream()
                        .map(car -> carMapper.fromEntityToDto(car))
                        .toList();
            }
        }