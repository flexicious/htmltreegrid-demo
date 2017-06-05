myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["AdvancedServerGrid"]="http://www.flexicious.com/resources/Ultimate/docs/AdvancedServerGrid.htm";


//TODO
/*'<mx:HBox width="100%">'+
    '		<mx:Label text="# Selected Ids: {dgEmployeesServer.selectedKeys.length}"/>'+
    '		<mx:Spacer width="100%"/>'+
'		<mx:Button label="View Explanation For Example" click="UIUtils.openBrowserPopup('http://www.flexicious.com/Home/AdvancedgridPagingFilterServer','+
    '				   'width=1024,height=768,lef t=0,top=0, toolbar=No,location=No,scrollbars=Yes,status=No,resizable=No,fullscreen=No')"/>'+
    '	</mx:HBox>'+
    '	'+*/

    //TODO
        /*'<mx:TextArea width="100%" text="This example shows a ADVANCED Data Grid bound to a .NET implementation. The C# demonsrates the construction of Entity HQL on basis of the Flexicious filter. This grid also demonstrates how to handle the scenario when the user requests a print/export of data currently not loaded. (See onPrintExportDataRequest). It also shows how to use a Custom Pager Control."/>'+*/
    /**
     * Datagrid with filterPageSortMode = server (Only the first page is loaded from the server (see onCreationCompelete.
     The grid then fires filterPageSortChange when the user requests another page or sort or filter.
     This is then handled by the server call and data is bound on server call return. See onFilterPageSortChange
     This grid also demonstrates how to handle the scenario when the user requests a print/export of data currently not loaded.. See onPrintExportDataRequest))
     */

myCompanyNameSpace.advansedServerGrid_onFilterPageSortChange=function (evt){

    //here we build our custom filter object and send it to the server
    dotNetRemoteObject.getEmployees(new flexiciousNmsp.MyFilter(evt.filter));
    //we keep track of the field that triggered the filter, to ensure we set the focus back into it
    if(evt.triggerEvent&&evt.triggerEvent.currentTarget.implementsOrExtends("IDataGridFilterColumn"))
    filterTriggerColumn=evt.triggerEvent.currentTarget.searchField;


};

myCompanyNameSpace.advansedServerGrid_onPrintExportDataRequest=function (evt){

    //here we build our custom filter object and send it to the server
    dotNetRemoteObject.getEmployees(new flexiciousNmsp.MyPrintExportFilter(evt.filter.implementsOrExtends("PrintExportFilter")));

};

myCompanyNameSpace.advancedServerGrid_CreationComplete=function (){

    //for the grid bound to the server,
    //just get the first page of employees
    var filter=new flexiciousNmsp.MyFilter(null);
    filter.pageIndex=0;
    filter.pageSize=dgEmployeesServer.pageSize;

    //this will get the list of all departments
    dotNetRemoteObject.getAllDepartments();
    //just get the first page initially...
    dotNetRemoteObject.getEmployees(filter);
};

myCompanyNameSpace.advancedServerGrid_onEmployeesResult=function (evt){

    if (evt.result.isPrintExportResponse)
    {
        //This response came back as a result of a print request. so set
        // the print export data on the grid and have the print/export
        //mechanism continue on its way
        dgEmployeesServer.printExportData=evt.result.records;

    }
    else
    {
        //the dummy service just sends back the page to display, and the total records.
        //what you send back from your service will need to reflect in the below
        //two lines of code.
        dgEmployeesServer.totalRecords=evt.result.totalRecords;
        dgEmployeesServer.setDataProvider(evt.result.records.implementsOrExtends("Array"));
        _totalRecords=event.result.totalRecords;
        dgEmployeesServer.rebuildFooter();

        //if the filter was a result of user interaction, we set the focus into the field again.
        if(filterTriggerColumn){
            dgEmployeesServer.validateNow();
            dgEmployeesServer.setFilterFocus(filterTriggerColumn);
            filterTriggerColumn="";
        }
    }

};
myCompanyNameSpace.advancedServerGrid_onDepartmentsResult=function (evt){

    _serverDepartments=evt.result.implementsOrExtends("Array");
    //we need to call this to rebuild the filter row on
    //basis of updated data from the server.
    dgEmployeesServer.refreshLayout();

};
myCompanyNameSpace.advancedServerGrid_myStyleFunc=function(data, col){

    if (data["annualSalary"] > 75000)
        return {color:0xFF0000};
    return null;

};
myCompanyNameSpace.SAMPLE_CONFIGS["AdvancedServerGrid"]='<grid showSpinnerOnFilterPageSort="true" enableFilters="true" enableCopy="true" enableFooters="true" '+
    '									enablePreferencePersistence="true" enablePaging="true" id="dgEmployeesServer"' +
    '                                   preferencePersistenceKey="advancedServerGrid" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.advancedServerGrid_CreationComplete"'+
    '									pageSize="20" filterPageSortMode="server" '+
    '									enablePrint="true" enableExport="true"'+
    '									clearSelectionOnDataProviderChange="false"'+
    '									enableSplitHeader="true" enableMultiColumnSort="true"'+
    '									enableEagerDraw="true"'+
    '									initialSortField="firstName"'+
    '									filterPageSortChange="myCompanyNameSpace.advansedServerGrid_onFilterPageSortChange"'+
    '									filterRowHeight="30" '+
    '									printExportDataRequest="myCompanyNameSpace.advansedServerGrid_onPrintExportDataRequest"  selectedKeyField="employeeId">'+
    '		<columns>'+
    '			<column type="checkbox" width="15"/>'+
    '			<column headerText="ID" dataField="employeeId" filterControl="NumericTextInput" filterTriggerEvent="enterKeyUp"/>'+
    '			<columnGroup headerText="Name">'+
    '				<columns>'+
    '					<column headerText="First Name" dataField="firstName" filterOperation="BeginsWith" filterControl="TextInput" filterTriggerEvent="enterKeyUp"/>'+
    '					<column headerText="Last Name" dataField="lastName" filterOperation="BeginsWith" filterControl="TextInput" filterTriggerEvent="enterKeyUp"/>'+
    '				</columns>'+
    '			</columnGroup>'+
    '			<column '+
    '				headerText="Department" dataField="department" filterOperation="Equals" '+
    '				searchField="department.departmentId" sortField="department.departmentName"'+
    '				filterComboBoxDataProvider="{_serverDepartments}"'+
    '				filterComboBoxDataField="departmentId" filterComboBoxLabelField="departmentName"'+
    '				filterControl="MultiSelectComboBox" filterComboBoxWidth="150" />'+
    '			<column headerText="Phone" dataField="phoneNumber" filterOperation="Contains" filterControl="TextInput"/>'+
    '			<column headerText="Active" dataField="isActive" filterOperation="Equals" filterControl="TriStateCheckBox"/>'+
    '			<column headerText="Hire Date" dataField="hireDate" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction" '+
    '													filterDateRangeOptions="{[DateRange.DATE_RANGE_THISQUARTER,DateRange.DATE_RANGE_LASTQUARTER,DateRange.DATE_RANGE_THISYEAR,DateRange.DATE_RANGE_LASTYEAR,DateRange.DATE_RANGE_CUSTOM]}" '+
    '													filterComboBoxWidth="150" footerLabel="Count: {_totalRecords}"/>'+
    '			<column textAlign="right" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"'+
    '													width="100" headerText="Annual Salary" '+
    '													dataField="annualSalary" footerOperation="average" footerLabel="Avg:" filterControl="NumericRangeBox"/>'+
    '		</columns>'+
    '	</grid>';