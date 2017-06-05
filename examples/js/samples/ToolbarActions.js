myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ToolbarActions"]="http://www.flexicious.com/resources/Ultimate/docs/ToolbarActions.htm";

myCompanyNameSpace.isValidToolbarAction=function(action,currentTarget,extendedPager){
    return extendedPager.level.getSelectedKeys().length==1;
};
myCompanyNameSpace.onExecuteToolbarAction=function(action,currentTarget,extendedPager){
    if(action.code=="Edit")
        alert("Launch Edit Window: " + extendedPager.level.levelName + " with id " + extendedPager.level.getSelectedKeys()[0] )
    else if(action.code=="Delete"){
        if(confirm("Are you sure you wish to delete this record?")){
            alert("Trigger delete for: " + extendedPager.level.levelName + " with id " + extendedPager.level.getSelectedKeys()[0] )
        }
    }
    else
        alert("Invalid action!")
};
myCompanyNameSpace.ToolbarActions_onCreationComplete=function(evt){
    this.toolbarActions.push(new flexiciousNmsp.ToolbarAction("Edit",-1,"","Edit Record", flexiciousNmsp.Constants.IMAGE_PATH + "/edit.png",true,false,true,true));
    this.toolbarActions.push(new flexiciousNmsp.ToolbarAction("Delete",-1,"","Delete Record",flexiciousNmsp.Constants.IMAGE_PATH + "/delete.png",false,true,true,true));
    if(this.getPager())
    this.getPager().rebuild();
};
myCompanyNameSpace.SAMPLE_CONFIGS["ToolbarActions"]='	<grid id="grid"  enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" enableToolbarActions="true" '+
    '									 toolbarActionExecutedFunction="myCompanyNameSpace.onExecuteToolbarAction"'+
    '									 toolbarActionValidFunction="myCompanyNameSpace.isValidToolbarAction"'+
    '									 preferencePersistenceKey="toolbarActions" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.ToolbarActions_onCreationComplete">'+
    '			<level selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true"'+
    '														enableFooters="true"  initialSortField="legalName" initialSortAscending="true"'+
    '														>'+
    '				<columns>'+
    '					<column dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column dataField="legalName" headerText="Legal Name"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '			</level>'+
    '		'+
    '	</grid>';



