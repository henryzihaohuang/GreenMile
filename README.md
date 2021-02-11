<p align="center"> 
  <a href="https://greenmile-aa.herokuapp.com/"> <img src="https://i.ibb.co/KxHnjR4/coollogo-com-30397502.png"></a>
</p>

-------------

[GreenMile](https://greenmile-aa.herokuapp.com/) is a clone of Robinhood, which showcases a combination of modern, elevated styling and easy-to-access real-time data of stock prices and portfolio shares.

This project hightlights the integration of React, Redux, Ruby on Rails, PosgreSQL, ReCharts Library, IEXCloud API, Ruby, Javascript, JSX, and jQuery through the styling and presentation of SCSS and HTML5.

<p align="center">
  <img src="https://media.giphy.com/media/AxilcpBjHjJw9pGSYI/giphy.gif" width="480" height="246" frameBorder="0" allowFullScreen>
</p>
 
 <p align="center">
  <img src="https://media.giphy.com/media/sv6UaDvFts5QBHRx89/giphy.gif" width="480" height="246" frameBorder="0" allowFullScreen>
</p>

-------------

# Features

### User Authentication 
Following Robinhood's UI for logging in and signing up, users can either access their investment portfolio or sign up for a new account. Demo Login allows access to site features. If account creation or login authentication fails, the user will receive specific error message(s) detailing the reason(s).

### Dashboard & Portfolio (to be finished)
Upon successful login, users can view major updates on their portfolio. Watchlists will be available in the sidebar.

Below the main block of the user portfolio, the user will have related news displayed. This was done using an IEXCloud API endpoint to display related. 

### Asset/Stock Detail (to be finished)
Upon a successful search, users can view a company's financial metrics based on a realtime API.
When a user lands on a company page, they can click through several timeline periods to see the history and trends of the company's stock.
When tracking through the graph of a stock, if the cursor point passes a loss period, UI elements switch to a red color scheme.
Additional information about the company are linked below the main graph:
Related news
CEO
Number of Employees
Headquarters
Exchange

### Watchlist (to be finished)
Users can create and update their watchlist titles.
Users can add desired companies to a watchlist to follow stock updates.
Users can delete undesired companies from their watchlist to unfollow stock updates.
Watchlists can be still be accessed on sidebar even after clicking into a specific company portfolio.

### Asset/Stock Search (to be finished)
Signed in users, or demo user, can look up company profiles from a search bar.
When typing in the search bar, the search bar drops suggestions for the at least five companies that the user may be searching for.
A search with no returns provides an encouraging error message to the user.
When switching between company profiles, the graph shows a smooth transition for better UI.
Bonus: Navigation bar also has a drop down for ease of access to portfolio, watchlists, and user profile.
