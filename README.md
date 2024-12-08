API Documentation: Multi-Level Referral and Earning System

Base URL

http://localhost:5000


1. Create a New User

POST /users

Description: Registers a new user and optionally links them to a parent for referral tracking.

Request Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "parentId": "648a123b456c789d012ef345"  // Optional
}

2. Fetch a User and Their Referrals
Endpoint: GET /users/:id

Description: Retrieves a user’s details, including their direct referrals.
id: The unique identifier of the user.

3. Record a Purchase Transaction
Endpoint: POST /transactions
Description: Logs a purchase made by a user and triggers the earnings distribution process.

Request Body:
{
  "userId": "648a789b012c345d678e901f",
  "amount": 2000
}

