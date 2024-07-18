# Verti Comps

## Overview
Verti Comps is an app designed to streamline the scorekeeping process for community climbing competitions. It allows administrators to create/edit/delete new competitions, edit registration status of competitors, and scorekeep. It also allows competitors to register/degregister for competitions, add climbs to their competition scorecard, and view their placement in the competition or league leaderboard.

## Video Demo
https://youtu.be/UHnZyGrfet0

## Installation Instructions
1. Clone repository
2. Navigate to the root directory in the terminal and enter `npm install`
3. When complete, enter `npm install --save react-router-dom`
4. When complete, enter `npm install --save bootstrap`
5. When installs are complete, open two terminal windows
6. In the first window, navigate to /verti-comps and enter `npm run dev`, follow the localhost link
7. In the second window, navigate to /verti-comps/api and enter `json-server database.json -p 8088`

## Logged Out Views

### Login
![Login Screen](https://github.com/user-attachments/assets/fd9c4ade-7d3f-440d-a29f-50ab9178d77e)


### Register
![Register Screen](https://github.com/user-attachments/assets/ee1fa681-5032-4ee3-b502-6ebc99afa220)


### League Leaderboard
The league leaderboard is accessible whether you are logged in or not. They are all responsive to competition scoring and if you are logged in as a competitor your name will be highlighted in the leaderboard if you have participated or registered for an open competition.

![League Leaderboard](https://github.com/user-attachments/assets/d0f1de3b-c25e-42b3-bb79-21ffb38bf1f1)


## Administrator Views

### Dashboard

![Admin Dashboard](https://github.com/user-attachments/assets/03041876-2819-4e61-bf25-7b4fa39c37b4)

Clicking the **Create** link in the navbar will take you to the create competition form.

### Create
![Create Competition](https://github.com/user-attachments/assets/fffbffbb-6c66-461c-9c71-141b25515603)

**Submit** the form to access the form to add to the climb list for your new competition.

### Climb List
![Competition Climb List](https://github.com/user-attachments/assets/87a2b810-699d-46ad-9052-c9980d44ea43)


**Submit** the form to finalize your climb list and redirect back to the dashboard. 

### Competitions

Clicking the **Competitions** link in the navbar will take you to the competitions list

![Competitions List](https://github.com/user-attachments/assets/a9fe260e-57f4-4872-9a3c-9910c098c4dc)


Clicking the competition name button will allow you to view the competition leaderboard if it was started, and provides a button to start and stop the competition.

Clicking the **View And Edit** button allows you to view the registration list for the competition and deregister competitors.

Clicking the **Edit** button allows you to change the name, date, location, or time of the competition.

Clicking the **Delete** button allows you to delete the competition.

### Validate

Clicking the **Validate** link in the navbar takes you to the validation page. Select a competition from the filtered dropdown of open competitions, select a competitor from the filtered dropdown of competition registrants, and view/validate/flag their climbs.

![Admin Validate](https://github.com/user-attachments/assets/78fc8201-bcd3-40f9-8237-8d561de6ef32)



When a climb is validated, points will be added to the competitor's competition points and league points.

When a climb is flagged, their points would be revoked if previously validated.

When a note is added, the add note button will change to edit note to reflect having added the note.

## Competitor Views

### Scorecard

Clicking the **Scorecard** link in the navbar takes you to the scorecard page. Select a competition from the filtered dropdown of open competitions, add climbs to your scorecard.

![Competitor Scorecard](https://github.com/user-attachments/assets/458b19ff-9d0f-4ea1-8e0d-68a214a7474c)


An alert will be displayed next to a climb if an administrator flagged and wrote a note about it. 

### Competitions

Clicking the **Competitions** link in the navbar takes you to the competitions list.

![Competitor Competition List](https://github.com/user-attachments/assets/28c538d7-b37e-4919-bcc8-95c11714cbc7)

Clicking the competition name button will take you to the competition leaderboard

**Register/Deregister** buttons will register or deregister you from that competition
