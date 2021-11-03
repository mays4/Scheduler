# Interview Scheduler
This is a Interview Scheduler app using React.
* Student  can book appointment from(monday to Friday) and pick available time from 12pm (to 5 pm).
![Scheduler-view.png](https://github.com/mays4/Scheduler/blob/master/Docs/Scheduler-view.png?raw=true)
* Student can select available spot and choose the interviewer and book appointmenet.
![Saving-an-appointment.png](https://github.com/mays4/Scheduler/blob/master/Docs/Saving-an-appointment.png?raw=true)
* Studnet can edit the appointment by clicking edit and change the name and  the interviewer.
* Student  can delete the interview.
![deleting.png](https://github.com/mays4/Scheduler/blob/master/Docs/deleting.png?raw=true) and before deleting confirmation  message shows and student can make a choice by deleting interview or cancel deleting.
![Confirm_deleting.png](https://github.com/mays4/Scheduler/blob/master/Docs/Confirm_deleting.png?raw=true)
* if error happened when saving error message shows.
 ![Error_saving.png](https://github.com/mays4/Scheduler/blob/master/Docs/Error_saving.png?raw=true)
* if error happened when deleting error message shows.
 ![message_Error_deleting.png](https://github.com/mays4/Scheduler/blob/master/Docs/message_Error_deleting.png?raw=true)
* Students should  write  their name when booking and select  interviwer if name left blank or interveiwer not selected  message will shows and notif the student.
![message_blank_name.png](https://github.com/mays4/Scheduler/blob/master/Docs/message_blank_name.png?raw=true) 
![Message_saving_without_Interviewer_name.png](https://github.com/mays4/Scheduler/blob/master/Docs/Message_saving_without_Interviewer_name.png?raw=true)

## Enjoy the App 

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
## Scheduler API server application
* fork and clone scheduler_api https://github.com/lighthouse-labs/scheduler-api.
* Install Install dependencies with `npm install`.
* Open two terminal one for Scheduler-API and one for Secheduler.
*  Go to `http://localhost:8001`



## Running Sypress 
``` sh
npm run cypress
```
## Dependencies
- axios
- @testing-library/react-hooks
- react-test-renderer
- others