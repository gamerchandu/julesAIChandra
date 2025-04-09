### Approach Description:
 
## Approach:
- For UI Automation I have manually tested the given URL, understood the navigation flows and then framed the login/log out testcases.For Dashboard cases I added few tests which cover whether the links are visible or not. 

- For API Automation, I copied the endpoint URL's from the network tab and used them in the Postman. Created multiple cases for login. And chained GetContacts POST link with Login's Response ( token saved and resued ). Then add the workflow to Github Actions.

## Challenges faced & Solutions:
- Tests were flaky but resued playwright's inbuild locators.
- API's not successful , received unauthorized error. Later found out a minor issue and sorted

## CI/CD integration setup and maintenance

- Followed Github Actions default provided by Playwright installation, Changes few custom things like workflow dispatch ( to run manually in github.com), updated reporting.