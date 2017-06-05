myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["CustomReportExample"]="http://www.flexicious.com/resources/Ultimate/docs/CustomReportExample.htm";


myCompanyNameSpace.onCreationComplete=function(evt){
    if(this.getPager())
        this.getPager().rebuild();
};

myCompanyNameSpace.SAMPLE_CONFIGS["CustomReportExample"]='<grid id="grid"   enablePrint="true" enablePreferencePersistence="true" enableDrillDown="true" enableExport="true" enableCopy="true" dataProvider="{cbxNav.selectedItem.deals}" pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"' +
    '                                     preferencePersistenceKey="customreportExample" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.onCreationComplete" forcePagerRow="true">'+
    '			<level enablePaging="true" pageSize="3"  childrenField="invoices" enableFooters="true" selectedKeyField="id" initialSortField="dealDate" initialSortAscending="false" pagerRenderer="com.flexicious.example.view.support.customprint.MyCustomPager">'+
    '				<columns>'+
    '					<column type="checkbox" />'+
    '					<column dataField="dealDescription" headerText="Deal Description" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '					<column dataField="dealAmount" headerText="Deal Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="3" selectedKeyField="id">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column dataField="id" headerText="Invoice Number" footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '							<column dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '							<column dataField="invoiceDate" headerText="Invoice Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '							<column dataField="dueDate" headerText="Due Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level enableFooters="true" selectedKeyField="id">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column dataField="lineItemDescription" headerText="Line Item Description" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '									<column dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '								</columns>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';