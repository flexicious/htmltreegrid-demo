myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["NestedUI"]="http://www.flexicious.com/resources/Ultimate/docs/NestedUI.htm";

myCompanyNameSpace.nestedUI_CreationComplete=function (evt){

    flexiciousNmsp.BusinessService.getInstance().getDeepOrgList(function(evt,token){grid.setDataProvider(evt.result)});

};
myCompanyNameSpace.nestedUI_griditemDoubleClickHandler=function (evt){

    //Alert.show(event.cell.rowInfo.data.legalName);

};

myCompanyNameSpace.nestedUI_gridCellRenderedHandler=function (evt){

    if(evt.cell.getColumn() && evt.cell.getColumn().enableExpandCollapseIcon){
        //we want to position this seperately.
        var fdg=evt.cell.implementsOrExtends("FlexDataGridCell")?evt.cell:null;
        if(fdg.expandCollapseIcon)
            fdg.expandCollapseIcon.setX(((evt.cell.level.getNestDepth()-1) * 15)+5);
        if(fdg.colIcon)
            fdg.colIcon.setX(((evt.cell.getLevel(nestDepth-1)) * 15)+25);

    }


};
myCompanyNameSpace.SAMPLE_CONFIGS["NestedUI"]='<grid id="grid"   enablePrint="true"'+
    '					   enablePreferencePersistence="true" enableDrillDown="true" '+
    '					   enableExport="true" enableCopy="true" enableSelectionCascade="true" enableSelectionBubble="true" enableTriStateCheckbox="true"'+
    '					   preferencePersistenceKey="nestedUI" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.nestedUI_CreationComplete"'+
    '					   itemDoubleClick="myCompanyNameSpace.nestedUI_griditemDoubleClickHandler" cellRendered="myCompanyNameSpace.nestedUI_gridCellRenderedHandler"'+
    '					   doubleClickEnabled="true"'+
    '					   horizontalScrollPolicy="auto" enableDefaultDisclosureIcon="false">'+
    '		<columnLevel >'+
    '			<level enableFilters="true" enablePaging="true" initialSortField="legalName"'+
    '				    pageSize="20" childrenField="deals"  enableFooters="true" selectedKeyField="id" >'+
    '				<columns>'+
    '					<column type="checkbox" />'+
    '					<column enableExpandCollapseIcon="true" excludeFromSettings="true" columnWidthMode="fixed" width="40" paddingTop="5" '+
    '											 icon="/assets/images/info.gif" enableIcon="true"/>'+
    '					<column  id="colId" dataField="id" headerText="ID" filterControl="TextInput" />'+
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
    '							<column id="colAnnRev" dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colNumEmp" dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colEPS"  dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column id="colStockPrice" dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" enableFooters="true" selectedKeyField="id" nestIndent="30"'+
    '												  initialSortField="dealDate" initialSortAscending="false" parentField="customer">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column  paddingLeft="20" enableExpandCollapseIcon="true" excludeFromSettings="true" columnWidthMode="fixed" width="60" '+
    '													  paddingTop="5" icon="/assets/images/info.gif" enableIcon="true"/>'+
    '							<column dataField="dealDescription" headerText="Deal Description"   '+
    '													 footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '							<column dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '													 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '													 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '													 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '							'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="3"'+
    '														  selectedKeyField="id" parentField="deal" nestIndent="30">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column  paddingLeft="40" enableExpandCollapseIcon="true" excludeFromSettings="true" columnWidthMode="fixed" '+
    '															  width="80" paddingTop="5" icon="/assets/images/info.gif" enableIcon="true"/>'+
    '									<column dataField="id" headerText="Invoice Number" '+
    '															 footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '									<column dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" '+
    '															 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '															 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '															 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									'+
    '									<column dataField="invoiceDate" headerText="Invoice Date" '+
    '															 labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column dataField="dueDate" headerText="Due Date" '+
    '															 labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id" parentField="invoice" nestIndent="30">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column width="100" paddingTop="5" id="paddingCol"/>'+
    '											'+
    '											<column dataField="lineItemDescription" headerText="Line Item Description" '+
    '																	 footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '											<column dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" '+
    '																	 footerLabel="Total:" footerOperation="sum" footerAlign="right" '+
    '																	 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '																	 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '       </columnLevel>'+
    '	</grid>';