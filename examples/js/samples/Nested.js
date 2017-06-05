myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["Nested"]="http://www.flexicious.com/resources/Ultimate/docs/Nested.htm";

myCompanyNameSpace.nested_grid_itemDoubleClickHandler=function(evt){

}

myCompanyNameSpace.SAMPLE_CONFIGS["Nested"]='<grid id="grid" enablePrint="true" enableMultiColumnSort="true"'+
    '					   enablePreferencePersistence="true" enableDrillDown="true" '+
    '					   enableExport="true" enableCopy="true" enableSelectionCascade="true" enableSelectionBubble="true" enableTriStateCheckbox="true"'+
    '					   preferencePersistenceKey="nesteddata" '+
    '					   itemDoubleClick="myCompanyNameSpace.nested_grid_itemDoubleClickHandler" '+
    '					   doubleClickEnabled="true"'+
    '					   horizontalScrollPolicy="auto"  >'+
    '		'+
    '			<level enableFilters="true" enablePaging="true" initialSortField="legalName"'+
    '										  pageSize="20" childrenField="deals"  enableFooters="true" selectedKeyField="id"'+
    '										  >'+
    '				'+
    '				<columns>'+
    '					<column editable="true"  itemEditorApplyOnValueCommit="true" '+
    '						id="date" itemEditor="flexiciousNmsp.DatePicker" dataField="addedDate" headerText="Date Added" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"' +
    '   filterDateRangeOptions="[flexiciousNmsp.DateRange.DATE_RANGE_THISQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_LASTQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_THISYEAR,flexiciousNmsp.DateRange.DATE_RANGE_LASTYEAR,flexiciousNmsp.DateRange.DATE_RANGE_CUSTOM]" />' +
    '					<column type="checkbox" />'+
    '					<column editable="true" '+
    '						id="colId" dataField="id" headerText="ID" filterControl="TextInput"/>' +
    '					<column id="colLegalName" enableExpandCollapseIcon="true" editable="true" enableCellClickRowSelect="false" truncateToFit="true" useUnderLine="true" useHandCursor="true" '+
    '								filterControl="TextInput"	headerWordWrap="true" filterWaterMark="Search" paddingLeft="18" filterIcon="'+ myCompanyNameSpace.IMAGE_PATH +'/search_clear.png" clearFilterOnIconClick="true" showClearIconWhenHasText="true" dataField="legalName" headerText="Legal Name of the Organization"/>'+
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
    '									<column id="colCity" dataField="headquarterAddress.city.name" headerText="City"  filterControl="ComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '									<column id="colState" editable="true" itemEditor="flexiciousNmsp.ComboBox" ' +
    '    itemEditorApplyOnValueCommit="true" useFilterDataProviderForItemEditor="true" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '									<column id="colCountry" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '								</columns>'+
    '							</columnGroup>'+
    '						</columnGroups>'+
    '					</columnGroup>'+
    '					<columnGroup  headerText="Financials" >'+
    '						<columns>'+
    '							<column id="colAnnRev" editable="true"  dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colNumEmp" editable="true"  dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colEPS"  editable="true" dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colStockPrice" editable="true" dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colDelete" excludeFromPrint="true"  columnWidthMode="fixed" width="25" headerText=" " iconLeft="6" iconTop="4" enableIcon="true" headerIcon="'+ myCompanyNameSpace.IMAGE_PATH +'/search_clear.png"  icon="'+ myCompanyNameSpace.IMAGE_PATH +'/search_clear.png" sortable="false"/>'+
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
    '													 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="dealDate" headerText="Deal Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '							<column headerText="" excludeFromSettings="true" excludeFromPrint="true" excludeFromExport="true" paddingLeft="0" paddingRight="0" width="1" minWidth="1" />'+
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
    '															 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									'+
    '									<column dataField="invoiceDate" headerText="Invoice Date" '+
    '															 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column dataField="dueDate" headerText="Due Date" '+
    '															 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '							<column headerText="" excludeFromSettings="true" excludeFromPrint="true" excludeFromExport="true" paddingLeft="0" paddingRight="0" width="1" minWidth="1" />'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id" parentField="invoice" nestIndent="30">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column dataField="lineItemDescription" headerText="Line Item Description" '+
    '																	 footerLabel="Count:" footerOperation="count" footerAlign="center" '+
    '																	 />'+
    '											<column dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '											'+
    '							                <column headerText="" excludeFromSettings="true" excludeFromPrint="true" excludeFromExport="true" paddingLeft="0" paddingRight="0" width="1" minWidth="1" />'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
'	</grid>';