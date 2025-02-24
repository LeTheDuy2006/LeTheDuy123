$(document).ready(function() {
    $('#searchInput').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        let productFound = false;

        $('#productList li').each(function() {
            const productName = $(this).text().toLowerCase();
            if (productName.includes(searchTerm)) {
                $(this).show();
                productFound = true;
            } else {
                $(this).hide();
            }
        });

        if (productFound) {
            $('#noResults').hide();
        } else {
            $('#noResults').show();
        }
    });
});