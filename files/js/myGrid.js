(function($) {
    
    $.fn.myGrid = function(options) {
        if(arguments.length===0||typeof arguments[0]=== 'object'){
            var option=arguments[0],
                data=this.data('myGrid'),
                options=$.extend({},$.fn.myGrid.defaults,option);
            if(!data){
                data=new MYGrid(this,options);
                this.data('myGrid',data)
            }
            return $.extend(true,this,data)
        }
    }
    //默认参数
    $.fn.myGrid.defaults={
        nodatatext:'no data',
        data:[],
        columns:[]
    }
    var MYGrid=function(element,options){
        this.opts=options;
        this._tableLayout($(element));
    }

    $.fn.myGrid.constructor=MYGrid;
    //私有方法
    MYGrid.prototype={
        _tableLayout:function($ele){
            var opts=this.opts;
            var thead=ths=tbody='',rows=[];
            for(var i=0;i<opts.columns.length;i++){
                ths+='<th>'+opts.columns[i].datafield+'</th>';
            };
            thead='<thead><tr>'+ths+'</tr></thead>';
            if(opts.data.length){
                for(var i=0; i<opts.data.length;i++){
                    var item = opts.data[i];
                    rows.push('<tr>');
                    for(var td in item){
                        rows.push('<td class="customerName">' + item[td] + '</td>')
                    }
                    rows.push('</tr>');

                }
                var html='<table class="table table-hover">\
                          '+thead+'\
                          <tbody>\
                            '+rows.join('')+'\
                          </tbody>\
                        </table>'
                $ele.html(html)
            }else{
                var html='<table class="table table-hover">\
                          '+thead+'\
                          <tbody>\
                          </tbody>\
                        </table><div>'+opts.nodatatext+'</div>'
                $ele.html(html)
            }
            
            return this;
        }
    }
 
})(jQuery);