
myCompanyNameSpace.variableHeaderRowHeight_arrColl = [
    {label:"Company A", state:"NJ", rank:"1"},
    {label:"Company B", state:"PA", rank:"11"},
    {label:"Company C", state:"CT", rank:"111"},
    {label:"Company D", state:"NY", rank:"2"},
    {label:"Company E", state:"NJ", rank:"22"}];

myCompanyNameSpace.variableHeaderRowHeight_handleDoubleClick = function(event) {
    grid.setSelectedObjects([event.item]);
}

myCompanyNameSpace.SAMPLE_CONFIGS["VariableHeaderRowHeight"]='<grid id="grid" selectionMode="singleRow"'+
    '					  variableHeaderHeight="true" variableRowHeight="true"'+
    '					  variableRowHeightUseRendererForCalculation="true" dataProvider="eval__myCompanyNameSpace.variableHeaderRowHeight_arrColl"'+
    '					  selectedKeyField="label" doubleClickEnabled="true"'+
    '					  itemDoubleClick="myCompanyNameSpace.variableHeaderRowHeight_handleDoubleClick">'+
    '      <level>' +
    '       <columns>'+
    '			<column type="checkbox"/>'+
    '			<column headerText="ZZZZZ ZZZZZ ZZZZZ ZZZZZ ZZZZ ZZZZ ZZZZZ ZZZZ ZZZZ ZZZZ ZZZZ 11111" headerWordWrap="true" dataField="label"/>'+
    '			<column headerText="ZZZZZ ZZZZZ ZZZZZ ZZZZZ ZZZZ ZZZZ ZZZZZ ZZZZ ZZZZ ZZZZ ZZZZ 22222" headerWordWrap="true" dataField="label"/>'+
    '			<column headerText="ZZZZZ ZZZZZ ZZZZZ ZZZZZ ZZZZ ZZZZ ZZZZZ ZZZZ ZZZZ ZZZZ ZZZZ 33333" headerWordWrap="true" dataField="rank" />'+
    '			<column headerText="ZZZZZ ZZZZZ ZZZZZ ZZZZZ ZZZZ ZZZZ ZZZZZ ZZZZ ZZZZ ZZZZ ZZZZ 44444" headerWordWrap="true" />'+
    '		</columns>'+
    '      </level>'+
    '	</grid>';