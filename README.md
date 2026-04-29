# Top Wikipedia Articles Viewer

Open up a terminal and enter the folder you want to download this project to.
Clone this repo using the following command:

```
git clone https://github.com/mohtasim317/Top-Wikipedia-Articles/
```

Enter the project directory and run the following command to install all necessary packages/libraries:

```
npm install
```

To run application:

```
npm run start
```

The terminal will show you which port the project is running on (should default to http://localhost:3000). Thanks for checking out my work!

## Features/Notes

-Built using React + TypeScript. Styled using CSS. Tested using React Testing Library.

-Users can select a date to fetch articles from using the calendar. Data is only fetched once the search button is clicked.

-Users can select how many articles they see per page using the dropdown. This also dynamically updates the number of pages in the pagination footer.

-Used the "react-paginate" library to add pagination functionality. Users can scroll through 1000 articles using the buttons on the bottom of the page.

-Users can pin articles to the top of the page by clicking the pin on an article tile. Users can also unpin articles from both the list of pinned articles and the main list of articles by clicking the pin again. Pinned article data is saved to local storage and persists between page reloads.

## Figma Designs:

![1](https://github.com/user-attachments/assets/af99e44c-b5bf-44af-be1f-c586a52d5745)
![2](https://github.com/user-attachments/assets/3dbe3666-9006-4bcf-b6d2-b8ba55cbec16)
![3](https://github.com/user-attachments/assets/1be8cb1d-a0e7-4963-a05a-1021adff127d)
