


myCompanyNameSpace.SAMPLE_CONFIGS["LegacyGrid"]='<grids:ExtendedDataGrid id="grid"  enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" preferencePersistenceKey="simpleGrid"'+
    '									 dataProvider="{FlexiciousMockGenerator.instance().getFlatOrgList()}"'+
    '									 selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true"'+
    '														enableFooters="true"  initialSortField="legalName" initialSortAscending="true"'+
    '														>'+
    '			<grids:columns>'+
    '				<columns:ExtendedDataGridColumn dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '				<columns:ExtendedDataGridColumn dataField="legalName" headerText="Legal Name"/>'+
    '				<columns:ExtendedDataGridColumn dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '				<columns:ExtendedDataGridColumn dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '				<columns:ExtendedDataGridColumn dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '				<columns:ExtendedDataGridColumn dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '				<columns:ExtendedDataGridColumn dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '				<columns:ExtendedDataGridColumn dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '				<columns:ExtendedDataGridColumn dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '				<columns:ExtendedDataGridColumn dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '				<columns:ExtendedDataGridColumn dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '			</grids:columns>'+
    '	</grids:ExtendedDataGrid>';
