myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["FullyLazyLoaded"]="http://www.flexicious.com/resources/Ultimate/docs/FullyLazyLoaded.htm";


/**
 *
 * @param cell
 * @return {String}
 */
var _footerData ={};
myCompanyNameSpace.fullyLazyLoaded_getFooterLabel=function (cell){

    if(_footerData[cell.getRowInfo().getData()]){
        if(cell.getColumn().dataField=="invoiceAmount" || cell.getColumn().dataField=="lineItemAmount" ||cell.getColumn().dataField=="dealAmount" )
            return "Total: " + flexiciousNmsp.UIUtils.formatCurrency(_footerData[cell.getRowInfo().getData()].total);
        else
            return "Count: " + _footerData[cell.getRowInfo().getData()].count;
    }
    return "";

};
myCompanyNameSpace.fullyLazyLoaded_grid_printExportDataRequestHandler=function (evt){


  //this means that we requested either all rows or a specific subset of rows....
    flexiciousNmsp.BusinessService.getInstance().getPagedOrganizationList(evt1.filter,
        function(evt,token)
        {
            grid.printExportData=evt.result.collection;
        }
    );
};

myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel1_itemLoadHandler=function (evt1){

    //this means we were requested to load all the details for a specific organization.
    var org=evt1.filter.parentObject;
    org=org.clone();
    flexiciousNmsp.BusinessService.getInstance().getDealsForOrganization(org.id,evt1.filter,
        function(evt,token){
        _footerData[org]=evt.result.summaryData;
        grid.setChildData(evt1.filter.parentObject,evt.result.collection,evt1.filter.level.getParentLevel(),evt.result.totalRecords)
    }
    );

};

myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel3_itemLoadHandler=function (evt1){

    //this means we were requested to load all the line items for a specific invoice.
    var inv=evt1.filter.parentObject;
    flexiciousNmsp.BusinessService.getInstance().getLineItemsForInvoice(inv.id,evt1.filter,
        function(evt,token){
        _footerData[evt1.filter.parentObject]=evt.result.summaryData;
        grid.setChildData(evt1.filter.parentObject,(evt.result.collection.slice()),evt1.filter.level.getParentLevel(),evt.result.totalRecords)

    }
    );

};

myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel1_filterPageSortChangeHandler=function (evt1){

    //this means that we paged, sorted or filtered the list of top level organization.
    flexiciousNmsp.BusinessService.getInstance().getPagedOrganizationList(evt1.filter,
        function(evt,token)
    {
        grid.setPreservePager(true);
        grid.setDataProvider(evt.result.collection);
        grid.setTotalRecords(evt.result.totalRecords);
    }
    );

};
myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel2_filterPageSortChangeHandler=function (evt1){

    //this means that we paged, sorted or filtered the list of deals for an organization.

     var org=evt1.filter.parentObject;
     flexiciousNmsp.BusinessService.getInstance().getDealsForOrganization(org.id,evt1.filter,
        function(evt,token){
        grid.setChildData(evt1.filter.parentObject,evt.result.collection,evt1.filter.level.getParentLevel(),evt.result.totalRecords);
    }
    );

};

myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel3_filterPageSortChangeHandler=function (evt1){

    //this means that we paged, sorted or filtered the list of invoices for a deal.

    var deal=evt1.filter.parentObject;
    flexiciousNmsp.BusinessService.getInstance().getInvoicesForDeal(deal.id,evt1.filter,
        function(evt,token){
        grid.setChildData(evt1.filter.parentObject,new flexiciousNmsp.Array(evt.result.collection.slice()),
            evt1.filter.level.getParentLevel(),evt.result.totalRecords);
    }
    );

};

myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel4_filterPageSortChangeHandler=function (evt1){

    //this means that we paged, sorted or filtered the list of line items for an invoicef.

    var inv=evt1.filter.parentObject;
    flexiciousNmsp.BusinessService.getInstance().getLineItemsForInvoice(inv.id,evt1.filter,
        function(evt,token){
        grid.setChildData(evt1.filter.parentObject,new flexiciousNmsp.Array(evt.result.collection.slice()),evt.filter.getLevel().getParentLevel(),evt.result.totalRecords);
    }
    );

};
myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel2_itemLoadHandler=function (evt1){

    //this means we were requested to load all the invoices for a specific deal.
    var deal=evt1.filter.parentObject;
    flexiciousNmsp.BusinessService.getInstance().getInvoicesForDeal(deal.id,evt1.filter,
        function(evt,token){
        _footerData[evt1.filter.parentObject]=evt.result.summaryData;
        grid.setChildData(evt1.filter.parentObject,(evt.result.collection.slice()),
            evt1.filter.level.getParentLevel() ,evt.result.totalRecords)

    }
    );

};

