
/*
 * AUTHOR: NicnHus
 * SCROLL FUNCTION IMPLEMENTATION
 */
var _PAGES    = 0;
var NUM_OF_LI = 0;
var _CTR      = 1;

// GET THEN UMBER OF LI FOR EACH ITEMS
var LI_COLORS = new Array("#121218","#0D3741","#106A57","#179C6B","#0F4D73","#FCE4BE","#DB888A"); 

// RETURNS THE NUMBER OF PAGES
function get_num_of_pages(){
    $( ".inner_container" ).each(function( ) {
            _PAGES++;
        });
}


// GET NUMBER OF <LI> ELEMENTS
function get_num_of_li(){

    for(var i=1;i !=_PAGES; ++i){

        $('#inner_container_item_'+i+' ul li').each(function( ) {
            NUM_OF_LI++;
        });

        var UL_WIDTH = NUM_OF_LI+'00%';
        var LI_WIDTH = (100/NUM_OF_LI)+'%';

        // Update the ul width dynamically
        $('#inner_container_item_'+i+' ul').css('width',UL_WIDTH);
        // Update the li width dynamically
        $('#inner_container_item_'+i+' ul li').css('width',LI_WIDTH);

        NUM_OF_LI = 0;
    }    
}

