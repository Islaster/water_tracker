# Water Tracker

This is a an app that tracks how much water you drink via self admission and then uses that data to tell you weekly avgs return charts for weekly, monthly, and yearly water drinkage plus it has calculator to tell how a guesstimate of how much water you should drink.

## Key Features

### User Accounts & Authentication

- Secure sign-up and login system(email/password)
- Personalized dashboard for each user.
- Persistent data storage tied to the logged-in account.

### Water Intake Logging

- Simple interface to log water intake (amount + unit)
- Quick-add buttons for common amounts (e.g., 250ml, 500ml)
- Timestamp automatically saved for each entry

### Data Visualization & Insights

- Built-in calculator estimates recommended daily water intake based on:
  - weight
  - height

### Organization & Reminders

- Organizes entries by day/week/month for easy review
- Optional push/email notifications to remind users to drink water
- Weekly summary report (avg intake, streaks, improvements)

### Customization

- Editable daily goal for users who want manual control
- Supports multiple units
- Dark/light mode

## Installation

1. clone the repo

```bash
git clone https://github.com/Islaster/water_tracker.git
```

2. change directory to client

```bash
cd client
```

3. install dependencies

```bash
npm i
```

4. go to server directory

```bash
cd ../server
```

5. install dependencies

```bash
npm i
```

### usage

1. start client

```bash
cd client
npm start
```

2. start server

```bash
npm run dev
```

### Configuration

add the env file to server root directory and add this

```ini
    DB_PASSWORD="postgres password"
```
