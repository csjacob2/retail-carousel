# E-Commerce Site with Carousel Coding Challenge

Using the `json` file provided, products are consumed from the file, displayed on a single page with some primary details, and if a product is selected, an overlay is displayed with a carousel of thumbnail images.

# To Run/Install
1. No modules or npm libraries required.
2. CSS already pre-compiled, saved in /css folder.
3. `Handlebars.js` stored locally in /scripts folder.
4. `bxslider` stored locally in /lib folder.
5. `jquery`, and `bootstrap` linked to remotely on a CDN.
6. `index.html` located in /view folder.


## Some of the technologies used:

1. `Handlebars.js` to template both the product block on the main page and each individual modal. This allows a lot of unique customization that can be done once and separately, as well as customization and templates for different locations. Since the prices were not stored as actual currency values in the JSON data, a separate handlebars helper was needed for this (`formatCurrency`). Using the Javascript type `Intl.NumberFormat`, this helper could actually be configured for internationalization and different currency values in multiple countries/locales. For this particular challenge, the locale (en-US) and the currency value (USD) are hard-coded into the function, and the cents value has been removed (minimumFractionDigits = 0).

2. Implemented `bxslider` library for the carousel view. Customization of the viewport, close button, prev/next buttons, and the pager were done to make the carousel images/layout match the visual references supplied in the spec.

3. `LESS` for the CSS pre-processor, including `grunt watch` as the task manager.


# UX issues taken into consideration

1. Ensured swiping / pagination is continual, so once the user hits the last image, it would start over from the first image.

2. Added `bxslider` after the creation/display of the modal to ensure the viewport sizes are calculated correctly.
3. Detect if thumbnail images exist for the carousel and if not, do not add a click handler to the product. This prevents an empty modal from displaying for products without thumbnails.
4. Added escape encoding for product names to encode special characters (such as &#174; and &trade;) to ensure they display correctly.
5. Created helper for the template for currency formatting, which can be greatly expanded upon for other countries, internationalization, and currencies, to allow flexibility with money display.
6. Modal dismiss can be done through either the X button or the page background.
7. Mobile layout displays in a column of single products, while larger layout displays in a row of 3 products, with the items resizing and wrapping as necessary.

# Testing

Browsers
  - Developed on Chrome
  - Tested on Firefox, Safari

Devices
  - iPhone, iPad (both portrait and landscape orientation)
  - Android (limited)

UI
  - Clicked through each product
  - Reviewed/swiped through each image on the slideshow