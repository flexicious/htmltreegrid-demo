myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["NestedToolbarActions"]="http://www.flexicious.com/resources/Ultimate/docs/NestedToolbarActions.htm";

myCompanyNameSpace.isValidToolbar_Action=function(action,currentTarget,extendedPager){
    return extendedPager.level.getSelectedKeys().length==1;
};

myCompanyNameSpace.onExecuteToolbar_Action=function(action,currentTarget,extendedPager){
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

myCompanyNameSpace.onCreation_Complete=function(evt){
    this.toolbarActions.push(new flexiciousNmsp.ToolbarAction("Edit",-1,"","Edit Record", flexiciousNmsp.Constants.IMAGE_PATH + "/edit.png",true,false,true,true));
    this.toolbarActions.push(new flexiciousNmsp.ToolbarAction("Delete",-1,"","Delete Record",flexiciousNmsp.Constants.IMAGE_PATH + "/delete.png",false,true,true,true));
    if(this.getPager())
    this.getPager().rebuild();
};

myCompanyNameSpace.SAMPLE_CONFIGS["NestedToolbarActions"]='<grid id="grid" enablePrint="true" '+
    '									 enablePreferencePersistence="true" enableDrillDown="true" '+
    '									 enableExport="true" enableCopy="true" enableToolbarActions="true" '+
    '									 toolbarActionExecutedFunction="myCompanyNameSpace.onExecuteToolbar_Action"'+
    '									 toolbarActionValidFunction="myCompanyNameSpace.isValidToolbar_Action"'+
   // '									 pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"'+
    '									 preferencePersistenceKey="nestedToolbarActions" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.onCreation_Complete">'+
    '			<level levelName="levelOrganizations" enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent" selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true"  enableCellClickRowSelect="false" columnWidthMode="fitToContent" selectable="true" dataField="legalName" headerText="Legal Name"/>'+
    '					<column  dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" />'+
    '					<column  dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" />'+
    '					<column  dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column  dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" />'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level levelName="levelDeals" childrenField="invoices" enableFooters="true" selectedKeyField="id" forcePagerRow="true">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column  dataField="dealDescription" headerText="Deal Description" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '							<column  dataField="dealAmount" headerText="Deal Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column  editorDataField="selectedDate"  dataField="dealDate" headerText="Deal Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level levelName="levelInvoices" childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="5" selectedKeyField="id"   pagerHorizontalGridLines="false">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column  dataField="id" headerText="Invoice Number" footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '									<column  dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column  dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column  editorDataField="selectedDate"  dataField="invoiceDate" headerText="Invoice Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column  editorDataField="selectedDate"  dataField="dueDate" headerText="Due Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level levelName="levelLineItems" enableFooters="true" selectedKeyField="id" forcePagerRow="true">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column  dataField="lineItemDescription" headerText="Line Item Description" footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '											<column  dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';
