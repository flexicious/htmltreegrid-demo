myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["TraderView"]="http://www.flexicious.com/resources/Ultimate/docs/TraderView.htm";

myCompanyNameSpace.TraderView_getCellTextColor=function (cell){

    if(cell.getRowInfo().getData().tickUp)
        return 0x000000;
    else
        return 0xFFFFFF;

};

myCompanyNameSpace.TraderView_getCellBackgroundColor=function (cell){
    if(cell.getRowInfo().getData().tickUp)
        return 0x11FF01;
    else
        return 0xFF0101;

};


myCompanyNameSpace.tradingView_CreationComplete = function () {
    var stocks =[];
    for (var i=0;i<500;i++){
        var chg=myCompanyNameSpace.FlexiciousMockGenerator.getRandom(-10,10);
        stocks.push({"id":i,"symbol":"TICK" + i, "name":"Ticker with symbol"+i
            ,"last":myCompanyNameSpace.FlexiciousMockGenerator.getRandom(20,30),"change":chg+"%","tickUp":(chg>0)});
    }
    flexiciousNmsp.UIUtils.sortOn(stocks,"id");
    grid.setDataProvider(stocks);
};

myCompanyNameSpace.tradingView_timer=null;
myCompanyNameSpace.tradingView_repeatrate=12;
myCompanyNameSpace.tradingView_startTimer=function(checked) {
    if (!myCompanyNameSpace.tradingView_timer)
    {
        myCompanyNameSpace.tradingView_timer = new flexiciousNmsp.Timer(1000.0 / myCompanyNameSpace.tradingView_repeatrate);
        myCompanyNameSpace.tradingView_timer.addEventListener(this,flexiciousNmsp.Constants.EVENT_TIMER, myCompanyNameSpace.tradingView_updateTimerHandler);
    }

    if (checked)
    {
        myCompanyNameSpace.tradingView_timer.start();
    }
    else
    {
        myCompanyNameSpace.tradingView_timer.stop();
    }
};
myCompanyNameSpace.tradingView_updateTimerHandler=function(evt) {
    var fdg = grid;
    //when this happens, we get a batch from the server that says tickers with XX ids have
    //new values...
    var affectedItems= [];
    //we just randomly update some 25 items out of the 100.
    for(var i=0;i<250;i++){
        var random=myCompanyNameSpace.FlexiciousMockGenerator.getRandom(0,fdg.getDataProvider().length-1);

        var chg=myCompanyNameSpace.FlexiciousMockGenerator.getRandom(-10,10);
        fdg.getDataProvider()[random].last=myCompanyNameSpace.FlexiciousMockGenerator.getRandom(20,30)
        fdg.getDataProvider()[random].change=chg
        fdg.getDataProvider()[random].tickUp=chg>0;
        affectedItems.push(fdg.getDataProvider()[random]);
    }

    //now the key here is to only update the cells that are affected.
    //this means we navigate to the row, get the affected cell, and invalidate it...
    //we go through the affectedItems, but keep in mind not all of the
    //affectedItems could be in view. So we check to see if anything is
    //drawn and if something is drawn, only then refresh it...
    var items=affectedItems;
    for (var i=0;i<items.length;i++){
        var item = items[i];
        //now there is a function call - getCellByRowColumn on the grid.
        //that will quickly get you the cell to update. but in this case
        //since we are updating multiple cells in each row, we will just
        //get the row to update and use its cells collection to quickly
        //update them
        var rows=fdg.getBodyContainer().rows;
        for (var j=0;j<rows.length;j++){
            var row=rows[j];
            if(row.getData()==item){
                //this means we need to update his cells
                row.cells[2].component.refreshCell();
                row.cells[3].component.refreshCell();
            }
        }
    }
};


myCompanyNameSpace.SAMPLE_CONFIGS["TraderView"]='<grid id="fdg"' +
    '               preferencePersistenceKey="tradingView" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.tradingView_CreationComplete">'+
    '		<columns>'+
    '			<column headerText="Symbol" dataField="symbol"/>'+
    '			<column headerText="Name" dataField="name"/>'+
    '			<column headerText="Last" dataField="last" cellTextColorFunction="myCompanyNameSpace.TraderView_getCellTextColor" cellBackgroundColorFunction="myCompanyNameSpace.TraderView_getCellBackgroundColor"/>'+
    '			<column headerText="Change" dataField="change" cellTextColorFunction="myCompanyNameSpace.TraderView_getCellTextColor" cellBackgroundColorFunction="myCompanyNameSpace.TraderView_getCellBackgroundColor"/>'+
    '		</columns>'+
    '	</grid>';