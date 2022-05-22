# My Assets App Server for MyFutsal

My Assets App is an application to manage your assets. This app has :

- RESTfull endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### Post /users/login

> Login User

**_Request Header :_**

```
not needed
```

**_Request Body :_**

```
{
  "email" : "owner@mail.com",
  "password" : "qweqwe"
}
```

**_Response (200 - OK) :_**

```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im93bmVyQG1haWwuY29tIiwiaWF0IjoxNjUzMjA4MjI2fQ.HNTLBZwJAFBwvGYXtNaaQM4BF3ssBuPw3fWzq8w44XE"
}
```

**_Response (_500 - There was an error on the server and the request could not be completed and 401 - Unauthorized_) :_**

- 500

```
{
  "message": "Internal Server err"
}
```

- 401

```
{
  "message": "Ada kesalahan saat login atau register"
}
```

```
{
  "message": "Email or Password Empty"
}
```

---

### Post /users/register

> Register User

**_Request Header :_**

```
not needed
```

**_Request Body :_**

```
{
  "email" : "YNTKS@mail.com",
  "username" : "3 Priode",
  "phoneNumber" : "0871972639182",
  "address" : "donbas Rusia",
  "password" : "12345"
}
```

**_Response (201 - OK) :_**

```
{
  "message": "Successfuly Registered"
}
```

**_Response (_500 - There was an error on the server and the request could not be completed and 400 - Bad Request_) :_**

- 500

```
{
  "message": "Internal Server err"
}
```

- 400

```
{
  "message": [
    "<field> must be unique"
  ]
}
```

```
{
  "message": [
    "<field> cannot be null"
  ]
}
```

```
{
  "message": [
    "invalid email, exp = 'foo@mail.com'"
  ]
}
```

```
{
  "message": [
    "Minimum password length 4"
  ]
}
```

---

### GET /fields

> Get all Product

**_Request Header :_**

```
{
  "accessToken": "<your access token>"
}
```

**_Request Body :_**

```
not needed
```

**_Response (200 - OK) :_**

```
[
  {
    "id": 2,
    "nameField": "Lapangan A",
    "VenueId": 3,
    "ScheduleId": 1,
    "VenueFutsal": {
      "id": 3,
      "name": "Juara Sport Arena",
      "field": 2,
      "address": "Jl. Alkinanah No.1, RT.3/RW.4, Kampung Curug, Pakansari, Cibinong, Bogor, Jawa Barat 16915",
      "imageUrl": "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210927064125.jpg",
      "imageUrlSecond": "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210927065402.jpg"
    },
    "Schedule": {
      "id": 1,
      "price": 50000,
      "DateTime": "2022-05-20T09:45:53.364Z",
      "hour": "20:30:00"
    }
  }
]
```

**_Response (500 - There was an error on the server and the request could not be completed, 401 - Unauthorized) :_**

```
{
  "message": "Internal Server err"
}
```

```
{
  "message": "Token nya tidak ada"
}
```

---

### POST /fields/

> POST new field

**_Request Header :_**

```
{
  "accessToken": "<your access token>"
}
```

**_Request Body :_**

```
{
  "nameField" : "Lapangan B",
  "VenueId" : "1",
  "ScheduleId" : "1",
}
```

**_Response (200 - OK) :_**

```
{
  "msg": "Success Add New Field Lapangan B"
}
```

**_Response (500 - There was an error on the server and the request could not be completed, 401 -  Unauthorized, 400 - Bad Request) :_**

```
{
  "message": "Internal Server err"
}
```

```
{
  "message": "Token nya tidak ada"
}
```
```
{
  "message": [
    "<field> cannot be Null"
  ]
}
```

---

### DELETE /fields/:fieldId

> Create new asset

**_Request Header :_**

```
{
  "accessToken": "<your access token>"
}
```

**_Request Body :_**

```
not need body
```

**_Response (201 - Created) :_**

```
{
  "message": "Delete Field SuccessFuly"
}
```

**_Response (_500 - There was an error on the server and the request could not be completed and 404 - Not Found_)_**

- 500

```
{
  "message": "Internal Server err"
}
```

- 404

```
{
  "message": "Product yang anda cari tidak ada"
}
```

### GET /venues

> GET all data venue

**_Request Header :_**

```
{
  "accessToken": "<your access token>"
}
```

**_Request Body :_**

```
not needed
```

**_Response (200 - OK) :_**

```
[
  {
    "id": 10,
    "name": "Samba Futsal",
    "field": 1,
    "address": "Samba Futsal Jln. Tentara Pelajar No.37,  Palmerah, Jakarta Barat",
    "imageUrl": "https://lapanganfutsal.id/wp-content/uploads/2018/05/lapangan-futsal-samba-futsal-jakarta-2-800x400.jpg",
    "imageUrlSecond": "https://lh3.googleusercontent.com/p/AF1QipNdBof3ThX_CERPDx8tR_r1ls-axAjbTEw3A2hg=s1280-p-no-v1",
    "UserId": 1,
    "createdAt": "2022-05-20T09:45:53.322Z",
    "updatedAt": "2022-05-20T09:45:53.322Z",
    "User": {
      "id": 1,
      "username": "Rizki",
      "email": "owner@mail.com",
      "role": "admin"
    }
  },
  {
    "id": 9,
    "name": "CGV Sport Hall FX",
    "field": 1,
    "address": "fX Sudirman, Jln. Jend. Sudirman No.25 , Jakarta Pusat",
    "imageUrl": "https://media.suara.com/pictures/653x366/2018/12/05/24368-cj-cgv-fx-sudirman-hadirkan-bioskop-anti-mainstream-suaracomfirsta.jpg",
    "imageUrlSecond": "https://cdn.kincir.com/1/production/media/2018/desember/sekarang-bisa-main-dan-olahraga-di-bioskop-cj-cgv/1-cgv-sport-hall.jpg",
    "UserId": 1,
    "createdAt": "2022-05-20T09:45:53.322Z",
    "updatedAt": "2022-05-20T09:45:53.322Z",
    "User": {
      "id": 1,
      "username": "Rizki",
      "email": "owner@mail.com",
      "role": "admin"
    }
  },
  ................
]
```

**_Response (_500 - There was an error on the server and the request could not be completed, and 401 - Unauthorized_)_**

- 500

```
{
  "message": "Internal Server err"
}
```

- 401

```
{
  "message": "Token nya tidak ada"
}
```

