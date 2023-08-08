package com.sda.rentalloapp.dto;

import com.sda.rentalloapp.domain.enumeration.BodyType;
import com.sda.rentalloapp.domain.enumeration.EngineType;
import com.sda.rentalloapp.domain.enumeration.FuelType;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import org.antlr.v4.runtime.misc.NotNull;

@Builder
public record CarDto(
        Long id,
        @NotNull
        @Size(min = 1)
        String model,
        @NotNull
        @Size(min = 2)
        String brand,
        FuelType fuelType,
        EngineType engineType,
        BodyType bodyType,
        int numberOfSeats,
        int trunkCapacityInLitres,
        String combustionPer100Km,
        String bodySerialNumber,
        int pricePerDayInPolishGrosz,
        boolean available,
        int rangeInKm,
        @NotNull
        PicturesDto pictures
) {
}
