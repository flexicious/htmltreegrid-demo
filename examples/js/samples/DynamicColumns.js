myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["DynamicColumns"]="http://www.flexicious.com/resources/Ultimate/docs/DynamicColumns.htm";


myCompanyNameSpace.DynamicColumns_grid_creationCompleteHandler=function(evt)
    {

        var grid=this;
        grid.setDataProvider(myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList());;
        grid.clearColumns();

    var col=myCompanyNameSpace.DynamicColumns_addColumn("id","Company ID");
    col.setColumnLockMode(flexiciousNmsp.FlexDataGridColumn.LOCK_MODE_LEFT)
    grid.addColumn(col);
    col=myCompanyNameSpace.DynamicColumns_addColumn("legalName","Company Name");
    col.setColumnLockMode(flexiciousNmsp.FlexDataGridColumn.LOCK_MODE_RIGHT)
    grid.addColumn(col);
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line1","Address Line 1"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line2","Address Line2"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addCurrencyColumn("earningsPerShare","EPS"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line1","Address Line 1"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line2","Address Line2"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addCurrencyColumn("earningsPerShare","EPS"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line1","Address Line 1"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line2","Address Line2"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addCurrencyColumn("earningsPerShare","EPS"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line1","Address Line 1"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addColumn("headquarterAddress.line2","Address Line2"));
    grid.addColumn(myCompanyNameSpace.DynamicColumns_addCurrencyColumn("earningsPerShare","EPS"));
    //grid.distributeColumnWidthsEqually();
    grid.reDraw();
 };
myCompanyNameSpace.DynamicColumnsCounter=0;
myCompanyNameSpace.DynamicColumns_addCurrencyColumn=function(dataField,headerText){
    var dgCol = myCompanyNameSpace.DynamicColumns_addColumn(dataField,headerText);
    dgCol.setLabelFunction(flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction);
    dgCol.setStyle("textAlign","right");
    dgCol.setUniqueIdentifier(headerText+myCompanyNameSpace.DynamicColumnsCounter++);
    dgCol.footerOperation="average";
    dgCol.footerLabel="Avg: ";
    dgCol.footerAlign="right";
    dgCol.setStyle("paddingRight",15);
    dgCol.filterOperation="GreaterThan";
    dgCol.filterWaterMark = "Greater Than";
    return dgCol;
};
myCompanyNameSpace.DynamicColumns_counter=0;
myCompanyNameSpace.DynamicColumns_addColumn=function(dataField,headerText){
    var dgCol = new flexiciousNmsp.FlexDataGridColumn();
    dgCol.setDataField(dataField);
    dgCol.setHeaderText(headerText);
    //because columns are having the same header text, we need to provide unique identifiers.
    dgCol.setUniqueIdentifier(headerText+""+myCompanyNameSpace.DynamicColumns_counter++);
    dgCol.filterControl="TextInput";
    dgCol.filterOperation="BeginsWith";
    dgCol.filterWaterMark = "Begins With";
    return dgCol;
};




myCompanyNameSpace.SAMPLE_CONFIGS["DynamicColumns"]='<grid horizontalScrollPolicy="on"  id="grid" width="800" height="500" enablePrint="true" ' +
    'enablePreferencePersistence="true" generateColumns="false" '+
    '									 enableExport="true" enableCopy="true" enableFilters="true" enableFooters="true" enablePaging="true" ' +
    'preferencePersistenceKey="dynamicColumns"'+
    '									 on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.DynamicColumns_grid_creationCompleteHandler">'+
    '		'+
    '	</grid>';