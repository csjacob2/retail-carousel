$(document).ready(function() {
    category.getData();
    category.getModal();
});

var category = (function() {

    function _getData(){
        // get json data from file
        $.getJSON('../data/data.json', function( products ) {

            //use handlebar template to format and populate category page with products
            $.get('../templates/product.template', function (source) {
                var template = Handlebars.compile(source);
                var productList = template(products.groups);
                //productList = htmlDecode(productList);

                $('#category-page #product-list').append(productList);
            });
        });
    }

    function _getModal() {
        // get json data from file
        $.getJSON('../data/data.json', function( products ) {

            //use handlebar template to format and attach modal to each product
            $.get('../templates/modal.template', function (source) {
                var template = Handlebars.compile(source);
                var modalList = template(products.groups);

                // create modal list, attach to page
                $('#category-page .modal-list').append(modalList);

                // add click handler to each product to activate their own modals
                $('#product-list .product-cell').each(function(index) {
                    var prodID = $(this).data('productid');

                    // check if modal for product has images in the slider
                    // this is because the handlebars template creates all modals
                    // if there's no images in the .slider, don't add click handler (prevents empty modal from popping up)

                    if ($('#modalID-' + prodID + ' .slider').has('img').length) {
                        $(this).on('click', function () {
                            $('#modalID-' + prodID).modal('show');

                            //slider function included in click handler
                            addSlider(prodID);
                        });
                    }
                });
            });
        });
    }

    function addSlider(modalID) {
        //apply slider formatting to only the modal after it's opened so it calculates appropriately
        // this was necessary to calculate the size of the viewport after the modal is create
        // this works for responsive design instead of hard-coding the sizes into the CSS
        $('#modalID-' +modalID+ ' .slider').bxSlider();
    }

    Handlebars.registerHelper('formatCurrency', function(value) {
        // handlebars helper to format currency
        // adds dollar sign and comma
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value)
    });

    return {
        getData:        _getData,
        getModal:       _getModal
    }
})();