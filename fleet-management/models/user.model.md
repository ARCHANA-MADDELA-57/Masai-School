# User Model

This table stores all registered users and defines their specific roles within the fleet management system.

### Table Name: `users`

| Column Name | Data Type   | Constraints                               | Description                               |
| :---        | :---        | :---                                      | :---                                      |
| `id`        | UUID        | Primary Key, Default: `gen_random_uuid()` | Unique identifier for each user           |
| `name`      | TEXT        | Not Null                                  | Full name of the user                     |
| `email`     | TEXT        | Not Null, Unique                          | Login email                               |
| `password`  | TEXT        | Not Null                                  | Raw password (as per project requirements)|
| `role`      | TEXT        | Check: `customer`, `owner`, `driver`      | Defines user permissions and access       |
| `created_at`| TIMESTAMPTZ | Default: `now()` | Registration timestamp |

### Relationships
- **One-to-Many**: One User (Owner) can own multiple Vehicles.
- **One-to-Many**: One User (Driver) can be assigned to one Vehicle at a time.
- **One-to-Many**: One User (Customer) can book multiple Trips.