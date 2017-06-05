
myCompanyNameSpace.onlyOneItemOpen_itemOpeningHandler=function (evt){

    evt.preventDefault();
    var itemsToRemove=[];
    var items=grid.getOpenItems();
    for(var i=0;i<items.length;i++){
        var openItem=items[i];
        //need to ensure we do not close our own parent
        if(myCompanyNameSpace.onlyOneItemOpen_existsInParentHierarchy(openItem,evt.item)){
            continue;
        }else{
            itemsToRemove.push(openItem);
        }
    }
    //remove all open items except our ancestors
    for(var j=0;j<itemsToRemove.length;j++){
        var itemToRemove=itemsToRemove[j];
        grid.getOpenItems().splice(grid.getOpenItems().indexOf(itemToRemove),1);
    }
    //add ourselves
    grid.getOpenItems().push(evt.item);
    grid.rebuildBody();//rebuild the body

};
myCompanyNameSpace.onlyOneItemOpen_existsInParentHierarchy=function (openItem, item){

    if(item==openItem){
        return true;
    }
    if(item.parent){
        return myCompanyNameSpace.onlyOneItemOpen_existsInParentHierarchy(openItem,item.parent); //since this is xml, we are using item.getParent(). We could also use grid.getParent(item) for non-lazy loaded grids.
    }
    return false;

};
myCompanyNameSpace.onlyOneItemOpen_dpHierarchyXML='<root><Region Region="Southwest">'+
    '				<Region Region="Arizona">'+
    '					<Territory_Rep Territory_Rep="Barbara Jennings" '+
    '								   Actual="38865" Estimate="40000"/>'+
    '					<Territory_Rep Territory_Rep="Dana Binn" '+
    '								   Actual="29885" Estimate="30000"/>'+
    '				</Region>'+
    '				<Region Region="Central California">'+
    '					<Territory_Rep Territory_Rep="Joe Smith" '+
    '								   Actual="29134" Estimate="30000"/>'+
    '				</Region>'+
    '				<Region Region="Nevada">'+
    '					<Territory_Rep Territory_Rep="Bethany Pittman" '+
    '								   Actual="52888" Estimate="45000"/>'+
    '				</Region>'+
    '				<Region Region="Northern California">'+
    '					<Territory_Rep Territory_Rep="Lauren Ipsum" '+
    '								   Actual="38805" Estimate="40000"/>'+
    '					<Territory_Rep Territory_Rep="T.R. Smith" '+
    '								   Actual="55498" Estimate="40000"/>'+
    '				</Region>'+
    '				<Region Region="Southern California">'+
    '					<Territory_Rep Territory_Rep="Alice Treu" '+
    '								   Actual="44985" Estimate="45000"/>'+
    '					<Territory_Rep Territory_Rep="Jane Grove" '+
    '								   Actual="44913" Estimate="45000"/>'+
    '				</Region>'+
    '			</Region>'+
    '			<Region Region="Northeast">'+
    '				<Region Region="New York">'+
    '					<Territory_Rep Territory_Rep="Alex Smith" '+
    '								   Actual="49229" Estimate="50000"/>'+
    '					<Territory_Rep Territory_Rep="Joe Pittman" '+
    '								   Actual="35555" Estimate="40000"/>'+
    '				</Region>'+
    '				<Region Region="New Jersey">'+
    '					<Territory_Rep Territory_Rep="Joe Smith" '+
    '								   Actual="28394" Estimate="30000"/>'+
    '				</Region>'+
    '				'+
    '				<Region Region="Connecticut">'+
    '					<Territory_Rep Territory_Rep="Amanda Peters" '+
    '								   Actual="44331" Estimate="55000"/>'+
    '					<Territory_Rep Territory_Rep="Jake Fremmer" '+
    '								   Actual="55434" Estimate="65000"/>'+
    '				</Region>'+
    '			</Region></root>  ';
myCompanyNameSpace.SAMPLE_CONFIGS["OnlyOneItemOpen"]='<grid id="grid" '+
    '									 enableFooters="true"  initialSortField="title" '+
    '									 initialSortAscending="true" forcePagerRow="true"'+
    '                                    dataProvider="eval__flexiciousNmsp.xml2json(myCompanyNameSpace.onlyOneItemOpen_dpHierarchyXML,null,true).Region"'+
    '									 preferencePersistenceKey="onlyOneItemOpen" itemOpening="myCompanyNameSpace.onlyOneItemOpen_itemOpeningHandler">'+
    '			<level >'+
    '				<columns>'+
    '					'+
    '					<column dataField="@Region"  headerText="Region"/>'+
    '					<column dataField="@Territory_Rep" headerText="Territory Rep"  />'+
    '					<column dataField="@Actual" headerText="Actual"/>'+
    '					<column dataField="@Estimate" headerText="Estimate" />'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level reusePreviousLevelColumns="true" enableFooters="true">'+
    '						<nextLevel>'+
    '							<level reusePreviousLevelColumns="true" enableFooters="true">'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';