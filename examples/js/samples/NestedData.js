myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["NestedData"]="http://www.flexicious.com/resources/Ultimate/docs/NestedData.htm";

myCompanyNameSpace.SAMPLE_CONFIGS["NestedData"]='<grid id="grid" enablePrint="true" enableMultiColumnSort="true"'+
    '					   enablePreferencePersistence="true" enableDrillDown="true" '+
    '					   enableExport="true" enableCopy="true" enableSelectionCascade="true" enableSelectionBubble="true" enableTriStateCheckbox="true"'+
    '					   pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"'+
    '					   preferencePersistenceKey="nesteddata" '+
    '					   itemDoubleClick="grid_itemDoubleClickHandler(event)" '+
    '					   doubleClickEnabled="true"'+
    '					   horizontalScrollPolicy="auto" footerDrawTopBorder="true" >'+
    '		'+
    '		<columnLevel >'+
    '			<level enableFilters="true" enablePaging="true" initialSortField="legalName"'+
    '										  pageSize="20" childrenField="deals"  enableFooters="true" selectedKeyField="id"'+
    '										  >'+
    '				'+
    '				<columns>'+
    '					<column type="checkbox" />'+
    '					<column'+
    '						id="colId" dataField="id" headerText="ID" filterControl="TextInput" filterRenderer="{UIUtils.createRenderer(TextInput,{delayDuration:1500})}"/>'+
    '					<column id="colLegalName" enableCellClickRowSelect="false"'+
    '											 dataField="legalName" headerText="Legal Name"/>'+
    '					<columnGroup headerText="Address">'+
    '						<columnGroups>'+
    '							<columnGroup headerText="Lines" >'+
    '								<columns>'+
    '									<column enableCellClickRowSelect="false" id="colLine1" dataField="headquarterAddress.line1" headerText="Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '									<column enableCellClickRowSelect="false" id="colLine2" dataField="headquarterAddress.line2" headerText="Line 2"/>'+
    '								</columns>'+
    '							</columnGroup>'+
    '							<columnGroup headerText="Region">'+
    '								<columns>'+
    '									<column id="colCity" dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '									<column id="colState" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '									<column id="colCountry" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '								</columns>'+
    '							</columnGroup>'+
    '						</columnGroups>'+
    '					</columnGroup>'+
    '					<columnGroup  headerText="Financials" >'+
    '						<columns>'+
    '							<column id="colAnnRev" dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '							<column id="colNumEmp" dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '							<column id="colEPS"  dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '							<column id="colStockPrice" dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" enableFooters="true" selectedKeyField="id" nestIndent="30"'+
    '												  initialSortField="dealDate" initialSortAscending="false" parentField="customer">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column dataField="dealDescription" headerText="Deal Description"   '+
    '													 footerLabel="Count:" footerOperation="count" footerAlign="center"'+
    '													 />'+
    '							<column dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '													 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '													 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '													 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '							<column dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column excludeFromSettings="true" excludeFromPrint="true" excludeFromExport="true" paddingLeft="0" paddingLeft="0" width="1" minWidth="1" />'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="3"'+
    '														  selectedKeyField="id" parentField="deal" nestIndent="30">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column dataField="id" headerText="Invoice Number" '+
    '															 footerLabel="Count:" footerOperation="count" footerAlign="center" '+
    '															 />'+
    '									<column dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" '+
    '															 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '															 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '															 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '									<column dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									'+
    '									<column dataField="invoiceDate" headerText="Invoice Date" '+
    '															 labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column dataField="dueDate" headerText="Due Date" '+
    '															 labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id" parentField="invoice" nestIndent="30">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column dataField="lineItemDescription" headerText="Line Item Description" '+
    '																	 footerLabel="Count:" footerOperation="count" footerAlign="center" '+
    '																	 />'+
    '											<column dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" '+
    '																	 footerLabel="Total:" footerOperation="sum" footerAlign="right" '+
    '																	 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '																	 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '											'+
    '									<column excludeFromSettings="true" excludeFromPrint="true" excludeFromExport="true" paddingLeft="0" paddingLeft="0" width="1" minWidth="1" />'+
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
