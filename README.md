# Group Project (Amiibo App) - Rob Bock, Jeff Li, Seb Patin
#### Frontend Readme By Rob Bock

- This application will be used to keep a list of amiibos that the user owns, and a wishlist for what amiibos the user would like to buy

## User Stories

- Users can view a listing of all amiibos through an index page.
- Users can create, update, and delete amiibos via a form.
- Users can click the homepage icon to go back to the home page.

- Originally Planned Features (postponed due to lack of time):
 - The User will be able to create an account using a username and password
 - The user will be able to search using a searchbar for their amiibo
 - Users can store their personal amiibos to an "owned" or wish list
 - Users can update the list of amiibos owned or wanted
 - Users can delete an amiibo from their owned list and/or wishlist

## List of Components

- Header
- Main
- Footer

## List of Pages

- Index.js
- Show.js

## Sketch of Intended Component Tree
```
-> App
  -> Header
  -> Main |state: amiibos|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: amiibos, createAmiibos|
      -> Route |path="/amiibos/:id|
        -> Show |Props: amiibo, updateAmiibos, deleteAmiibos|
  -> Footer
```
## Frontend React Router Route Table

    <main>
      <Routes>
       <Route path="/" element={<Index amiibos={amiibos} createAmiibos={createAmiibos}/>}/>
        <Route path="/amiibos/:id" element={
        <Show
        amiibos={amiibos}
        updateAmiibos={updateAmiibos}
        deleteAmiibos={deleteAmiibos}
        />
        }/>
      </Routes>
    </main>
