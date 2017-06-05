myCompanyNameSpace.vrh_convertDate=function(item,col){
    var dt = flexiciousNmsp.UIUtils.resolveExpression(item,col.getDataField()).toString();
    var date =flexiciousNmsp.UIUtils.adapter.getDateValue(dt,flexiciousNmsp.Constants.YMD_MASK); //will need to change this for
    return date;
}
myCompanyNameSpace.vrh_dataGridFormatDateLabelFunction=function(item, dgColumn)
{
    var num=flexiciousNmsp.UIUtils.resolveExpression(item,dgColumn.dataField);
    var date=myCompanyNameSpace.vrh_convertDate(item,dgColumn);
    return flexiciousNmsp.UIUtils.formatDate(date);
}


myCompanyNameSpace.SAMPLE_CONFIGS["VariableRowHeight"]='<grid id="grid" enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" enableFilters="true"'+
    '									enableFooters="true"  initialSortField="title" preferencePersistenceKey="variableRowHeight" '+
    '									initialSortAscending="true"  forcePagerRow="true"'+
    '									variableRowHeight="true" horizontalScrollPolicy="off">'+
    '				<columns>'+
    '					<column dataField="id" headerText="ID" filterControl="TextInput" filterOperation="Contains" columnWidthMode="fitToContent"/>'+
    '					<column dataField="title" headerText="Title" filterControl="TextInput" columnWidthMode="fitToContent"  footerLabel="Count:" footerOperation="count" footerAlign="center"  filterOperation="Contains" />'+
    '					<column dataField="description" headerText="Description"   wordWrap="true"/>'+
    '					<column dataField="genre" headerText="Genre" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" columnWidthMode="fitToContent"/>'+
    '					<column dataField="price" headerText="Price" filterControl="NumericRangeBox" columnWidthMode="fixed" width="100" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="publish_date" headerText="Publish Date" filterControl="DateComboBox" columnWidthMode="fitToContent" filterConverterFunction="myCompanyNameSpace.vrh_convertDate"  labelFunction="myCompanyNameSpace.vrh_dataGridFormatDateLabelFunction"/>'+
    '				</columns>'+
    '	</grid>';