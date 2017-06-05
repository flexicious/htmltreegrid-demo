myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ChangeTrackingAPI"]="http://www.flexicious.com/resources/Ultimate/docs/ChangeTrackingAPI.htm";

myCompanyNameSpace.changeTrackingAPI_CreationComplete=function (evt){

    grid.setDataProvider(myCompanyNameSpace.FlexiciousMockGenerator.getMockNestedData());
    grid.validateNow();
    grid.expandAll();

};
myCompanyNameSpace.changeTrackingAPI_onRowChanged = function (evt){
//    if(!grid||!document.getElementById('exampleHTML'))return;
//    var textArea = document.getElementById('exampleHTML').contentWindow.document.getElementById('txtChanges');
//    if(!textArea)return;
//    textArea.value = grid.getChanges().join("\n");
};

myCompanyNameSpace.changeTrackingAPI_getCellBackgroundColor=function (cell){

    if(!cell.getRowInfo().getIsDataRow() || cell.level.grid.implementsOrExtends("IPrintDatagrid")){
        return null;
    }

    for(var i=0;i<grid.getChanges().length;i++){
        var changeInfo=grid.getChanges()[i];
        if(changeInfo.changedItem == cell.getRowInfo().getData()
            && changeInfo.changedProperty == cell.getColumn().dataField
            && changeInfo.previousValue!=changeInfo.newValue){
                return 0x119933;
        }
    }
    return null;

};

myCompanyNameSpace.SAMPLE_CONFIGS["ChangeTrackingAPI"]='<grid editable="true" forcePagerRow="true" enableFilters="true" enableMultiColumnSort="true" builtInActions="sort,separator" id="dgMain" styleName="FlexiciousGridStyle" enableSelectionCascade="true" enableSelectionBubble="true" enableTriStateCheckbox="true" showSpinnerOnFilterPageSort="true" enableDefaultDisclosureIcon="false" preferencePersistenceKey="changeTrackingAPI" ' +
    'on'+flexiciousNmsp.FlexDataGrid.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.changeTrackingAPI_CreationComplete" ' +
    'on'+flexiciousNmsp.FlexDataGrid.EVENT_ROWCHANGED+'="myCompanyNameSpace.changeTrackingAPI_onRowChanged" ' +
    '   cellBackgroundColorFunction="myCompanyNameSpace.changeTrackingAPI_getCellBackgroundColor"'+
    ' enableTrackChanges="true">'+
    '  <level childrenField="items"  enableFilters="false" nestIndent="20"  width="800" height="600" >'+
    '    <columns>'+
    '      <column sortable="false" headerText="" excludeFromSettings="true" enableExpandCollapseIcon="true" width="25" columnWidthMode="fixed" editable="false"/>'+
    '      <column type="checkbox"/>'+
    '      <column headerText="Employee Name" dataField="employeeName" filterControl="TextInput" filterOperation="BeginsWith"  />'+
    '      <column headerText="Title" dataField="title" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '      <column headerText="Email Address" dataField="emailAddress" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '      <column headerText="Department" dataField="department" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '      <column headerText="Hire Date" dataField="hireDate" filterControl="TextInput" filterOperation="BeginsWith" />'+
    '      </columns>'+
    '      <nextLevel>'+
    '      <level reusePreviousLevelColumns="false" childrenField="items"   headerVerticalGridLineThickness="1" >'+
    '        <columns>'+
    '	       <column sortable="false" headerText="" editable="false" excludeFromSettings="true" enableExpandCollapseIcon="true" width="50" columnWidthMode="fixed" expandCollapseIconLeft="25"/>'+
    '   	   <column type="checkbox"/>'+
    '          <column  dataField="project" headerText="Project" />'+
    '          <column dataField="roleOnProject" headerText="Role On Project"  />'+
    '          <column dataField="projectStartDate" headerText="Project Start"  />'+
    '          <column dataField="projectEndDate" headerText="Project End"  />'+
    '        </columns>'+
    '        <nextLevel>'+
    '          <level reusePreviousLevelColumns="false" childrenField="items" headerVerticalGridLineThickness="1"  >'+
    '            <columns>'+
    '	       	   <column sortable="false" headerText="" editable="false" excludeFromSettings="true" width="75" columnWidthMode="fixed"/>'+
    '   	   	   <column type="checkbox"/>'+
    '              <column dataField="timeSheetTitle" headerText="TimeSheet Title" />'+
    '              <column dataField="hours" headerText="Hours"  />'+
    '              <column dataField="rate" headerText="Rate"  />'+
    '              <column dataField="totalExpense" headerText="Total Expense"  />'+
    '            </columns>'+
    '          </level>'+
    '        </nextLevel>'+
    '      </level>'+
    '    </nextLevel>'+
    '  </level>'+
    '</grid>';