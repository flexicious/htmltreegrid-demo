myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["DragDropGrid"]="http://www.flexicious.com/resources/Ultimate/docs/DragDropGrid.htm";

myCompanyNameSpace.SAMPLE_CONFIGS["DragDropGrid"]='<grid dragAvailableFunction="isDraggable"  '+
    '									 dropAcceptRejectFunction="isDroppable" '+
    '									 dragDropCompleteFunction="onDragComplete"'+
    '		                             id="grid" enablePrint="true"'+
    '									 enablePreferencePersistence="true" enableDrillDown="true" '+
    '									 enableExport="true" enableCopy="true"'+
    '									 pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"'+
    '									 preferencePersistenceKey="dragdropGrid" '+
    '									 enableDrag="true"'+
    '									 enableDrop="true">'+
    '			<level enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column sortable="false" enableCellClickRowSelect="false" columnWidthMode="fitToContent" selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column sortable="false" truncateToFit="true" enableCellClickRowSelect="false" selectable="true" dataField="legalName" headerText="Legal Name" width="150" columnWidthMode="fixed"/>'+
    '					<column sortable="false" dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column sortable="false" dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column sortable="false" dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column sortable="false" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column sortable="false" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column sortable="false" dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent"  textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" columnWidthModeFitToContentExcludeHeader="true" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column sortable="false" dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column sortable="false" dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column sortable="false" dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" enableFooters="true" selectedKeyField="id">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column sortable="false" dataField="dealDescription" headerText="Deal Description" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '							<column sortable="false" dataField="dealAmount" headerText="Deal Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="3" selectedKeyField="id">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column sortable="false" dataField="id" headerText="Invoice Number" footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '									<column sortable="false" dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column sortable="false" dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column sortable="false" dataField="invoiceDate" headerText="Invoice Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column sortable="false" dataField="dueDate" headerText="Due Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column sortable="false" dataField="lineItemDescription" headerText="Line Item Description" footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '											<column sortable="false" dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';