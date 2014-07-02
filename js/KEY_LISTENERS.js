
var LAST_TOP  = "0000%"
var LAST_LEFT = "00%"
var _COUNTER  = 0;
var LEFT_CTR  = 0;

// ARRAY CONTAINING THE LABELS
var LABELS = new Array("FIRST PAGE","SECOND_PAGE","THIRD PAGE","FOURTH PAGE", "FIFTH PAGE", "SIXTH PAGE");

// Keep track of selected frame
var ROW = 1;
var COL = 1;


// KEY DOWN EVENT TO MOVE AROUND PAGES
$(document).keydown(function(e){

    if (e.keyCode == 38 && _COUNTER != 0){ // UP

        LAST_TOP = (--_COUNTER)+LAST_TOP.slice(2,5);
        LAST_TOP = "-"+LAST_TOP;

        $( ".inner_container" ).each(function( ) {
            $(this).animate({top: LAST_TOP}, 800);
        });

        update_site_map();

        ROW--;
        update_current_frame(ROW+1, COL);

    }   
    else if(e.keyCode == 40 && _COUNTER < _PAGES-1){ // DOWN

        LAST_TOP = (++_COUNTER)+LAST_TOP.slice(2,5);
        LAST_TOP = "-"+LAST_TOP;

        $( ".inner_container" ).each(function( ) {
            $(this).animate({top: LAST_TOP}, 800);
        });

        update_site_map();

        ROW++;
        update_current_frame(ROW-1, COL);

    }

});



// KEY DOWN EVENT TO MOVE AROUND PAGES
$(document).keydown(function(e){

    if (e.keyCode == 37){ // LEFT

        // HARDCODED
        if(LEFT_CTR > 0){
            LEFT_CTR--;
            LAST_LEFT = "-"+LEFT_CTR+"00%";
            $('.inner_container').animate({left: LAST_LEFT}, 800);

            COL--;
            update_current_frame(ROW, COL+1);
        }

    }   
    else if(e.keyCode == 39){ // RIGHT

        // HARDCODED
        if(LEFT_CTR < 4){
            LEFT_CTR++;
            LAST_LEFT = "-"+LEFT_CTR+"00%";
        
            $('.inner_container').animate({left: LAST_LEFT}, 800); 

            COL++;
            update_current_frame(ROW, COL-1);
        }
        
    }

});


function update_current_frame(LAST_ROW, LAST_COL){
    $('#row_'+LAST_ROW+'_col_'+LAST_COL).css('background-color','black');
    $('#row_'+ROW+'_col_'+COL).css('background-color','#52736B');

}


// UPDATE THE LABELS ON THE MAP
function update_site_map(){

    var PAGE_CTR = _COUNTER+1;
    var ID = "#page_"+PAGE_CTR;

    // Update current label
    $(ID).html('CURRENT');
    // Update Last Label
    $('#page_'+(PAGE_CTR-1)).html(LABELS[PAGE_CTR-2]);

}