myCompanyNameSpace.fullyLazyLoaded_CreationComplete=function (evt1){


     var f=new flexiciousNmsp.Filter();
     f.pageIndex=0;
     f.pageSize=grid.getPageSize();
      flexiciousNmsp.BusinessService.getInstance().getPagedOrganizationList(f,
         function(evt)
         {
             grid.setPreservePager(true);
             grid.setDataProvider(evt.result.collection);
             grid.setTotalRecords(evt.result.totalRecords);
         }
     );

};
myCompanyNameSpace.SAMPLE_CONFIGS["FullyLazyLoaded"]='<grid id="grid"  enablePrint="true" '+
    '									 enablePreferencePersistence="true" enableExport="true" enableCopy="true"'+
    '									 preferencePersistenceKey="fullyLazyLoaded" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.fullyLazyLoaded_CreationComplete"'+
    '									 printExportDataRequest="myCompanyNameSpace.fullyLazyLoaded_grid_printExportDataRequestHandler"'+
    '									 showSpinnerOnFilterPageSort="true" enableSelectionCascade="true"'+
    '									 enableSelectionBubble="true" enableSelectionExclusion="true"'+
    '									 enableTriStateCheckbox="true" enableEagerDraw="true" >'+
    '			<level enableFilters="true" enablePaging="true" pageSize="10" childrenField="deals" enableFooters="true" selectedKeyField="id" itemLoadMode="server" itemLoad="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel1_itemLoadHandler" ' +
    '           filterPageSortChange="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel1_filterPageSortChangeHandler" filterPageSortMode="server">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent"  selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true" enableCellClickRowSelect="false"  selectable="true" dataField="legalName" headerText="Legal Name" width="150" columnWidthMode="fixed"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" columnWidthModeFitToContentExcludeHeader="true" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level  childrenField="invoices" enableFooters="true" selectedKeyField="id" itemLoadMode="server" itemLoad="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel2_itemLoadHandler" enablePaging="true" pageSize="3" filterPageSortMode="server" filterPageSortChange="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel2_filterPageSortChangeHandler">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column editable="true" dataField="dealDescription" headerText="Deal Description" footerAlign="center" footerLabelFunction2="myCompanyNameSpace.fullyLazyLoaded_getFooterLabel" />'+
    '							<column editable="true" dataField="dealAmount" headerText="Deal Amount" textAlign="right" footerAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" footerLabelFunction2="myCompanyNameSpace.fullyLazyLoaded_getFooterLabel"/>'+
    '							<column itemEditor="flexiciousNmsp.DatePicker" editable="true" editorDataField="selectedDate"  dataField="dealDate" headerText="Deal Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level  childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="3" selectedKeyField="id" itemLoadMode="server" itemLoad="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel3_itemLoadHandler" filterPageSortMode="server" filterPageSortChange="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel3_filterPageSortChangeHandler">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column editable="true" dataField="id" headerText="Invoice Number" footerLabelFunction2="myCompanyNameSpace.fullyLazyLoaded_getFooterLabel" footerAlign="center" />'+
    '									<column editable="true" dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" footerAlign="right" footerLabelFunction2="myCompanyNameSpace.fullyLazyLoaded_getFooterLabel" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column editable="true" dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column itemEditor="flexiciousNmsp.DatePicker"  editable="true" editorDataField="selectedDate"  dataField="invoiceDate" headerText="Invoice Date"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column itemEditor="flexiciousNmsp.DatePicker"   editable="true" editorDataField="selectedDate" dataField="dueDate" headerText="Due Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level  enableFooters="true" selectedKeyField="id" enablePaging="true" pageSize="3" filterPageSortMode="server" filterPageSortChange="myCompanyNameSpace.fullyLazyLoaded_flexdatagridcolumnlevel4_filterPageSortChangeHandler">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column editable="true" dataField="lineItemDescription" headerText="Line Item Description" footerLabelFunction2="myCompanyNameSpace.fullyLazyLoaded_getFooterLabel" footerAlign="center"/>'+
    '											<column editable="true" dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" footerLabelFunction2="myCompanyNameSpace.fullyLazyLoaded_getFooterLabel" footerAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
'								</nextLevel>'+
'							</level>'+
'						</nextLevel>'+
'					</level>'+
'				</nextLevel>'+
'			</level>'+
'	</grid>';
