# Trip Model

Records the booking details and final costs of journeys.

### Table Name: `trips`

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | Unique ID for the trip |
| `customer_id` | UUID | Foreign Key -> `users.id` | User who booked the trip |
| `vehicle_id` | UUID | Foreign Key -> `vehicles.id` | Vehicle used for the trip |
| `distance_km` | NUMERIC | Not Null | Distance of the trip |
| `passengers` | INTEGER | Not Null | Number of people traveling |
| `tripCost` | NUMERIC | Nullable | Calculated at the end of the trip |
| `isCompleted` | BOOLEAN | Default: `false` | Trip status |

### Logic Formula
- `tripCost = distance_km * vehicles.rate_per_km`