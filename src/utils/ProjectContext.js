//isolated state

import React from "react";
import BurgerGraphic from "../screenshots/burgerlogger.png";
import RaccoonGraphic from "../screenshots/raccoon.png";
import WeatherGraphic from "../screenshots/weatherdashboard.jpg";
import SchedulerGraphic from "../screenshots/workdayscheduler.jpg";
import BudgetGraphic from "../screenshots/budget.png";
import EmployeeGraphic from "../screenshots/directory.png";

const ProjectContext = React.createContext({
    allProjects: [
        { src: BurgerGraphic, title: "Burger Logger", description: "An app that logs burgers or other items with MySQL, Node, Express, Handlebars and a homemade ORM using the MVC design pattern. The app uses Node and MySQL to query and route data in the app and Handlebars to generate the HTML.", demo: "https://hidden-everglades-80089.herokuapp.com/burgers", repo: "https://github.com/qudoki/burger-logger"},
		{ src: RaccoonGraphic, title: "Tech Raccoon", description: "TechRaccoon is geared towards both jobseekers and businesses that are looking to either be hired or hire within the tech industry. This application takes advantage of several different types of data that are gathered from SQL servers, backend javascript, handlebars to operate the front end, and of course API routes! Other technologies or packages utilized include express, express handlebars, node.js, passport, and becrypt.", demo: "https://intense-falls-12076.herokuapp.com/", repo: "https://github.com/qudoki/group1-project2"},
		{ src: WeatherGraphic, title: "Weather Dashboard", description: "This is a simple weather dashboard application that pulls from multiple server-side API's, using Javascript, jQuery, and local storage. The HTML/CSS files were started from scratch.", demo: "https://qudoki.github.io/weatherdashboard/", repo: "https://github.com/qudoki/weatherdashboard"},
		{ src: SchedulerGraphic, title: "Work Scheduler", description: "A simple work scheduler that allows users to add, remove and modify events to each hour. Special features include ticking time clock as well as countdown to next hourly appointment.", demo: "https://qudoki.github.io/workscheduler/", repo: "https://github.com/qudoki/workscheduler"},
		{ src: BudgetGraphic, title: "Budget Tracker", description: "This application allows users to track expenses and create a chart over time. Users can view, add income or expenses, and modify their budget even when offline. Technologies for this app include MongoDB, Mongoose, node.js, route-handling via Express, service workers, and caching. The application is deployed on Heroku and MongoDB Atlas.", demo: "https://vast-everglades-45860.herokuapp.com/", repo: "https://github.com/qudoki/budget-tracker"},
		{ src: EmployeeGraphic, title: "Employee Directory", description: "This application creates a employee directory with React. With the application's UI broken into components, management of component states, and responses to user events, a user can view my entire employee directory at once so that they can have quick access to non-sensitive employee information. By default, a complete table of employees renders on the home page. The user can sort the table by category, or filter the users by name with a live search functionality.", demo: "https://qudoki.github.io/employee-directory/", repo: "https://github.com/qudoki/employee-directory"},
	]
})

export default ProjectContext;