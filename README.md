# "task_manager_reactjs" 
This app is created to provide frontend interface to perform essential operations on task entity via web application. 
IN this app user firstly create tasks after this user can visit individual task , decide to complete or incomplete the task, 
also user can delete or update this task. User can search for specific task by keyword and get related tasks that have this 
keyword in title or description.
This application consumes end points provides by nodejs backend server.

# content
task_manager/
    public/
        index.html
    src/
        actions/
            index.js
        components/
            SearchBar.js
            SearchResultsPage.js
            Task.js
            TaskForm.js
            TaskPage.js
            TasksList.js
        reducers/
            index.js
        sagas/
            index.js
        App.css
        App.js
        App.test.js
        index.css
        index.js
    package-lock.json
    package.json
    README.md


# installition 
## This command to install npm
    npm install
## to launch the application run the following command line
    npm start 