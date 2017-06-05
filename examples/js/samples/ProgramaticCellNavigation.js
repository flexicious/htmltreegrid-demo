myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ProgramaticCellNavigation"]="http://www.flexicious.com/resources/Ultimate/docs/ProgramaticCellNavigation.htm";


myCompanyNameSpace.SAMPLE_CONFIGS["ProgramaticCellNavigation"]='<grid id="grid" width="800" height="600" enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true"'+
    '									 dataProvider="{myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList()}"'+
    '									 preferencePersistenceKey="programmaticCellNavigation">'+
    '			<level selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true" enableFooters="true">'+
    '				<columns>'+
    '					<column dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column dataField="legalName" headerText="Legal Name"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" ' +
    '                                      footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" ' +
    '                                      filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" ' +
    '                                      filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" ' +
    '                                       filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" ' +
    '                                       footerLabel="Avg:" footerOperation="average" footerAlign="center" ' +
    '                                       footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                       labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" ' +
    '                                       footerOperation="average" footerOperationPrecision="2" ' +
    '                                       footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                       labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" ' +
    '                                       footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                       labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" ' +
    '                                       footerOperation="average" footerOperationPrecision="2" ' +
    '                                       footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                       labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '			</level>'+
    '	</grid>';
