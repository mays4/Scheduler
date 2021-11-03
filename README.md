# Interview Scheduler
This is a react app which you can book appointment from(monday to Friday)--from 12pm to 5 pm![Scheduler-view.png](https://github.com/mays4/Scheduler/blob/master/Docs/Scheduler-view.png?raw=true)
* The user can select available spot and choose the interviewer and book appointmenet![Saving-an-appointment.png](https://github.com/mays4/Scheduler/blob/master/Docs/Saving-an-appointment.png?raw=true)
* The user can edit the appointment by clicking edit and change the name and interviewer.
* User can delete the interview ![deleting.png](https://github.com/mays4/Scheduler/blob/master/Docs/deleting.png?raw=true) and before deleting comifrm message shows ![Confirm_deleting.png](https://github.com/mays4/Scheduler/blob/master/Docs/Confirm_deleting.png?raw=true)
* if error happen when saving error message shows ![Error_saving.png](https://github.com/mays4/Scheduler/blob/master/Docs/Error_saving.png?raw=true)
* if error happen when deleting error message shows ![message_Error_deleting.png](https://github.com/mays4/Scheduler/blob/master/Docs/message_Error_deleting.png?raw=true)
* user should choose name and interviwer if blank name or interviwer message will notif the user he/she should choice name and interviwer
![message_blank_name.png](https://github.com/mays4/Scheduler/blob/master/Docs/message_blank_name.png?raw=true) 
![Message_saving_without_Interviewer_name.png](https://github.com/mays4/Scheduler/blob/master/Docs/Message_saving_without_Interviewer_name.png?raw=true)

## Setup

Install dependencies with `npm install`.


## Running Webpack Development Server

```sh
npm start
```
Then Go to `http://localhost:8000` 
## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Express is the basis for the Scheduler API server application
* fork and clone scheduler_api (https://github.com/lighthouse-labs/scheduler-api.
* Install Install dependencies with `npm install`.
* Open two terminal one for Scheduler-API and one for Secheduler.
*  Go to `http://localhost:8001`



## Running Sypress 
``` sh
npm run cypress
```
