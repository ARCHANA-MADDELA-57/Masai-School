# Vehicle Model

This table stores information about the cars/buses available in the fleet.

### Table Name: `vehicles`

| Column Name           | Data Type | Constraints                           | Description                   |
| :---                  | :---      | :---                                  | :---                          |
| `id`                  | UUID      | Primary Key                           | Unique ID for the vehicle     |
| `name`                | TEXT      | Not Null                              | Car model name                |
| `registration_number` | TEXT      | Unique, Not Null                      | Plate number                  |
| `allowed_passengers`  | INTEGER   | Not Null                              | Seating capacity              |
| `isAvailable`         | BOOLEAN   | Default: `true`                       | Status of the vehicle         |
| `rate_per_km`         | NUMERIC   | Not Null                              | Cost used for trip calculation|
| `owner_id`            | UUID      | Foreign Key -> `users.id`             | The owner of the vehicle      |
| `driver_id`           | UUID      | Foreign Key -> `users.id` (Nullable)  | Currently assigned driver     |

### Business Rules
- A vehicle can only be assigned to a trip if `isAvailable` is `true`.
- The `rate_per_km` is multiplied by trip distance to calculate cost.