
/*
 * AUTHOR: NicnHus
 * SCROLL FUNCTION IMPLEMENTATION
 */
var _PAGES    = 0;
var NUM_OF_LI = 0;
var _CTR      = 1;

// TwoDimension array representing the grid
var LAYOUT_GRID;

// Get the number of LI per row and store it in array
var NUM_OF_LI_PER_ROW;
// Maximum number of li per row
var MAX_LI = 0;

// RETURNS THE NUMBER OF PAGES
function get_num_of_pages(){
    $( ".inner_container" ).each(function( ) {
            _PAGES++;
        });
    NUM_OF_LI_PER_ROW = new Array(_PAGES);
}


String.prototype.times = function(n) {
    return Array.prototype.join.call({length:n+1}, this);
};


// GET NUMBER OF <LI> ELEMENTS
function get_num_of_li(){

    for(var i=1;i !=_PAGES+1; ++i){

        $('#inner_container_item_'+i+' ul li').each(function( ) {
            NUM_OF_LI++;
        });

        var UL_WIDTH = NUM_OF_LI+'00%';
        var LI_WIDTH = (100/NUM_OF_LI)+'%';

        // Update the ul width dynamically
        $('#inner_container_item_'+i+' ul').css('width',UL_WIDTH);
        // Update the li width dynamically
        $('#inner_container_item_'+i+' ul li').css('width',LI_WIDTH);

        NUM_OF_LI_PER_ROW[i-1] = NUM_OF_LI;

        // Get the max number of LI
        if(NUM_OF_LI > MAX_LI)
            MAX_LI = NUM_OF_LI;

        NUM_OF_LI = 0;

    } 

    create_site_map();
}


// CREATE THE SITE MAP
function create_site_map(){
    var _MAP = $('#site_map ul');
    var TEMP = new Array(_PAGES);
    var COUNTER = 0;

    for(i=0; i < NUM_OF_LI_PER_ROW.length; i++){
        _MAP.html(_MAP.html()+'<li></li>');
    }

    var MAP_2 = $('#site_map ul li');

    MAP_2.each(function(){
        MAP_2.html('<ul></ul>');
    });
        

    // Set them all to the number of MAX_LI
    $('#site_map ul li ul').each(function(){
        $(this).html('<li></li>'.times(MAX_LI));
    });

    var ROW = 1;
    var COL = 1;

    // Set id's to the different images inside the grid
    // IMPORTANT LOOP SYSTEM
    $('#site_map ul li ul').each(function(){

        var NUM_OF_CHILD = $(this).children().length;
        
        $(this).children().each(function(){
            $(this).attr('id','row_'+ROW+'_col_'+COL);
            COL++;
        });

        ROW++;
        COL = 1;

    });

    // Initialize to the first one
    $('#row_1_col_1').css('background-color','#52736B');



}

// CREATE THE BIDIMENSIONAL ARRAY FOR THE LAYOUT
function create_grid(){
    // Create new Array the size of the number of pages
    LAYOUT_GRID = new Array(_PAGES);
    for(i=0; i<_PAGES; i++){
        LAYOUT_GRID[i] = new Array(NUM_OF_LI_PER_ROW[i]);
    }
}

