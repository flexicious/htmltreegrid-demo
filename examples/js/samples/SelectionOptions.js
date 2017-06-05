myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["SelectionOptions"]="http://www.flexicious.com/resources/Ultimate/docs/SelectionOptions.htm";

myCompanyNameSpace.selectionOptions_CreationComplete=function (evt){

    //grid.buildFromXml(FlexiciousMockGenerator.mockNestedXml);
    myCompanyNameSpace.selectionOptions_insertUIDColumn(grid.getColumnLevel());
    grid.setDataProvider(myCompanyNameSpace.FlexiciousMockGenerator.getMockNestedData());
    grid.validateNow();
    grid.expandAll();
    //grid.columnLevel.rowDisabledFunction=myCompanyNameSpace.selectionOptions_checkRowDisabled
    myCompanyNameSpace.selectionOptions_mdg_changeHandler(null)

};
myCompanyNameSpace.selectionOptions_cbDisable=true;
myCompanyNameSpace.selectionOptions_checkRowDisabled=function (cell, data){

    if(!myCompanyNameSpace.selectionOptions_cbDisable.selected)return false;
    return data.hasOwnProperty("title")&&data.title=="Architect";

};

myCompanyNameSpace.selectionOptions_mdg_changeHandler=function (evt){
    if(!grid||!document.getElementById('exampleHTML'))return;
    var frameDoc = document.getElementById('exampleHTML').contentWindow.document;
    if(!frameDoc)return;
    if(!frameDoc.getElementById("lblSelectedKeys"))return;
    frameDoc.getElementById("lblSelectedKeys").value=(grid.getSelectedKeys().join("\n"));
    frameDoc.getElementById("lblUnSelectedKeys").value=(grid.getUnSelectedKeys().join("\n"));
    frameDoc.getElementById("lblOpenKeys").value=(grid.getOpenKeys().join("\n"));

};
myCompanyNameSpace.selectionOptions_insertUIDColumn=function (columnLevel){

    var cols=columnLevel.getColumns();
    var uuIdCol = new flexiciousNmsp.FlexDataGridColumn();
    uuIdCol.labelFunction=myCompanyNameSpace.selectionOptions_getUID;
    uuIdCol.setHeaderText("UID");
    cols.push(uuIdCol);
    columnLevel.setColumns(cols);
    if(columnLevel.nextLevel)
        myCompanyNameSpace.selectionOptions_insertUIDColumn(columnLevel.nextLevel);

};
myCompanyNameSpace.selectionOptions_getUID=function (item,col){

    return item.toString();

};
myCompanyNameSpace.selectionOptions_UseSelectionExclusion = function(checked) {
    grid.clearSelection();
    grid.enableSelectionExclusion= checked;
};

myCompanyNameSpace.selectionOptions_SelectionCascadeBubble = function(checked) {
    grid.clearSelection();
    grid.enableSelectionCascade=checked;
    grid.enableSelectionBubble=checked;
    grid.enableTriStateCheckbox=checked;
};

myCompanyNameSpace.selectionOptions_DisableSelectionforaRow = function(evt) {
    grid.clearSelection();
    grid.redrawBody();
};

myCompanyNameSpace.selectionOptions_ClearOpenItemsonDataproviderRefresh = function(checked) {
    grid.clearOpenItemsOnDataProviderChange=checked;
};

myCompanyNameSpace.selectionOptions_handleClearSelectedItemsonDataproviderRefresh = function(checked) {
    grid.clearSelectionOnDataProviderChange=checked;
};

myCompanyNameSpace.SAMPLE_CONFIGS["SelectionOptions"]="<grid x='0' y='0' clearOpenItemsOnDataProviderChange='false' clearSelectionOnDataProviderChange='false' forcePagerRow='true' enableFilters='true' enableMultiColumnSort='true' builtInActions='sort,separator'  id='grid' styleName='FlexiciousGridStyle' enableSelectionCascade='true' enableSelectionBubble='true' enableTriStateCheckbox='true' " +
    "    preferencePersistenceKey='selectionOptions' on"+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+"='myCompanyNameSpace.selectionOptions_CreationComplete' showSpinnerOnFilterPageSort='true' enableDefaultDisclosureIcon='false'" +
    "   change='myCompanyNameSpace.selectionOptions_mdg_changeHandler' itemOpen='myCompanyNameSpace.selectionOptions_mdg_changeHandler' itemClose='myCompanyNameSpace.selectionOptions_mdg_changeHandler'>"+
    "  <level childrenField='items'  enableFilters='false' nestIndent='20' selectedKeyField='employeeId'>"+
    "    <columns>"+
    "      <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='25' columnWidthMode='fixed'/>"+
    "      <column type='checkbox'/>"+
    "      <column headerText='Employee Name' dataField='employeeName' filterControl='TextInput' filterOperation='BeginsWith'  />"+
    "      <column headerText='Title' dataField='title' filterControl='TextInput' filterOperation='BeginsWith'/>"+
    "      <column headerText='Email Address' dataField='emailAddress' filterControl='TextInput' filterOperation='BeginsWith'/>"+
    "      <column headerText='Department' dataField='department' filterControl='TextInput' filterOperation='BeginsWith'/>"+
    "      <column headerText='Hire Date' dataField='hireDate' filterControl='TextInput' filterOperation='BeginsWith' />"+
    "      </columns>"+
    "      <nextLevel>"+
    "      <level reusePreviousLevelColumns='false' childrenField='items'   headerVerticalGridLineThickness='1' selectedKeyField='projectId'>"+
    "        <columns>"+
    "	       <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='50' columnWidthMode='fixed' expandCollapseIconLeft='25'/>"+
    "   	   <column type='checkbox'/>"+
    "          <column  dataField='project' headerText='Project' />"+
    "          <column dataField='roleOnProject' headerText='Role On Project'  />"+
    "          <column dataField='projectStartDate' headerText='Project Start'  />"+
    "          <column dataField='projectEndDate' headerText='Project End'  />"+
    "        </columns>"+
    "        <nextLevel>"+
    "          <level reusePreviousLevelColumns='false' childrenField='items' headerVerticalGridLineThickness='1'  selectedKeyField='timesheetId'>"+
    "            <columns>"+
    "	       	   <column sortable='false' headerText='' excludeFromSettings='true' width='75' columnWidthMode='fixed'/>"+
    "   	   	   <column type='checkbox'/>"+
    "              <column dataField='timeSheetTitle' headerText='TimeSheet Title' />"+
    "              <column dataField='hours' headerText='Hours'  />"+
    "              <column dataField='rate' headerText='Rate'  />"+
    "              <column dataField='totalExpense' headerText='Total Expense'  />"+
    "            </columns>"+
    "          </level>"+
    "        </nextLevel>"+
    "      </level>"+
    "    </nextLevel>"+
    "  </level>"+
    "</grid>";
