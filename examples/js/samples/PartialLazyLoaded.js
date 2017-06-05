myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["PartialLazyLoaded"]="http://www.flexicious.com/resources/Ultimate/docs/PartialLazyLoaded.htm";

myCompanyNameSpace.partialLazyLoaded_flexdatagridcolumnlevel1_itemLoadHandler=function (evt1){

    //this means we were requested to load all the details for a specific organization.
    var org=evt1.filter.parentObject;
   flexiciousNmsp.BusinessService.getInstance().getDeepOrg(org.id,
        function(evt,token){
        grid.setChildData(evt1.filter.parentObject,evt.result.deals,evt1.filter.level.getParentLevel());
        }
    );

};

myCompanyNameSpace.partialLazyLoaded_CreationComplete=function (evt){
    flexiciousNmsp.BusinessService.getInstance().getFlatOrgList(function(evt,token){
        grid.setPreservePager(true);
        grid.setDataProvider(evt.result)
    })

};


myCompanyNameSpace.SAMPLE_CONFIGS["PartialLazyLoaded"]='<grid id="grid"  enablePrint="true" '+
    '									 enablePreferencePersistence="true" enableExport="true" enableCopy="true" showSpinnerOnFilterPageSort="true"'+
    '									 preferencePersistenceKey="partialLazyLoaded" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.partialLazyLoaded_CreationComplete" enableEagerDraw="true">'+
    '			<level enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id"'+
    '														itemLoadMode="server" itemLoad="myCompanyNameSpace.partialLazyLoaded_flexdatagridcolumnlevel1_itemLoadHandler">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent" '+
    '														   selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true" enableCellClickRowSelect="false" '+
    '														   selectable="true" dataField="legalName" headerText="Legal Name" width="150" columnWidthMode="fixed"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent" '+
    '														   textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" '+
    '														   footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" '+
    '														   footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level  childrenField="invoices" enableFooters="true" selectedKeyField="id">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column editable="true" dataField="dealDescription" headerText="Deal Description" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '							<column editable="true" dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '																   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column editable="true" editorDataField="selectedDate"  dataField="dealDate" headerText="Deal Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="5" selectedKeyField="id" >'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column editable="true" dataField="id" headerText="Invoice Number" '+
    '																		   footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '									<column editable="true" dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" '+
    '																		   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																		   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column editable="true" dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column   '+
    '																		   editable="true" editorDataField="selectedDate"  dataField="invoiceDate" headerText="Invoice Date" '+
    '																		   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column  editable="true" editorDataField="selectedDate"  dataField="dueDate"' +
    '                                                                          headerText="Due Date"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column editable="true" dataField="lineItemDescription" headerText="Line Item Description" '+
    '																				   footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '											<column editable="true" dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" '+
    '																				   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																				   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';

