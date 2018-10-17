jQuery(function($) {
			
    //data for tree element

    $('.tree-container').ace_scroll({size: 250, mouseWheelLock: true});
    $('#cat-tree').on('closed.fu.tree disclosedFolder.fu.tree', function() {
        $('.tree-container').ace_scroll('reset').ace_scroll('start');	
    });
    
    
    
    //select2 location element
    $('.select2').css('min-width', '150px').select2({allowClear:true});
    
    
    //jQuery ui distance slider
    $( "#slider-range" ).css('width','150px').slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 17, 67 ],
        slide: function( event, ui ) {
            var val = ui.values[$(ui.handle).index()-1] + "";

            if( !ui.handle.firstChild ) {
                $("<div class='tooltip bottom in' style='display:none;left:-6px;top:14px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>")
                .prependTo(ui.handle);
            }
            $(ui.handle.firstChild).show().children().eq(1).text(val);
        }
    }).find('span.ui-slider-handle').on('blur', function(){
        $(this.firstChild).hide();
    });
    

    //this is for demo only
    $('.thumbnail').on('mouseenter', function() {
        $(this).find('.info-label').addClass('label-primary');
    }).on('mouseleave', function() {
        $(this).find('.info-label').removeClass('label-primary');
    });
    

    //toggle display format buttons
    $('#toggle-result-format .btn').tooltip({container: 'body'}).on('click', function(e){
        $(this).siblings().each(function() {
            $(this).removeClass($(this).attr('data-class')).addClass('btn-grey');
        });
        $(this).removeClass('btn-grey').addClass($(this).attr('data-class'));
    });
    
    ////////////////////
    //show different search page
    $('#toggle-result-page .btn').on('click', function(e){
        var target = $(this).find('input[type=radio]');
        var which = parseInt(target.val());
        $('.search-page').parent().addClass('hide');
        $('#search-page-'+which).parent().removeClass('hide');
    });
});