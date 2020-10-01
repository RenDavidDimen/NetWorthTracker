This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Net Worth Tracker

This application uses React JS to provide a net worth tracking tool. To start the program, proceed to the location of this project in the terminal of your choice and run `yarn start`

# Notes

## Thoughts throughout the creation of the application

Originally I had hoped to create the net worth form strictly with vanilla React components. After working through it, I decided to use a package I had previously worked with as it seemed more intuitive. The package in question being "React-Hook-Form"

When adding the input option of currency, I would most likely use an API in the future to pull down a list of valid currencies and populate a select form from there.

For the month drop down, I believe an enum could be created to populate the select form. This would allow the use of it to be repeated elsewhere in the future as well as clean up the code.

When working on filtering the Table based on month, I had originally wanted to use the built in features. After playing around with it, it seemed more effort than it was worth. I had then moved towards filtering the data itself, but trying to find a good point in the component life-cycle to do that proved more difficult than I thought. I finally decided that it would be best to hand in what work I have so as to not run on too long with the process.

In total the application took ~4.5 hours to complete.

## Packages Used

- React-Hook-Form
- React-Table
