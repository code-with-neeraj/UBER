# API Documentation

## POST /users/register

### Description
Creates a new user account and returns an authentication token upon success.

### Request Body
- `fullname`: Object containing:
  - `firstname` (String): **Required**. Must be at least 3 characters long.
  - `lastname` (String): *Optional*. If provided, must be at least 3 characters long.
- `email` (String): **Required**. Must be a valid email and at least 5 characters long.
- `password` (String): **Required**. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Responses
- **201 Created**:  
  The user account was created successfully.  
  Response includes:
  - `token`: Authentication token for the user.
  - `user`: Details of the registered user.

- **400 Bad Request**:  
  The request failed due to validation errors.  
  Response includes error details for each field.

#### Example Response (201 Created):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## POST /users/login

### Description
Authenticates an existing user and returns an authentication token upon success.

### Request Body
- `email` (String): **Required**. Must be a valid email.
- `password` (String): **Required**. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Responses
- **200 OK**:  
  Authentication succeeded.  
  Response includes:
  - `token`: Authentication token for the user.
  - `user`: Details of the authenticated user.

- **401 Unauthorized**:  
  Authentication failed due to invalid credentials.

#### Example Response (200 OK):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## GET /users/profile

### Description
Retrieves the authenticated user's profile.

### Headers
- Authorization: Bearer token (or cookie-based auth)

### Responses
- **200 OK**: Returns the user's profile object.
- **401 Unauthorized**: Authentication failed.

#### Example Response (200 OK):
```json
{
  "id": "123456",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

## GET /users/logout

### Description
Logs out the authenticated user by clearing the token and blacklisting it.

### Headers
- Authorization: Bearer token (or cookie-based auth)

### Responses
- **200 OK**: Returns a message confirming logout.
- **401 Unauthorized**: Authentication failed.

#### Example Response (200 OK):
```json
{
  "message": "Logged out"
}
```

## Captain Routes

### POST /captains/register

Registers a new captain with the required details.

#### Request Body
- `email` (String): **Required**. Must be a valid email.
- `fullname`: Object containing:
  - `firstname` (String): **Required**. At least 3 characters.
  - `lastname` (String): *Optional*.
- `password` (String): **Required**. At least 6 characters.
- `vehicle`: Object containing:
  - `color` (String): **Required**. At least 3 characters.
  - `plate` (String): **Required**. At least 3 characters.
  - `capacity` (Number): **Required**. Integer, at least 1.
  - `vehicleType` (String): **Required**. Must be one of: 'car', 'motorcycle', 'auto'.

#### Example Request
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "secret123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses
- **201 Created**:  
  Returns the created captain's details.
- **400 Bad Request**:  
  Validation errors with details.

### POST /captains/login

Authenticates an existing captain and returns an authentication token upon success.

#### Request Body
```json
{
  "email": "captain@example.com", // Required: Must be a valid email.
  "password": "secret123" // Required: Minimum 6 characters.
}
```

#### Responses
- **200 OK**: Returns authentication token and captain details.
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // Authentication token.
  "captain": {
    "id": "unique_id", // Unique identifier for the captain.
    "email": "captain@example.com",
    "fullname": {
      "firstname": "John", // Minimum 3 characters.
      "lastname": "Doe" // Optional field.
    },
    "vehicle": {
      "color": "red", // Minimum 3 characters.
      "plate": "XYZ123", // Minimum 3 characters.
      "capacity": 4, // Integer, at least 1.
      "vehicleType": "car" // Must be one of: 'car', 'motorcycle', 'auto'.
    }
  }
}
```

- **401 Unauthorized**: Authentication failed.

### GET /captains/profile

Retrieves the profile of the authenticated captain.

#### Headers
- Authorization: Bearer token (or cookie-based auth)

