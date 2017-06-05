myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["Simple"]="http://www.flexicious.com/resources/Ultimate/docs/SimpleGrid.htm";

myCompanyNameSpace.SAMPLE_CONFIGS["Simple"]='	<grid id="grid" enablePrint="true" enablePreferencePersistence="true" enableDrag="true"  enableDrop="true" '+
    '									 enableExport="true" enableCopy="true" preferencePersistenceKey="simpleGrid"'+
    '									 enableMultiColumnSort="true" useCompactPreferences="true"'+
    '									 horizontalScrollPolicy="auto" footerDrawTopBorder="true"'+
    '									 enablePdf="true" headerRowHeight="100">'+
    '		'+
    '			<level selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true" '+
    '													enableFooters="true"  initialSortField="legalName" initialSortAscending="true">'+
    '				'+
    '				<columns>'+
    '					<column id="colId" dataField="id" headerText="ID" filterControl="TextInput" filterWaterMark="Search"'+
    '														   columnLockMode="left" filterIcon="'+ myCompanyNameSpace.IMAGE_PATH +'/search_clear.png"'+
    '														   enableFilterAutoComplete="true" clearFilterOnIconClick="true"/>'+
    '					<column id="colLegalName" dataField="legalName" sortCaseInsensitive="true" '+
    '														   headerText="Legal Name of the Organization" '+
    '														   headerWordWrap="true" truncateToFit="true" columnLockMode="left"/>'+
    '									<column id="colLine1" dataField="headquarterAddress.line1" headerText="Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '									<column id="colLine2" dataField="headquarterAddress.line2" headerText="Line 2"/>'+
    '									<column id="colCity" dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxWidth="150" filterComboBoxBuildFromGrid="true"/>'+
    '									<column id="colState" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxWidth="150" filterComboBoxBuildFromGrid="true"/>'+
    '									<column id="colCountry" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxWidth="150" filterComboBoxBuildFromGrid="true"/>'+
    '							<column headerAlign="right" id="colAnnRev" dataField="annualRevenue" headerText="Annual Revenue" '+
    '																   headerWordWrap="true" textAlign="right"  footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" '+
    '																   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"'+
    '																   filterControl="NumericRangeBox" sortNumeric="true" footerFormatter="new flexiciousNmsp.CurrencyFormatter"/>'+
    '							<column headerAlign="right" id="colNumEmp" headerWordWrap="true" sortNumeric="true" dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column headerAlign="right" id="colEPS"  headerWordWrap="true" sortNumeric="true" dataField="earningsPerShare" headerText="EPS" ' +
    '                                           textAlign="right" footerLabel="Avg:" footerOperation="average"  ' +
    '                                           footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column headerAlign="right" id="colStockPrice" headerWordWrap="true" sortNumeric="true" dataField="lastStockPrice" headerText="Stock Price" '+
    '											footerFormatter="flexiciousNmsp.CurrencyFormatter"  textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
'							<column excludeFromSettings="true" excludeFromPrint="true" excludeFromExport="true"/>'+
    '				</columns>'+
    '			</level>'+
    '		'+
    '	</grid>';
