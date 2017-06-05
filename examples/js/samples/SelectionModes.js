myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["SelectionModes"]="http://www.flexicious.com/resources/Ultimate/docs/SelectionModes.htm";


myCompanyNameSpace.SAMPLE_CONFIGS["SelectionModes"]='<grid  id="grid"'+
    '										 enableFooters="true" selectedKeyField="id"'+
    '										 preferencePersistenceKey="selectionModes">'+
    '               <level >'+
    '					<columns>'+
    '						<column type="checkbox" id="cbCol" />'+
    '						<column dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '						<column dataField="legalName" headerText="Legal Name"/>'+
    '						<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '						<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '						<column dataField="headquarterAddress.city.name" headerText="City" />'+
    '						<column dataField="headquarterAddress.state.name" headerText="State" />'+
    '						<column dataField="headquarterAddress.country.name" headerText="Country" />'+
    '						<column dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average"   footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '						<column dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '						<column dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average"  footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '						<column dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					</columns>'+
    '				</level>'+
    '	</grid>';