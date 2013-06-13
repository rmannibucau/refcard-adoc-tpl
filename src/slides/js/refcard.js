$( function()
{
    function init()
    {
        var pageWidth = $( window ).width();
        var numberOfColumns = 1;
        var columns = [];
        switch ( true )
        {
            case pageWidth >= 978 && pageWidth < 1350:
                numberOfColumns = 2;
                break;
            case pageWidth >= 1350 && pageWidth < 1800:
                numberOfColumns = 3;
                break;
            case pageWidth >= 1800 && pageWidth < 2210:
                numberOfColumns = 4;
                break;
            case pageWidth >= 2210 && pageWidth < 2640:
                numberOfColumns = 5;
                break;
            case pageWidth >= 2640:
                numberOfColumns = 6;
                break;
        }
        if ( numberOfColumns < 2 )
        {
            return;
        }
        var page = $( "#clearing-div" );
        for ( var i = 2; i <= numberOfColumns; i++ )
        {
            column = $( '<div class="columns" id="column-' + i + '"/>' );
            column.insertBefore( page );
            columns.push( column );
        }
        //           <div style="clear:both;"> </div>
        $( "#page >> div.col" ).each( function()
        {
            var element = $( this );
            for ( var i = 2; i <= numberOfColumns; i++ )
            {
                var moveTo = "c" + numberOfColumns + "-" + i;
                if ( element.hasClass( moveTo ) )
                {
                    var clone = element.clone( true );
                    clone.appendTo( columns[i - 2] );
                    element.addClass( "moved" );
                }
            }
        } );
    }
    init();
    $( window ).resize(function()
    {
        $( "div.columns" ).remove();
        $( "#page >> div.col" ).removeClass( "moved" );
        init();
    });
} );

hljs.initHighlightingOnLoad()
