/*
 * id : id of special table
 * arrWidth : array, a series of numbers for each th in each tr
 * bodyHeight : the height of the tbody
 */
function fixedHeadTable(id,arrWidth,bodyHeight){
	id = '#' + id;	    	
	var head = id + '>thead',
		body = id + '>tbody',
		head_tr = head + '>tr',
		body_tr = body + '>tr',
		head_tr_th = head_tr + '>th',
		body_tr_td = body_tr + '>td',
		tableWidth = 0,
		colNum = $(head_tr_th).length;
    	bodyRowNum = $(body_tr).length;
    $(id).css({
		'white-space': 'nowrap',
    	'border-width': 0
	});
	$(head).css('display','block');
	$(body).css({
		'display':'block',
		'overflow':'auto',
		'height':bodyHeight,
	});
	$(head_tr).css('border-top','1px solid #ddd');
	$(head_tr_th).css({
		'overflow': 'hidden',
    	'text-overflow': 'ellipsis'
	})
	/* computing the width of the special table */
	arrWidth.forEach(function(each){
    	tableWidth += each;
	});
	/* '18': the width of browser scroll bar */
	tableWidth += 18;	    	
	/* setting the width of the special table */
	$(id).css('width',tableWidth);
	/* thead */	    	
	for(let i=0;i<colNum;i++){
        $(head_tr_th).eq(i).css({'width':arrWidth[i],'max-width':arrWidth[i]});
    }
    /* tbody */		    
    for(let i=0;i<bodyRowNum;i++){
		for(let j=0;j<colNum;j++){
			$(body_tr).eq(i).children().eq(j).css({'width':arrWidth[j],'max-width':arrWidth[j]});
		}	    	
	}
}
