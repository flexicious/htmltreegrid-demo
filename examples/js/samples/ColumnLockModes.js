myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ColumnLockModes"]="http://www.flexicious.com/resources/Ultimate/docs/ColumnLockModes.htm";

myCompanyNameSpace.SAMPLE_CONFIGS["ColumnLockModes"]='<grid id="grid"  enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" horizontalScrollPolicy="auto" preferencePersistenceKey="columnLockModes"'+
    '									 useCompactPreferences="true"'+
    '									 enableMultiColumnSort="true" >'+
    '			<level selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true" enableFooters="true">'+
    '				<columns>'+
    '					'+
    '					<column dataField="orgIndex" headerText="orgIndex" '+
    '														   />'+
    '					<column id="colId" dataField="id" headerText="ID" filterControl="TextInput" columnLockMode="left"/>'+
    '					<column id="colLegalName" dataField="legalName" headerText="Legal Name" columnLockMode="left"/>'+
    '						<columnGroup headerText="Address">'+
    '							<columnGroups>'+
    '								<columnGroup headerText="Lines" >'+
    '									<columns>'+
    '										<column id="colLine1" dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '										<column id="colLine2" dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '									</columns>'+
    '								</columnGroup>'+
    '								<columnGroup headerText="Region">'+
    '									<columns>'+
    '										<column id="colCity" dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '										<column id="colState" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '										<column id="colCountry" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '									</columns>'+
    '								</columnGroup>'+
    '							</columnGroups>'+
    '						</columnGroup>'+
    '						<columnGroup  headerText="Financials" >'+
    '							<columns>'+
    '								<column id="colAnnRev" dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" width="50" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" columnLockMode="right"/>'+
    '								<column id="colNumEmp" dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"  columnLockMode="right" width="50" />'+
    '								<column id="colEPS"  dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" columnLockMode="right" width="50" />'+
    '								<column id="colStockPrice" dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" columnLockMode="right" width="50"  />'+
    '							</columns>'+
    '						</columnGroup>'+
    '					</columns>'+
    '				</level>'+
    '	</grid>';