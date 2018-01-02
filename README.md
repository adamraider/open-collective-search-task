# Open Collective Search Task

Coding challenge from Open Collective. Source code by Adam Raider.

## Task

> Build a standalone search app to help our users find collectives. All attributes of a Collective are listed below - please include all the fields in the index you think would be useful to search."

## Some high priority tradeoffs made due to timeboxing

- Caching of frequent searches (i.e. index page, popular tags)
- Collective page (click through a result)
- Update uri query param dynamically while searching
- Use query param as default search parameter
- Display more information in results (i.e. tags, other metadata)
- Responsive design

## Setup

```bash
git clone https://github.com/adamraider/open-collective-search-task.git
cd open-collective-search-task
bundle
rake db:setup
cd frontend
yarn
```

## Dev Environment

```
# In one terminal window:
rails s
# In second terminal window:
cd frontend
yarn dev
```
