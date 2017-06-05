myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ExternalFilter"]="http://www.flexicious.com/resources/Ultimate/docs/ExternalFilter.htm";

myCompanyNameSpace.externalFilter_CreationComplete=function (evt){

    //dgMain.buildFromXml(xml);
    grid.setDataProvider(myCompanyNameSpace.FlexiciousMockGenerator.getMockNestedData());
    grid.getColumnLevel().nextLevel.nextLevel.filterFunction=myCompanyNameSpace.externalFilter_filterDeviceTypes;
    grid.enableHeightAutoAdjust=true;
    grid.validateNow();
    grid.expandAll();

};

myCompanyNameSpace.externalFilter_filterDeviceTypes=function(item){
    //iframe loads after the grid loads.
    if(!grid||!document.getElementById('exampleHTML')||!document.getElementById("exampleHTML").contentWindow.document
        ||! document.getElementById("exampleHTML").contentWindow.document.getElementById("cbTimesheet1"))return true;

    if(! document.getElementById("exampleHTML").contentWindow.document.getElementById("cbTimesheet1").checked && item.timeSheetTitle=='Time Sheet-1')
        return false;
    if(! document.getElementById("exampleHTML").contentWindow.document.getElementById("cbTimesheet2").checked && item.timeSheetTitle=='Time Sheet-2')
        return false;
    return true;

};
myCompanyNameSpace.SAMPLE_CONFIGS["ExternalFilter"]="<grid x='0' y='0' forcePagerRow='true' enableFilters='true' enableMultiColumnSort='true' builtInActions='sort,separator'  width='800' height='600' id='dgMain' styleName='FlexiciousGridStyle'" +
    " preferencePersistenceKey='externalFilter' on"+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+"='myCompanyNameSpace.externalFilter_CreationComplete'" +
    " enableSelectionCascade='true' enableSelectionBubble='true' enableTriStateCheckbox='true' showSpinnerOnFilterPageSort='true' enableDefaultDisclosureIcon='false'>"+
    "  <level childrenField='items'  enableFilters='false' nestIndent='20'>"+
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
    "      <level reusePreviousLevelColumns='false' childrenField='items'   headerVerticalGridLineThickness='1' >"+
    "        <columns>"+
    "	       <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='50' columnWidthMode='fixed' expandCollapseIconLeft='25'/>"+
    "   	   <column type='checkbox'/>"+
    "          <column  dataField='project' headerText='Project' />"+
    "          <column dataField='roleOnProject' headerText='Role On Project'  />"+
    "          <column dataField='projectStartDate' headerText='Project Start'  />"+
    "          <column dataField='projectEndDate' headerText='Project End'  />"+
    "        </columns>"+
    "        <nextLevel>"+
    "          <level reusePreviousLevelColumns='false' childrenField='items' headerVerticalGridLineThickness='1'  >"+
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