myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["OutlookGroupedData"]="http://www.flexicious.com/resources/Ultimate/docs/OutlookGroupedData.htm";

myCompanyNameSpace.outlookGroupedData_CreationComplete = function (evt) {
    grid.validateNow();
    grid.expandAll();

};

myCompanyNameSpace.outlookGroupedData_gridrendererInitializedHandler=function (evt){

    var cell=event.cell;
    if((cell.implementsOrExtends("IFlexDataGridDataCell"))){//the dg has various types of cells. we only want to style the data cells...
        if(cell.level.getNestDepth()==1){
            //at the first level, we want font to be bold ...
            //cell.setStyle("fontWeight","bold");
            cell.setStyle("fontWeight","bold");

        }
        else{
            cell.setStyle("fontWeight","normal");
        }

    }

};
myCompanyNameSpace.outlookGroupedData_gridbeforePrintHandler=function (evt){

    event.printGrid.styleName="gridStyle";

};

myCompanyNameSpace.outlookGroupedData_getInvoiceAmount=function (data,col){

    var val=0;
    if(data.implementsOrExtends("Deal")) {
        var a =data.implementsOrExtends("Deal")?data:null;
        val= a.getDealAmount();
    }
    else if(data.implementsOrExtends("Organization")) {
        var b=data.implementsOrExtends("Organization")?data:null;
        val= b.getRelationshipAmount();
    }
    return flexiciousNmsp.UIUtils.formatCurrency(val);

};

myCompanyNameSpace.outlookGroupedDat_amountSortCompareFunction=function (obj1, obj2){

    if(obj1.implementsOrExtends("Organization ")&& obj2.implementsOrExtends("Organization")){
        return ObjectUtil.numericCompare(obj1.getRelationshipAmount(),obj2.getRelationshipAmount());
    }
    else if(obj1.implementsOrExtends("Deal") && obj2.implementsOrExtends("Deal")){
        return ObjectUtil.numericCompare(obj1.getDealAmount(),obj2.getDealAmount());
    }
    else if(obj1.implementsOrExtends("Invoice")  && obj2.implementsOrExtends("Invoice")){
        return ObjectUtil.numericCompare(obj1.getInvoiceAmount(),obj2.getInvoiceAmount());
    }
    return 0;


};

myCompanyNameSpace.outlookGroupedData_getBlueColor=function (cell){

    //since the text color changes when hte user hovers over, or selects (potentially) we always want it to be blue.
    return 0x3764A0;

};

myCompanyNameSpace.outlookGroupedData_gridstyle={
    verticalGridLines:false,
    horizontalGridLines:true,
    headerColors: [0xEEEEEE,0xEEEEEE] ,
    headerRollOverColors: [0xEEEEEE,0xEEEEEE ] ,
    headerVerticalGridLineColor:0xD0D0D0 ,
    filterColors: [0xEEEEEE,0xEEEEEE ] ,
    filterRollOverColors: [0xEEEEEE,0xEEEEEE ] ,
    filterVerticalGridLineColor:0xD0D0D0  ,
    footerColors: [0xFFFFFF,0xFFFFFF ] ,
    footerRollOverColors: [0xFFFFFF,0xFFFFFF ] ,
    footerVerticalGridLines:false ,
    footerHorizontalGridLineColor:0xEDEDED,
    footerStyleName:"myHeader" ,
    headerStyleName:"myHeader" ,
    headerHorizontalGridLineColor:0xD0D0D0,
    selectionColor:0xCEDBEF,
    alternatingItemColors: [0xFFFFFF,0xFFFFFF],
    rollOverColor:0xFFFFFF,
    disclosureOpenIcon: "/minus.png",//make sure you put these images in flexiciousNmsp.Constants.IMAGE_PATH
    disclosureClosedIcon: "/plus.png",//make sure you put these images in flexiciousNmsp.Constants.IMAGE_PATH
    horizontalGridLineColor:0x99BBE8
};

myCompanyNameSpace.SAMPLE_CONFIGS["OutlookGroupedData"]='<grid id="grid"  enablePrint="true" '+
    '									 enablePreferencePersistence="true"  '+
    '									 styleName="gridStyle"'+
    '									 enableDrillDown="true"'+
    '									 preferencePersistenceKey="outlookGroupedData" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.outlookGroupedData_CreationComplete"'+
    '									 rendererInitialized="myCompanyNameSpace.outlookGroupedData_gridrendererInitializedHandler"'+
    '									 beforePrint="myCompanyNameSpace.outlookGroupedData_gridbeforePrintHandler"'+
    '									 enableExport="true" enableCopy="true">'+
    '			<level enablePaging="true" pageSize="20" childrenField="deals" selectedKeyField="id"  horizontalGridLineThickness="2" headerPaddingTop="5" reusePreviousLevelColumns="true"  rowHeight="35" rowTextColorFunction="myCompanyNameSpace.outlookGroupedData_getBlueColor"  enableFilters="true" initialSortField="legalName">'+
    '				<columns>'+
    '					<column dataField="legalName" headerText="Organization Name" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '					<column dataField="dealDescription" headerText="Deal Description"/>'+
    '					<column dataField="dealStatus.name" headerText="Deal Status" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '					<column dataField="dealAmount" headerText="Amount" textAlign="right"  footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="myCompanyNameSpace.outlookGroupedData_getInvoiceAmount" sortCompareFunction="myCompanyNameSpace.outlookGroupedDat_amountSortCompareFunction"/>'+
    '					<column dataField="dealDate" headerText="Deal Date"   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level selectedKeyField="id" reusePreviousLevelColumns="true" rowHeight="25" horizontalGridLineColor="0xEDEDED" footerRowHeight="25" horizontalGridLineThickness="1" paddingTop="2" enableFooters="true" initialSortField="dealDate" initialSortAscending="false"/>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';
