myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["GroupedData2"]="http://www.flexicious.com/resources/Ultimate/docs/GroupedData2.htm";

myCompanyNameSpace.groupedData2_checkCellDisabled=function (cell){
    return !(cell.rowInfo.getData().implementsOrExtends('Invoice'));

};
myCompanyNameSpace.groupedData2_getName=function (data,col){
    return data.getName();
}
myCompanyNameSpace.groupedData2_getInvoiceAmount=function (data,col){
    var val=0;
    if(data.implementsOrExtends('Invoice'))
        val=(data).getInvoiceAmount();
    else if(data.implementsOrExtends('Deal'))
        val=(data ).getDealAmount();
    else if(data.implementsOrExtends('Organization'))
        val= (data ).getRelationshipAmount();

    return flexiciousNmsp.UIUtils.formatCurrency(val);

};

myCompanyNameSpace.groupedData2_amountSortCompareFunction=function (obj1, obj2){
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
myCompanyNameSpace.groupedData2_returnFalse=function (cell,data){

    return false;

};
myCompanyNameSpace.groupedData2_CreationComplete=function (){
    grid.validateNow();
    grid.expandAll();

};
myCompanyNameSpace.SAMPLE_CONFIGS["GroupedData2"]='<grid id="grid"  enablePrint="true" horizontalGridLines="true"'+
    '								  enablePreferencePersistence="true" enableFilters="true"'+
    '								 enableExport="true" enableCopy="true"  enableEagerDraw="true" showSpinnerOnFilterPageSort="true"'+
    '								 preferencePersistenceKey="groupedData2" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.groupedData2_CreationComplete">'+
    '			<level  enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" selectedKeyField="id"'+
    '								 reusePreviousLevelColumns="true" rowSelectableFunction="myCompanyNameSpace.groupedData2_returnFalse">'+
    '				<columns>'+
    '					<column type="checkbox"  cellDisabledFunction="myCompanyNameSpace.groupedData2_checkCellDisabled" />'+
    '					<column enableHierarchicalNestIndent="true" labelFunction="myCompanyNameSpace.groupedData2_getName" headerText="Name"   width="150"/>'+
    '					<column dataField="invoiceAmount" headerText="Amount" textAlign="right" '+
    '								 footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '								 footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '								 labelFunction="myCompanyNameSpace.groupedData2_getInvoiceAmount" sortCompareFunction="myCompanyNameSpace.groupedData2_amountSortCompareFunction"/>'+
    '					<column dataField="invoiceNumber" headerText="Invoice Number" '+
    '							  footerLabel="Count:" footerOperation="count" footerAlign="center" '+
    '							  filterControl="TextInput" filterOperation="Contains"/>'+
    '					<column dataField="invoiceStatus.name" headerText="Invoice Status" filterControl="MultiSelectComboBox"'+
    '							 filterComboBoxDataProvider="eval__flexiciousNmsp.SystemConstants.invoiceStatuses" enableRecursiveSearch="true" '+
    '							  filterComboBoxDataField="code" filterComboBoxLabelField="name"/>'+
    '					<column dataField="invoiceDate" headerText="Invoice Date" filterControl="DateComboBox" '+
    '						    labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '					<column dataField="dueDate" headerText="Due Date" filterControl="DateComboBox"'+
    '							 labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" selectedKeyField="id" reusePreviousLevelColumns="true" rowSelectableFunction="myCompanyNameSpace.groupedData2_returnFalse">'+
    '						<nextLevel>'+
    '							<level enableFooters="true" enablePaging="true" pageSize="5" selectedKeyField="id" reusePreviousLevelColumns="true">'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';