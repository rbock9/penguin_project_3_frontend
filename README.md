# Group Project (Amiibo App) - Rob Bock, Jeff Li, Seb Patin
#### Frontend Readme By Rob Bock

- This application will be used to keep a list of amiibos that the user owns, and a wishlist for what amiibos the user would like to buy

## User Stories

- Users can store their personal amiibos to an "owned" or wish list.
- Users can update the list of amiibos owned or wanted.
- Users can delete an amiibo from their owned list and/or wishlist.
- Users can find different amiibos through an index page and types of amiibos.
- Users can click the homepage icon to go back to the home page.

- Planned Features:
 - The User will be able to create an account using a username and password
 - The user will be able to search using a searchbar for their amiibo

## List of Components

- Header
- Main
- Index

## Sketch of Intended Component Tree
```
-> App
  -> Header
  -> Main |state: bookmarks|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: amiibo|
      -> Route |path="/bookmarks/:id|
        -> Show |Props: amiibo, addWishList, addToOwned|
```
## Frontend React Router Route Table

    <main>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/amiibos/:id" element={<Show/>}/>
      </Routes>
    </main>
