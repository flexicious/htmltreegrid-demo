


    myCompanyNameSpace.filterComboboxDataprovider_creationCompleteHandler=function (evt){

        myCompanyNameSpace.filterComboboxDataprovider_loadFilters();
    };
    myCompanyNameSpace.filterComboboxDataprovider_loadFilters=function (){

        var filteredArray = flexiciousNmsp.UIUtils.filterArray(myCompanyNameSpace.filterComboboxDataprovider_ArrCol,grid.createFilter(),grid,grid.getColumnLevel(),false)
        var stateCol= grid.getColumnByDataField("state");
        stateCol.filterComboBoxDataProvider = (stateCol.getDistinctValues(filteredArray));
        grid.rebuildFilter();

    };

    myCompanyNameSpace.filterComboboxDataprovider_filterPageSortChangeHandler=function (evt){
         myCompanyNameSpace.filterComboboxDataprovider_loadFilters();
     };

    myCompanyNameSpace.filterComboboxDataprovider_ArrCol = [
        {label:"Aflac", state:"NJ", startDate:new Date()},
        {label:"Ambac", state:"PA", startDate:new Date()},
        {label:"BestBuy", state:"CT", startDate:new Date()},
        {label:"Berkshire", state:"NY", startDate:new Date()},
        {label:"BP", state:"NJ", startDate:new Date()}];

    myCompanyNameSpace.SAMPLE_CONFIGS["FilterComboBoxDataProvider"]='<grid  dataProvider="eval__myCompanyNameSpace.filterComboboxDataprovider_ArrCol" id="grid" enableFilters="true" '+
        '                                    preferencePersistenceKey="filterComboboxDataprovider" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.filterComboboxDataprovider_creationCompleteHandler">'+
        '									 onfilterPageSortChange="myCompanyNameSpace.filterComboboxDataprovider_filterPageSortChangeHandler" enableExport="true"'+
        '									 forcePagerRow="true" enablePaging="true" >'+
        '   <level>'+
        '		<columns>'+
        '			<column dataField="label" filterControl="TextInput" filterOperation="BeginsWith"/>'+
        '			<column dataField="state" id="stateCol" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="false"/>'+
        '			<column dataField="startDate" format="date" filterControl="DateComboBox"/>'+
        '		</columns>'+
        '   </level>'+
        '	</grid>';
