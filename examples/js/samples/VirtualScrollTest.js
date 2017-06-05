myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["VirtualScrollTest"]="http://www.flexicious.com/resources/Ultimate/docs/VirtualScroll.htm";

myCompanyNameSpace.virtualScrollTest_onCreationComplete=function (evt){

    myCompanyNameSpace.virtualScrollTest_loadInitialData();
    grid.validateNow();
    grid.getBodyContainer().doScroll();

};
 myCompanyNameSpace.virtualScrollTest_orgData = [];
myCompanyNameSpace.virtualScrollTest_loadInitialData=function (){

    //grid.gotoVerticalPosition(0);
    myCompanyNameSpace.virtualScrollTest_orgData=[];
    for( var x = 0; x <= 50; x++ )
    {
        var obj = new Object();
        myCompanyNameSpace.virtualScrollTest_populateObject(obj,x.toString(),grid.getColumnLevel());
        myCompanyNameSpace.virtualScrollTest_orgData.push(obj);
    }
    grid.setDataProvider(myCompanyNameSpace.virtualScrollTest_orgData);
    grid.setTotalRecords(100000);
};
myCompanyNameSpace.virtualScrollTest_virtualScrollHandler=function (evt){

    var vbd =grid.getBodyContainer();

    //txtOpen.setText(vbd._openItemVerticalPositions.join(""));
    //txtRecords.setText(evt.recordsToLoad.join(""));
    //in real life, we will send server request)
    for(var i=0;i<evt.recordsToLoad.length;i++){
        var vsli=evt.recordsToLoad[i];
        vsli.item = myCompanyNameSpace.virtualScrollTest_populateObject(new Object(),
            vsli.item?vsli.item.Id:vsli.parent?vsli.parent.Id+":"+vsli.recordIndex.toString():vsli.recordIndex.toString(),
            vsli.level);
    }
    vbd.setVirtualScrollData(evt.recordsToLoad);

};
myCompanyNameSpace.virtualScrollTest_filterPageSortChangeHandler=function (evt){

    if(evt.filter.level.getNestDepth()==1){
        //this means the top level filter changed.
        myCompanyNameSpace.virtualScrollTest_loadInitialData();
    }else{
        //this means the user changed the sort at an inner level
        //this will be handled similar to a virtual scroll, just with updated sort information.
    }

};

myCompanyNameSpace.virtualScrollTest_populateObject=function (obj, x, lvl){

    obj.Id = x;
    obj.Name = "Name " + x.toString();
    obj.Street = "Street" + x;
    obj.Title = "CEO" + x;
    obj.City = "City" + x;
    if(obj.Id!=3)
        obj.numChildren=1000;

    return obj;

};

myCompanyNameSpace.virtualScrollTest_scrollHandler=function (evt){

    grid.spinnerLabel = "Loading Record " + (grid.getVirtualBodyContainer().getTopLevelRecordIndex(evt.scrollTop));

};
//
//myCompanyNameSpace.virtualScrollTest_itemClickHandler=function (evt){
//
//    if(evt.level.getNestDepth()==2 && evt.cell.getRowInfo().getIsDataRow()&& !evt.level.getParentLevel().isItemSelected(evt.cell.getRowInfo().rowPositionInfo.virtualScrollLoadInfo.parent,true)){
//        //this means we selected a child and its parent is not selected
//        evt.level.getParentLevel().selectRow(evt.cell.getRowInfo().rowPositionInfo.virtualScrollLoadInfo.parent,true,false,false,false,null);
//    }
//
//};



myCompanyNameSpace.SAMPLE_CONFIGS["VirtualScrollTest"]='<grid id="grid" selectedKeyField="Id" filterPageSortMode="server" showSpinnerOnFilterPageSort="true"'+
    '											 filterPageSortChange="myCompanyNameSpace.virtualScrollTest_filterPageSortChangeHandler"'+
    '											 enableVirtualScroll="true"'+
    '											 initialSortField="Id" virtualScroll="myCompanyNameSpace.virtualScrollTest_virtualScrollHandler"'+
    '											 scroll="myCompanyNameSpace.virtualScrollTest_scrollHandler" '+
    '											 enableSelectionCascade="true"'+
    '											 enableSelectionBubble="true"'+
    '											 enableSelectionExclusion="true"'+
    '											 enableTriStateCheckbox="true"'+
    '											 clearSelectionOnDataProviderChange="false"'+
   // '											 itemClick="myCompanyNameSpace.virtualScrollTest_itemClickHandler"' +
    '                    preferencePersistenceKey="virtualScrollTest" creationComplete="myCompanyNameSpace.virtualScrollTest_onCreationComplete">'+
    '					<level childrenCountField="numChildren" itemLoadMode="server" enableFooters="true" selectedKeyField="Id" >'+
    '						<columns>'+
    '							<column type="checkbox"/>'+
    '							<column dataField="Id" enableHierarchicalNestIndent="true"/>'+
    '							<column dataField="Name" />'+
    '							<column dataField="Street" />'+
    '							<column dataField="Title" />'+
    '							<column dataField="City" />'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level  enableFooters="true" selectedKeyField="Id" >'+
    '								<columns>'+
    '									<column type="checkbox"/>'+
    '									<column dataField="Id" enableHierarchicalNestIndent="true"/>'+
    '									<column dataField="Name" />'+
    '									<column dataField="Street" />'+
    '									<column dataField="Title" />'+
    '									<column dataField="City" />'+
    '								</columns>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '			</grid>';