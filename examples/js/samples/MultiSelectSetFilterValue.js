myCompanyNameSpace.multiSelectSetFilterValue_arrColl = [
    {label:"Aflac", state:"NJ"},
    {label:"Ambac", state:"PA"},
    {label:"BestBuy", state:"CT"},
    {label:"Berkshire", state:"NY"},
    {label:"BP", state:"NJ"},
    {label:"Company without state 1", state:""},
    {label:"Company without state 2", state:""}
];


myCompanyNameSpace.SAMPLE_CONFIGS["MultiSelectSetFilterValue"]='<grid  dataProvider="eval__myCompanyNameSpace.multiSelectSetFilterValue_arrColl" id="grid" enableFilters="true" >'+
    '		<columns>'+
    '			<column dataField="label" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '			<column dataField="state" filterControl="MultiSelectComboBox"  filterComboBoxBuildFromGrid="true"/>'+
    '		</columns>'+
    '	</grid>';