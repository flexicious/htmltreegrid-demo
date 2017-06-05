myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ProgamaticCellPainting"]="http://www.flexicious.com/resources/Ultimate/docs/ProgamaticCellPainting.htm";

myCompanyNameSpace.programaticCellPainting_CreationComplete = function () {
    flexiciousNmsp.BusinessService.getInstance().getDeepOrgList(function(evt,token){grid.setDataProvider(evt.result)});
};

myCompanyNameSpace.programaticCellPainting_cellCustomDrawFunction = function () {
    if(cell.getRowInfo().isFillRow)return false; //we do not want to style the fill row (this is the row that fills any visible white space)
    var colors = cell.getBackgroundColors();
    if(colors.implenmendsOrExtends("Array")){
        //just draw a rounded rect with a gradient
        var mat=new flexiciousNmsp.Matrix();
        mat.createGradientBox(cell.getWidth()-0,cell.getHeight()-0,(-90)*Math.PI/180);
        cell.graphics.lineStyle(1, cell.verticalGridLineColor);
        cell.graphics.beginGradientFill(GradientType.LINEAR,colors,[100, 100],[0x00, 0xFF],mat);
        cell.graphics.drawRoundRect(1, 1, cell.getWidth()-2, cell.getHeight()-2, 20, 20);
        cell.graphics.endFill();
    }
    else{
        //simply draw a rounded rect
        cell.graphics.beginFill(colors);
        cell.graphics.lineStyle(1, cell.verticalGridLineColor);
        cell.graphics.drawRoundRect(1, 1, cell.getWidth()-2, cell.getHeight()-2, 20, 20);
        cell.graphics.endFill();
    }
    return false;
};

myCompanyNameSpace.programaticCellPainting_gridPrintHandler = function (evt) {
    var stylesToTransfer=["textAlign"
        ,"footerVerticalGridLines","pagerVerticalGridLines","headerVerticalGridLines","filterVerticalGridLines",
        ,"footerHorizontalGridLines","pagerHorizontalGridLines","headerHorizontalGridLines","filterHorizontalGridLines",
        "verticalGridLines","horizontalGridLines" ];

    for (vari=0;i<stylesToTransfer.length;i++){
        var style=stylesToTransfer[i];
        event.printGrid.setStyle(style,event.grid.getStyle(style));
        event.printGrid.getLevel().setStyle(style,event.grid.getLevel().getStyle(style));
    }
};

myCompanyNameSpace.SAMPLE_CONFIGS["ProgamaticCellPainting"]='<grid id="grid"  enablePrint="true" textAlign="center" headerHorizontalGridLines="false"'+
    '									 footerVerticalGridLines="false" pagerVerticalGridLines="false" headerVerticalGridLines="false"'+
    '									 filterVerticalGridLines="false"  verticalGridLines="false" horizontalGridLines="false" '+
    '									 enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" beforePrint="myCompanyNameSpace.programaticCellPainting_gridPrintHandler(event)"'+
    '									 pdfBytesReady="new AlivePdfGenerator().generate(event.target as grid ,event.printOptions)"'+
    '									 preferencePersistenceKey="programaticCellPainting" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.programaticCellPainting_CreationComplete">'+
    '			<level nestIndent="10" initialSortField="legalName" initialSortAscending="true"'+
    '				enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id"'+
    '				cellCustomBackgroundDrawFunction="myCompanyNameSpace.programaticCellPainting_cellCustomDrawFunction" filterHorizontalGridLines="false" pagerHorizontalGridLines="false"'+
    '				footerHorizontalGridLines="false" headerHorizontalGridLines="false">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fixed" width="75" '+
    '														   selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true"  enableCellClickRowSelect="false" columnWidthMode="fitToContent"'+
    '														   selectable="true" dataField="legalName" headerText="Legal Name"/>'+
    '					<column editable="true" dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column editable="true" dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column editable="true" dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column editable="true" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column editable="true" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column editable="true" dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent" '+
    '									   textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" ' +
    '                                       footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                       labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column editable="true" dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" '+
    '									textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                    labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column editable="true" dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" '+
    '								      textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                     labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column editable="true" dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" '+
    '														   textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" ' +
    '                                                           footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                                            labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level nestIndent="10" childrenField="invoices" enableFooters="true" selectedKeyField="id" cellCustomBackgroundDrawFunction="myCompanyNameSpace.programaticCellPainting_cellCustomDrawFunction" >'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column editable="true" dataField="dealDescription" headerText="Deal Description" '+
    '										  footerLabel="Count:" footerOperation="count" footerAlign="center" />'+
    '							<column editable="true" dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '										    footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '											footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                           labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction/>'+
    '							<column  dataField="dealDate" headerText="Deal Date" labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level nestIndent="10" childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="5" cellCustomBackgroundDrawFunction="myCompanyNameSpace.programaticCellPainting_cellCustomDrawFunction" '+
    '																		selectedKeyField="id">'+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column editable="true" dataField="id" headerText="Invoice Number" '+
    '													 footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '									<column editable="true" dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" '+
    '													 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '												     footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                                    labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column editable="true" dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column dataField="invoiceDate" headerText="Invoice Date" '+
    '														labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column dataField="dueDate" headerText="Due Date" '+
    '														 labelFunction="UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
    '								<nextLevel>'+
    '									<level nestIndent="10" enableFooters="true" selectedKeyField="id" cellCustomBackgroundDrawFunction="myCompanyNameSpace.programaticCellPainting_cellCustomDrawFunction" >'+
    '										<columns>'+
    '											<column type="checkbox" />'+
    '											<column editable="true" dataField="lineItemDescription" headerText="Line Item Description" '+
    '													footerLabel="Count:" footerOperation="count" footerAlign="center"/>'+
    '											<column editable="true" dataField="lineItemAmount" headerText="Line Item Amount" textAlign="right" '+
    '														 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '														 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" ' +
    '                                                        labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '										</columns>'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';
