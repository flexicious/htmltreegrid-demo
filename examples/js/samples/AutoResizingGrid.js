myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["AutoResizingGrid"]="http://www.flexicious.com/resources/Ultimate/docs/AutoResizingGrid.htm";

myCompanyNameSpace.SAMPLE_CONFIGS_EXPLANATIONS["AutoResizingGrid"]="<p>Auto Resizing Grid</p> In this example" +
    "we demonstrate the usage of the enableHeightAutoAdjust property. " +
    "This is a flag to size the grid on basis of the number of rows displayed. " +
    "Based on ";




myCompanyNameSpace.autoResizingGrid_listOfObjects = [];
myCompanyNameSpace.autoResizingGrid_number=1;

myCompanyNameSpace.autoResizingGrid_newObject=function(evt){
    var newObject = {};
    newObject.number = myCompanyNameSpace.autoResizingGrid_number++;
    newObject.value = 1.0;
    myCompanyNameSpace.autoResizingGrid_listOfObjects.push(newObject);
    grid.rebuild();
};
myCompanyNameSpace.autoResizingGrid_CreationComplete=function(evt){
    myCompanyNameSpace.autoResizingGrid_listOfObjects=[];
    grid.setDataProvider(myCompanyNameSpace.autoResizingGrid_listOfObjects);
    for (var i=0;i<3;i++){
        myCompanyNameSpace.autoResizingGrid_newObject();
    }
}
myCompanyNameSpace.SAMPLE_CONFIGS["AutoResizingGrid"]='<grid id="grid" width="800" height="300"  ' +
    'enablePrint="true"  enableHeightAutoAdjust="true" enablePreferencePersistence="true" enableDrillDown="true" ' +
    'enableSelectionCascade="true" enableExport="true" enableCopy="true" dataProvider="{_org.deals}" ' +
    'preferencePersistenceKey="autoResiziingGrid" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="' +
    'myCompanyNameSpace.autoResizingGrid_CreationComplete">'+
    '</grid>';
