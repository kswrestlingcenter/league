# KWC league
League Software for KWC

## Purpose
To automate and cater to the recurring open league nights. This repo is meant to to be the UI for end to end operations for running a league event.

## General Notes

- Using Vue 3, with webpack.
- Node/express server to authenticate and serve HTML.
- Will use `server-kwc` api for any information.

## Requirements
- Add Authentication (Okta) **(\*MVP)**
- Add/Edit/Delete Wrestler  **(\*MVP)**
  - USA Card Linker validated by service
- Add/Edit/Delete Events **(\*MVP)**
- Add weigh-in event **(\*MVP)**
- Bracketing Process manually (this should pre-generate all the matches for the event) **(\*MVP)**
  - Automate bracketing
- Mat assignment manual **(\*MVP)**
  - Automate into queue
- Start, Stop, and record match data **(\*MVP)**
  - Include Video capture

## Roadmap

See https://github.com/kswrestlingcenter/league/issues/1

# Server Routes

| method |development port       | endpoint     | description               |
|:-------|:----------------------|:-------------|:--------------------------|
| GET    |`http://localhost:6001`| `/`	        | Serves up HTML            |

# Client Routes

|development port       | endpoint                          | description               |
|:----------------------|:----------------------------------|:--------------------------|
|`http://localhost:6000`| `/`	                              | Re-directs to either the login or dashboard page. |
|`http://localhost:6000`| `/login`                          | Allows user to either login or register.          |
|`http://localhost:6000`| `/dashboard`                      | Used as a site map for now                        |
|`http://localhost:6000`| `/wrestlers`	                    | |
|`http://localhost:6000`| `/wrestlers/add`                  | |
|`http://localhost:6000`| `/wrestlers/:id`                  | |
|`http://localhost:6000`| `/league-events`                  | |
|`http://localhost:6000`| `/league-events/:id/brackets`     | List all age/weight divisions |
|`http://localhost:6000`| `/league-events/:id/brackets/:id` | View/edit the bracket |
|`http://localhost:6000`| `/league-events/:id/matches`	    | |
|`http://localhost:6000`| `/league-events/:id/weigh-in`     | |
|`http://localhost:6000`| `/league-events/:id/wrestlers`    | List of wrestlers who have been entered|
