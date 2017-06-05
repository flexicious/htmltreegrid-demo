myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["HierarchicalDataGrid"]="http://www.flexicious.com/resources/Ultimate/docs/HierarchicalDataGrid.htm";

myCompanyNameSpace.SAMPLE_CONFIGS["HierarchicalDataGrid"]='<grid id="grid" enablePrint="true" '+
    '									 enablePreferencePersistence="true" enableDrillDown="true" '+
    '									 enableExport="true" enableCopy="true" enableSelectionCascade="true"'+
    '									 pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"'+
    '									 preferencePersistenceKey="hierarchicalGrid">'+
    '		'+
    '		<columnLevel >'+
    '			<level enableFilters="true" enablePaging="true" '+
    '														pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent" '+
    '														   selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true"  enableCellClickRowSelect="false" columnWidthMode="fitToContent"'+
    '														   selectable="true" dataField="legalName" headerText="Legal Name" enableHierarchicalNestIndent="true"/>'+
    '					<column editable="true" dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent" '+
    '														   textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '					<column editable="true" dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" '+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '					<column editable="true" dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" '+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '					<column editable="true" dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" '+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" enableFooters="true" selectedKeyField="id">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column editable="true" dataField="dealDescription" headerText="Deal Description" '+
    '																   footerLabel="Count:" footerOperation="count" footerAlign="center" enableHierarchicalNestIndent="true"'+
    '																   />'+
    '							<column editable="true" dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '																   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '							<column itemEditor="{new ClassFactory(mx.controls.DateField)}"  '+
    '																   editable="true" editorDataField="selectedDate"  dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="5"'+
    '																		selectedKeyField="id">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column editable="true" dataField="id" headerText="Invoice Number" '+
    '																		   footerLabel="Count:" footerOperation="count" footerAlign="center" enableHierarchicalNestIndent="true"'+
    '																		   />'+
    '									<column editable="true" dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right"  '+
    '																		   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																		   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '									<column editable="true" dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									'+
    '									<column itemEditor="{new ClassFactory(mx.controls.DateField)}"  '+
    '																		   editable="true" editorDataField="selectedDate"  dataField="invoiceDate" headerText="Invoice Date" '+
    '																		   labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column itemEditor="{new ClassFactory(mx.controls.DateField)}"  '+
    '																		   editable="true" editorDataField="selectedDate"  dataField="dueDate" headerText="Due Date" '+
    '																		   labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column editable="true" dataField="lineItemDescription" headerText="Line Item Description" '+
    '																				   footerLabel="Count:" footerOperation="count" footerAlign="center" '+
    '																				   />'+
    '											<column editable="true" dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" '+
    '																				   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																				   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '											'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '		'+
    '	</grid>';
