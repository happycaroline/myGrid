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
        columns:[],
        className:'table'
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
            var html=[
                '<div class="myGrid">',
                    '<table class="'+opts.className+'">',
                    this._tableHead(),
                    this._tableBody(),
                    '</table>',
                    this._tableNoData(),
            ]
            $ele.html(html.join(''))
            
            return this;
        },
        _tableHead:function(){
            var opts=this.opts,
                columns=opts.columns,thead=ths='';
            for(var i=0;i<columns.length;i++){
                    ths+='<th>'+columns[i].text+'</th>';
                };

            thead='<thead><tr>'+ths+'</tr></thead>';

            return thead;
        },
        _tableBody:function(){
            var opts=this.opts,
                rows=['<tbody>'];
            if(opts.data.length){
                
                for(var i=0; i<opts.data.length;i++){
                    var item = opts.data[i];
                    rows.push('<tr>');
                    for(var td in item){
                        rows.push('<td class="customerName">' + item[td] + '</td>')
                    }
                    rows.push('</tr>');
                }
                return rows.join('</tbody>')
            }
            
        },
        _tableNoData:function(){
            var opts=this.opts;
            if(!opts.data.length){
                return '<div>'+opts.nodatatext+'</div>'
            }else{
                return ''
            }
        }
    }
})(jQuery);