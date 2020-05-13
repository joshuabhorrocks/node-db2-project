
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 1234, Make: 'Lamborghini', Model: 'Diablo', Mileage: 50000, Transmission: "Manual", Title_Status: "Clean"},
        {id: 2, VIN: 1255, Make: 'Lamborghini', Model: 'Murcielago', Mileage: 30000, Transmission: "Manual", Title_Status: "Clean"},
        {id: 3, VIN: 10785, Make: 'Lamborghini', Model: 'Huracan', Mileage: 1000, Transmission: "Manual", Title_Status: "Clean"}
      ]);
    });
};
