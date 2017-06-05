myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["SelectionUI1"]="http://www.flexicious.com/resources/Ultimate/docs/SelectionUI1.htm";

    myCompanyNameSpace.selectedUI1_CreationComplete=function (evt){

        grid.validateNow();
        grid.expandAll();


    };

myCompanyNameSpace.SAMPLE_CONFIGS["SelectionUI1"]="<grid x='0' y='0' forcePagerRow='true' enableFilters='true' " +
    "           enableMultiColumnSort='true' builtInActions='sort,separator'  id='grid' styleName='FlexiciousGridStyle' " +
    "           enableSelectionCascade='true' enableSelectionBubble='true' enableTriStateCheckbox='true' " +
    "           preferencePersistenceKey='selectedUI1' on"+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+"='myCompanyNameSpace.selectedUI1_CreationComplete'"+
    "           showSpinnerOnFilterPageSort='true' enableDefaultDisclosureIcon='false'>"+
    "  <level childrenField='items'  enableFilters='false' nestIndent='20' selectedKeyField='employeeId'>"+
    "    <columns>"+
    "      <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='25' columnWidthMode='fixed'  enableCellClickRowSelect='false'/>"+
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
    "	       <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='50' columnWidthMode='fixed' expandCollapseIconLeft='25' enableCellClickRowSelect='false'/>"+
    "   	   <column type='checkbox'/>"+
    "          <column  dataField='project' headerText='Project' />"+
    "          <column dataField='roleOnProject' headerText='Role On Project'  />"+
    "          <column dataField='projectStartDate' headerText='Project Start'  />"+
    "          <column dataField='projectEndDate' headerText='Project End'  />"+
    "        </columns>"+
    "        <nextLevel>"+
    "          <level reusePreviousLevelColumns='false' childrenField='items' headerVerticalGridLineThickness='1'  selectedKeyField='timesheetId'  enableCellClickRowSelect='false'>"+
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