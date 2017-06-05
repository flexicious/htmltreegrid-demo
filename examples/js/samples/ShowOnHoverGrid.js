myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ShowOnHoverGrid"]="http://www.flexicious.com/resources/Ultimate/docs/ShowOnHoverGrid.htm";

myCompanyNameSpace.grid_itemRollOutHandler=function (evt){

    this.grid.hideTooltip();

};

myCompanyNameSpace.grid_itemRollOverHandler=function (evt){

    if(evt.cell.implementsOrExtends("IFlexDataGridDataCell"))//only if we hover over a data cell, not a header or filter or pager cell
    {
        var mouseevt = evt.triggerEvent.implementsOrExtends("MouseEvent")?evt.triggerEvent:null;
        if(rbnMousePosition.selected){
            var point=
                new Point(mouseEvent?mouseEvent.stageX:0,mouseEvent?mouseEvent.stageY:0);
            this.grid.showTooltip(event.cell.implementsOrExtends("UIComponent"),new ActionMenu(),event.cell.rowInfo.data,point,0,0,cbShouldAutoAdjust.selected);
        }
        else{
            //by default, the show tooltip will place the tip to the bottom left of the object you are asking it
            //to place the tooltip relative to. The left and top offset are provided so you can fine tune the
            //placement of the popup. The last parameter tells the grid not to do any math to prevent the
            //tooltip from going off the view area of the container.
            this.grid.showTooltip(event.cell.implementsOrExtends("UIComponent"),new flexiciousNmsp.ActionMenu(),event.cell.rowInfo.data,null,0,rbnBelow.selected?0:
                -25,
                cbShouldAutoAdjust.selected,rbnLeft.selected?"left":rbnRight.selected?"right":"none");
        }
    }


};
myCompanyNameSpace.SAMPLE_CONFIGS["ShowOnHoverGrid"]='<grid id="grid"  enablePrint="true"'+
    '									 enablePreferencePersistence="true" enableDrillDown="true" '+
    '									 enableExport="true" enableCopy="true"'+
    '									 pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"'+
    '									 preferencePersistenceKey="nesteddata" itemRollOut="myCompanyNameSpace.grid_itemRollOutHandler" itemRollOver="myCompanyNameSpace.grid_itemRollOverHandler">'+
    '			<level enableFilters="true" enablePaging="true" initialSortField="legalName"	pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent" '+
    '														   selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true" enableCellClickRowSelect="false" '+
    '														   selectable="true" dataField="legalName" headerText="Legal Name" width="150" columnWidthMode="fixed"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent" '+
    '														   textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" '+
    '														   footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true"'+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" '+
    '														   footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" enableFooters="true" selectedKeyField="id" initialSortField="dealDate" initialSortAscending="false">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column dataField="dealDescription" headerText="Deal Description" footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '							<column dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '																   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '																   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="3" selectedKeyField="id">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column dataField="id" headerText="Invoice Number" footerLabel="Count:" footerOperation="count" footerAlign="center"  />'+
    '									<column dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" '+
    '																		   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																		   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '																		   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column dataField="invoiceDate" headerText="Invoice Date"  labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column dataField="dueDate" headerText="Due Date"  labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level enableFooters="true" selectedKeyField="id">'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column dataField="lineItemDescription" headerText="Line Item Description"  footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '											<column dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right"  footerLabel="Total:" footerOperation="sum" footerAlign="right"  footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';