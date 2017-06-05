myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["GroupedData"]="http://www.flexicious.com/resources/Ultimate/docs/GroupedData.htm";

myCompanyNameSpace.groupedData_checkCellDisabled=function (cell){
    return !(cell.rowInfo.getData().implementsOrExtends('Invoice'));

};

myCompanyNameSpace.groupedData_getInvoiceAmount=function (data,col){
    var val=0;
    if(data.implementsOrExtends('Invoice'))
        val=(data).getInvoiceAmount();
    else if(data.implementsOrExtends('Deal'))
        val=(data ).getDealAmount();
    else if(data.implementsOrExtends('Organization'))
        val= (data).getRelationshipAmount();

    return flexiciousNmsp.UIUtils.formatCurrency(val);

};
myCompanyNameSpace.groupedData_amountSortCompareFunction=function (obj1, obj2){
    if(obj1.implementsOrExtends('Organization') && obj2.implementsOrExtends('Organization')){
        return flexiciousNmsp.UIUtils.numericCompare(obj1.getRelationshipAmount(),obj2.getRelationshipAmount());
    }
    else if(obj1.implementsOrExtends('Deal') && obj2.implementsOrExtends('Deal')){
        return flexiciousNmsp.UIUtils.numericCompare(obj1.getDealAmount(),obj2.getDealAmount());
    }
    else if(obj1.implementsOrExtends('Invoice') && obj2.implementsOrExtends('Invoice')){
        return flexiciousNmsp.UIUtils.numericCompare(obj1.getInvoiceAmount(),obj2.getInvoiceAmount());
    }
    return 0;


};
myCompanyNameSpace.groupedData_CreationComplete=function (){
    grid.validateNow();
    grid.expandAll();

};

myCompanyNameSpace.SAMPLE_CONFIGS["GroupedData"]='<grid id="grid" enablePrint="true" horizontalGridLines="true"'+
    '									 enablePreferencePersistence="true" enableFilters="true"'+
    '									 enableExport="true" enableCopy="true" enableEagerDraw="true"  showSpinnerOnFilterPageSort="true" '+
    '									 preferencePersistenceKey="groupedData" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.groupedData_CreationComplete">'+
    '                                    enableMultiColumnSort="true" enableSelectionCascade="true">'+
    '		'+
    '			<level  enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" selectedKeyField="id"'+
    '														reusePreviousLevelColumns="true" >'+
    '				<columns>'+
    '					<column type="checkbox"   />'+
    '					<column dataField="legalName" headerText="Organization Name" '+
    '														   filterControl="TextInput" filterOperation="BeginsWith"'+
    '														  />'+
    '					<column dataField="dealDescription" headerText="Deal Description" '+
    '														   filterControl="TextInput" filterOperation="BeginsWith"'+
    '														   />'+
    '					<column dataField="id" headerText="Invoice Number" '+
    '														   footerLabel="Count:" footerOperation="count" footerAlign="center" '+
    '														   filterControl="TextInput" filterOperation="BeginsWith"'+
    '														   />'+
    '					<column dataField="invoiceAmount" headerText="Amount" textAlign="right" '+
    '														   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '														   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '														   labelFunction="myCompanyNameSpace.groupedData_getInvoiceAmount" sortCompareFunction="myCompanyNameSpace.groupedData_amountSortCompareFunction"/>'+
    '					<column dataField="invoiceStatus.name" headerText="Invoice Status" filterControl="MultiSelectComboBox"'+
    '														   filterComboBoxDataProvider="eval__flexiciousNmsp.SystemConstants.invoiceStatuses" enableRecursiveSearch="true" '+
    '														   filterComboBoxDataField="code" filterComboBoxLabelField="name"/>'+
    '					'+
    '					<column itemEditor="flexiciousNmsp.DatePicker"  '+
    '														   dataField="invoiceDate" headerText="Invoice Date" filterControl="DateComboBox" '+
    '														   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '					<column itemEditor="flexiciousNmsp.DatePicker"  '+
    '														   dataField="dueDate" headerText="Due Date" filterControl="DateComboBox"'+
    '														   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" selectedKeyField="id" reusePreviousLevelColumns="true" >'+
    '						'+
    '						<nextLevel>'+
    '							<level enableFooters="true" enablePaging="true" pageSize="5"'+
    '																		selectedKeyField="id" reusePreviousLevelColumns="true">'+
    '								'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '		'+
    '	</grid>';