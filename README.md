# Startup Data Visualizer

## Local Development Environment Setup


#### Installing pre-requisites

Python
- Download Python 3.6 from https://www.python.org/downloads/release/python-368/

Git
- Install Git following this tutorial https://www.atlassian.com/git/tutorials/install-git

PostgreSQL
- Mac users: we recommend installing the Postgres app from https://postgresapp.com/
- Windows/Linux users: install Postgres from https://www.postgresql.org/download/
    - Make sure that you follow the commands to start PostgreSQL in the background
    - Install pgAdmin (GUI PostgreSQL database manager) from https://www.pgadmin.org/download/
- Create a database called brendanowens that will be used for the project
 

Yarn
- Yarn is used for front-end package management
- Install Yarn from https://yarnpkg.com/lang/en/docs/install/

Webpack
- Webpack packages up all the front-end libraries into one JS file and one CSS file
- To re-package up the libraries run `yarn build`
- To have webpack watch for changes and automatically update the build file, run `yarn watch`

Pipenv
- Install Pipenv using the following tutorial https://pypi.org/project/pipenv/
- Pipenv is needed to install the rest of the Python dependencies

#### Installing dependencies
Python dependencies
- To install python dependencies, run `pipenv install`

Javascript dependencies
- To install JS dependencies, run `yarn install`

#### Running the application
Run the application by running the following commands:
- `python manage.py runserver`
- `yarn watch`
- Navigate to http://localhost:8000/ to view the application

#### Application setup
- Create admin account to access admin portal by running `python manage.py createsuperuser` and following the instrcutions
- Add data to the database by navigating to http://localhost:8000/admin/, logging in with your admin credentials, and clicking on CSV imports
    - Click "Add CSV Import"
    - Type "backend.Company" in "Model name"
    - Choose the CSV file provided in the project artifacts




