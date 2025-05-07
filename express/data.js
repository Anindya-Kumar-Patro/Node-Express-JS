const restraurant = [
    {
      "id": 1,
      "name": "Ocean's Delight",
      "address": "456 Oak Ave, Lakeside",
      "phone": "+1-405-675-4269",
      "email": "oceansdelight@example.com",
      "menu": [
        {
          "id": "24b8622f-0bf8-4b71-842f-a1e55280f92b",
          "name": "Soup",
          "description": "Delicious Soup made with fresh ingredients.",
          "price": 17.58,
          "category": "Main Course"
        },
        {
          "id": "a1c43a4f-27f2-49f9-9ef0-4422bcd9d78f",
          "name": "Curry",
          "description": "Delicious Curry made with fresh ingredients.",
          "price": 16.63,
          "category": "Main Course"
        }
        // ... more menu items
      ],
      "employees": [
        {
          "id": "23a32618-6a1a-4705-8d09-9578337f3991",
          "name": "Employee 1",
          "role": "Host",
          "email": "employee1@restaurant.com",
          "phone": "+1-412-808-5623"
        }
        // ... more employees
      ],
      "tables": [
        {
          "table_number": 1,
          "seats": 4,
          "is_available": false
        }
        // ... more tables
      ],
      "orders": [
        {
          "order_id": "ce4e95f5-9fe7-4794-b1b6-6a0c4a0825c9",
          "table_number": 3,
          "items": [
            {
              "item_id": "a525fc9d-6e76-4360-a017-4afc4b24a08f",
              "name": "Pizza",
              "quantity": 3,
              "price": 16.75
            }
            // ... more items
          ],
          "total_price": 177.04,
          "status": "Completed",
          "order_time": "2025-04-12T18:16:50.027675"
        }
        // ... more orders
      ]
    },
    {
      "id": 2,
      "name": "Green Garden",
      "address": "101 Maple Dr, Hill Valley",
      "phone": "+1-333-834-3844",
      "email": "greengarden@example.com",
      "menu": [
        {
          "id": "f03da514-0849-4abc-bf65-25d7fd5f6390",
          "name": "Curry",
          "description": "Delicious Curry made with fresh ingredients.",
          "price": 24.95,
          "category": "Main Course"
        }
        // ... more menu items
      ],
      "employees": [
        {
          "id": "10db4d22-406a-48ad-9708-722e6cbe70a3",
          "name": "Employee 1",
          "role": "Waiter",
          "email": "employee1@restaurant.com",
          "phone": "+1-994-483-9795"
        }
        // ... more employees
      ],
      "tables": [
        {
          "table_number": 1,
          "seats": 2,
          "is_available": false
        }
        // ... more tables
      ],
      "orders": [
        {
          "order_id": "dc6014e0-7d1b-4d21-af95-6ad219b28cf1",
          "table_number": 6,
          "items": [
            {
              "item_id": "0f44e9b0-8995-44e2-b850-1372401975df",
              "name": "Soup",
              "quantity": 2,
              "price": 20.17
            }
            // ... more items
          ],
          "total_price": 168.91,
          "status": "Completed",
          "order_time": "2025-04-06T18:16:50.029612"
        }
        // ... more orders
      ]
    }
  ]
  
module.exports = {restraurant}  