#### Responses
- **200 OK**: Returns the captain's profile details.
```json
{
  "captain": {
    "id": "unique_id", // Unique identifier.
    "email": "captain@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

- **401 Unauthorized**: Authentication failed.

### GET /captains/logout

Logs out the authenticated captain by clearing the token and blacklisting it.

#### Headers
- Authorization: Bearer token (or cookie-based auth)

#### Responses
- **200 OK**: Returns a confirmation message upon successful logout.
```json
{
  "message": "Logout successfully" // Confirmation message.
}
```

- **401 Unauthorized**: Authentication failed.

## Maps Routes

### GET /maps/get-coordinates
- **Description:** Retrieves the latitude and longitude for a given address.
- **Query Parameters:**
  ```json
  {
    "address": "1600 Amphitheatre Parkway, Mountain View, CA" // Required: Must be a string with at least 3 characters.
  }
  ```
- **Responses:**
  - **200 OK:**
    ```json
    {
      "ltd": 37.4224764, // Latitude of the address.
      "lng": -122.0842499 // Longitude of the address.
    }
    ```
  - **400 Bad Request:** Validation errors.
  - **404 Not Found:** Unable to fetch coordinates.

### GET /maps/get-distance-time
- **Description:** Retrieves the distance and estimated travel time between two locations.
- **Query Parameters:**
  ```json
  {
    "origin": "New York, NY", // Required: Must be a string with at least 3 characters.
    "destination": "Los Angeles, CA" // Required: Must be a string with at least 3 characters.
  }
  ```
- **Responses:**
  - **200 OK:**
    ```json
    {
      "distance": {
        "text": "2,789 miles", // Human-readable distance.
        "value": 4489640 // Distance in meters.
      },
      "duration": {
        "text": "41 hours", // Human-readable duration.
        "value": 147600 // Duration in seconds.
      }
    }
    ```
  - **400 Bad Request:** Validation errors.
  - **404 Not Found:** No routes found.

### GET /maps/get-suggestions
- **Description:** Retrieves autocomplete suggestions for a given input query.
- **Query Parameters:**
  ```json
  {
    "input": "1600 Amphitheatre" // Required: Must be a string with at least 3 characters.
  }
  ```
- **Responses:**
  - **200 OK:**
    ```json
    [
      {
        "description": "1600 Amphitheatre Parkway, Mountain View, CA, USA", // Suggested address.
        "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWA" // Unique identifier for the place.
      },
      {
        "description": "1600 Amphitheatre, Mountain View, CA, USA",
        "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWB"
      }
    ]
    ```
  - **400 Bad Request:** Validation errors.
  - **404 Not Found:** Unable to fetch suggestions.


### POST /rides/create

#### Description
Creates a new ride request with the provided details.

#### Request Body
- `pickup` (String): **Required**. The pickup location. Must be a string with at least 3 characters.
- `destination` (String): **Required**. The destination location. Must be a string with at least 3 characters.
- `vehicleType` (String): **Required**. The type of vehicle for the ride. Must be one of: `auto`, `car`, `moto`.

#### Headers
- Authorization: Bearer token (or cookie-based auth) is required for user authentication.

#### Example Request
```http
POST /rides/create
Content-Type: application/json
Authorization: Bearer <token>

{
  "pickup": "1600 Amphitheatre Parkway",
  "destination": "1 Infinite Loop",
  "vehicleType": "car"
}
```

#### Responses
- **201 Created**:  
  Returns the details of the created ride.
  ```json
  {
    "id": "ride123",
    "user": "user123",
    "pickup": "1600 Amphitheatre Parkway",
    "destination": "1 Infinite Loop",
    "fare": 75.3,
    "status": "pending",
    "otp": "123456"
  }
  ```

- **400 Bad Request**:  
  Validation errors with details.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid pickup address",
        "param": "pickup",
        "location": "body"
      },
      {
        "msg": "Invalid destination address",
        "param": "destination",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicleType",
        "location": "body"
      }
    ]
  }
  ```

- **500 Internal Server Error**:  
  An error occurred while processing the request.
  ```json
  {
    "message": "Internal server error"
  }
  ```

### GET /rides/get-fare

#### Description
Retrieves the estimated fare for a ride based on the pickup and destination locations.

#### Query Parameters
- `pickup` (String): **Required**. The pickup location. Must be a string with at least 3 characters.
- `destination` (String): **Required**. The destination location. Must be a string with at least 3 characters.

#### Example Request
```http
GET /rides/get-fare?pickup=1600+Amphitheatre+Parkway&destination=1+Infinite+Loop
```

#### Responses
- **200 OK**:  
  Returns the estimated fare for different vehicle types.
  ```json
  {
    "auto": 50.5,
    "car": 75.3,
    "moto": 40.2
  }
  ```

- **400 Bad Request**:  
  Validation errors with details.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid pickup address",
        "param": "pickup",
        "location": "query"
      },
      {
        "msg": "Invalid destination address",
        "param": "destination",
        "location": "query"
      }
    ]
  }
  ```

- **500 Internal Server Error**:  
  An error occurred while processing the request.
  ```json
  {
    "message": "Internal server error"
  }
  ```