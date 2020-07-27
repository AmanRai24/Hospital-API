# Hospital-API

I have design an API using Node.js and MongoDB for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

## Features

There can be 2 types of Users
- *Doctors* & *Patients*
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps:
    - Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
    - After the checkup, create a Report.
- Patient Report will have the following fields
    - Created by doctor
    - Status: Can be either of: *[0 :Negative, 1:Travelled-Quarantine, 2:Symptoms-Quarantine, 3:Positive-Admit]*
    - Date

## How to INSTALL and RUN?

1. Clone the project.
2. Navigate to the folder `cd Hospital-API ` where the project has been Stored.
3. Open Terminal and type `npm install` to install required files.
4. Run following command: `Nodemon .\index.js `

## How to USE?

URL: ` http://localhost:8000/api/v1`

#### End Points:
1. `/doctor/register`(POST): Register the new doctor using name,email and password(all requireds).
- INPUT:

![](/Images/1.JPG)

- OUTPUT

![](/Images/2.JPG)

2. `/doctor/login`(POST): Doctor can Login using email and password.

- INPUT:

![](/Images/3.JPG)

- OUTPUT(Generate JWT Token)

![](/Images/4.JPG)

3. `/patients/register`(POST): Doctor can Register the patient using name and Phone Number.

#### Need for further use:

![](/Images/5.JPG)

- INPUT:

![](/Images/6.JPG)

- OUTPUT

![](/Images/7.JPG)

4. `/patients/:id/create_report`(POST): Doctor can create report of the Patients.

#### Need for further use:

![](/Images/8.JPG)

- INPUT:send status([0:Negative, 1:Travelled-Quarantine, 2:Symptoms-Quarantine, 3:Positive-Admit]) and doctor id 

![](/Images/9.JPG)

- OUTPUT

![](/Images/10.JPG)

5. `/patients/:id/all_reports`(GET):Retrive all reports of a patient by ID.

- OUTPUT

![](/Images/11.JPG)

5. `/reports/:status`(GET):Retrieve all reports from DB filter on the basis of Status sent in params.

- OUTPUT 

![](/Images/12.JPG)

## Unit Tesing 

1. Run following command: `npm test` for unit-tesing.
 
- Used `mocha` as a server and `chai` for assertion library.

1. Testing for `/patients/register`
2. Testing for `/patients/:id/create_report`
3. Testing for `/patients/:id/all_reports`

- Output:(On the console)

![](/Images/13.JPG)

## Folder Structure
- **Entry point** : index.js.
- **config** : Contains configuration files of Mongoose,Passport JWT Strategies and Status.
- **controllers** : The controllers for various urls like Doctor API or Patient API or Report API.
- **models** : Mongoose Schemas for the Doctors, Patients and reports.
- **routes** : Different routes for different request urls.
- **test** : Test files for testing different routes.




