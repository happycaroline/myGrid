(function($) {
    
    $.fn.myGrid = function(options) {
        
        data = new MYGrid(this, options);
        console.log($.fn.myGrid.defaults)
        return this;
    }
    //默认参数
    $.fn.myGrid.defaults={
        nodatatext:'no data'
    }
    var MYGrid=function(element,options){
        this.opts=options;
        this._tableLayout($(element));
    }

    $.fn.myGrid.constructor=MYGrid;
    //私有方法
    MYGrid.prototype={
        _test:function(){
             console.log(2)
        },
        _tableLayout:function($ele){
            var opts=this.opts;
            var thead=ths=tbody='',rows=[];
            for(var i=0;i<opts.columns.length;i++){
                ths+='<th>'+opts.columns[i].datafield+'</th>';
            };
            thead='<thead><tr>'+ths+'</tr></thead>';
            if(opts.data){
                for(var i=0; i<opts.data.length;i++){
                    var item = opts.data[i];
                    rows.push('<tr>');
                    for(var td in item){
                        rows.push('<td class="customerName">' + item[td] + '</td>')
                    }
                    rows.push('</tr>');

                }
            }
            var html='<table class="table table-hover">\
                          '+thead+'\
                          <tbody>\
                            '+rows.join('')+'\
                          </tbody>\
                        </table>'
            $ele.html(html)
            return this;
        }
    }
 
})(jQuery);