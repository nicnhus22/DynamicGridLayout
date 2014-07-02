DynamicGridLayout
=================

This a website template I created from scratch. The idea is that you don't use the mouse to navigate between pages. All you do is navigate using the arrow keys. Since it would be easy to get lost I added a site map that shows you a grid and your current position. 

> Note: Everything is pretty much hardcoded, it is just a basic idea. Though it is very easy to add a cell to the website. Simply add an element in the list corresponding to the row you chose. The images are just here because I thought it could be turned into a photo album, but clearly anything can be added in the cells

Here how it works:

<h3>Create a row</h3>
I created a CSS class for each row and it corresponds to the ```class="inner_container"```. This container takes the whole body space. Inside it you have ```class="inner_container_item"``` and ```id="inner_container_item_n"``` where n corresponds to the row number. This way, you dont have to change any Javascript, all you do is add the container and the JS will check how many rows and columns there are to build the page. Once you have a row, you have to add cells to it:

<h3>Create cells (columns)</h3>
When you have your row setup, you just have to add an unordered list inside the container where the ```li``` elements will correspond to the cells.

<h3>Basic structure</h3>

```
<!-- First row -->
.inner_container #container_1
  .page_title (optional)
  .inner_container_item #inner_container_item1
  ul
    li
    li
  ul

<!-- Second row -->
.inner_container #container_2
  .page_title (optional)
  .inner_container_item #inner_container_item2
  ul
    li
    li
    li
  ul
```

This will create a 2x3 map since the largest row has 3 cells.

<h3>Site Map<h3>

