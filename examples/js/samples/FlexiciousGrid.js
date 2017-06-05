
myCompanyNameSpace.SAMPLE_CONFIGS["FlexiciousGrid"]='<grid id="grid" '+
    '									 dataProvider="{FlexiciousMockGenerator.instance().getFlatOrgList()}"'+
    '									 preferencePersistenceKey="flexiciousGrid">'+
    '		<columns>'+
    '			<column dataField="id" headerText="ID" />'+
    '			<column dataField="legalName" headerText="Legal Name"/>'+
    '			<column dataField="headquarterAddress.line1" headerText="Address Line 1" />'+
    '			<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '			<column dataField="headquarterAddress.city.name" headerText="City" />'+
    '			<column dataField="headquarterAddress.state.name" headerText="State" />'+
    '			<column dataField="headquarterAddress.country.name" headerText="Country"/>'+
    '			<column dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '			<column dataField="numEmployees" headerText="Num Employees" textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '			<column dataField="earningsPerShare" headerText="EPS" textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '			<column dataField="lastStockPrice" headerText="Stock Price" textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '		</columns>'+
    '	</grid>';
