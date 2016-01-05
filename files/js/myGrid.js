(function($) {
    
    $.fn.myGrid = function(options) {
        var thead,ths,tbody,tds,rows;
        // debugger
        for(var i=0;i<options.columns.length;i++){
            ths+='<th>'+options.columns[i].datafield+'</th>';

        }

        thead='<thead><tr>'+ths+'</tr></thead>';
        var html='<table class="table table-hover">\
                      '+thead+'\
                      <tbody>\
                        <tr>\
                          <td>Mark</td>\
                          <td>Otto</td>\
                          <td>@mdo</td>\
                        </tr>\
                        <tr>\
                          <td>Jacob</td>\
                          <td>Thornton</td>\
                          <td>@fat</td>\
                        </tr>\
                        <tr>\
                          <td>Larry</td>\
                          <td>the Bird</td>\
                          <td>@twitter</td>\
                        </tr>\
                      </tbody>\
                    </table>'

        $(this).html(html)

        return this;
    }
 
})(jQuery);