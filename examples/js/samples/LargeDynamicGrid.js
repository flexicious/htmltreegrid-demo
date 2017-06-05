myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["LargeDynamicGrid"]="http://www.flexicious.com/resources/Ultimate/docs/LargeDynamicGrid.htm";

myCompanyNameSpace.largeDynamicGrid_numberFormatter = new flexiciousNmsp.NumberFormatter();

myCompanyNameSpace.largeDynamicGrid_creationCompleteHandler=function (evt){
    myCompanyNameSpace.largeDynamicGrid_numberFormatter.precision=0;
    var _colCount=0;
    var dp =[];
    var _rowCount=0;
    var gridCgs=[];
    var allCols=[];
    var colors =["Red" ,"Yellow","Silver","Green","Tan","White","Blue","Burgundy","Black","Orange"];
    var mCol = new flexiciousNmsp.FlexDataGridColumn();
    mCol.setHeaderText("Make");
    mCol.setDataField("make");
    mCol.setWidth(100);
    mCol.setColumnLockMode("left");
    gridCgs.push(mCol);
    mCol = new flexiciousNmsp.FlexDataGridColumn();
    mCol.setHeaderText("Model");
    mCol.setDataField("model");
    mCol.setWidth(100);
    mCol.setColumnLockMode("left");
    gridCgs.push(mCol);
    mCol = new flexiciousNmsp.FlexDataGridColumn();
    mCol.setHeaderText("Color");
    mCol.setDataField("color");
    mCol.setWidth(100);
    mCol.setColumnLockMode("left");
    gridCgs.push(mCol);
    var makeModels =[{"make":"Toyota","models":["4Runner","Avalon","Camry","Celica","Corolla","Corona","Cressida","Echo","FJ Cruiser","Highlander","Land Cruiser","MR2","Matrix","Paseo","Pickup","Previa","Prius","RAV4","Seqouia","Sienna","Solara","Supra"]},
        {"make":"Lexus","models":["CT","ES250","ES300","ES330","ES350","GS300","GS350","GS400","GS430","GS460","GX460","GX470"]},
        {"make":"Honda","models":["Accord","CRV","CRX","Civic","Del Sol","Element","Fit","Insight","Odyssey","Passport","Pilot","Prelude","S2000"]},
        {"make":"Acura","models":["Integra","Legend","MDX","NSX","RDX","RSX","SLX","3.2TL","2.5TL","Vigor","ZDX"]},
        {"make":"Nissan","models":["200SX","240SX","300ZX","350Z","370Z","Altima","Armada","Cube","Frontier","GT-R","Juke","Leaf","Maxima","Murano","NX","PathFinder","Pickup","Pulsar","Quest"]},
        {"make":"Infiniti","models":["EX35","FX35","FX45","G20","G25","G35","I30","I35","J30","M30"]}];

    for(var i=0;i<makeModels.length;i++){
        var m=makeModels[i];
        var mk = {};
        dp.push(mk);
        mk.make = m.make;
        mk.children = [];
        for(var j=0;j<m.models.length;j++){
            var mod=m.models[j];
            mk.children.push({"model":mod});
        }
    }

    for (var i=2000;i<=2012;i++){
        var ycg  =new flexiciousNmsp.FlexDataGridColumnGroup();
        gridCgs.push(ycg);
        ycg.enableExpandCollapse=true;
        ycg.setHeaderText(i.toString());
        for (var j=1;j<=4;j++){
            var qcg =new flexiciousNmsp.FlexDataGridColumnGroup();
            ycg.columnGroups.push(qcg);
            qcg.enableExpandCollapse=true;
            qcg.setHeaderText(ycg.getHeaderText() + "-Q" + j.toString());
            var qCols=[];
            var items=myCompanyNameSpace.largeDynamicGrid_getMonths(j);
            for(var k=0;k<items.length;k++){
                var month=items[k];
                mCol = new flexiciousNmsp.FlexDataGridColumn();
                mCol.setHeaderText(ycg.getHeaderText()+" " + month);
                mCol.setDataField(qcg.getHeaderText() + ycg.getHeaderText() + month);
                mCol.editable=true;
                mCol.isEditableFunction=myCompanyNameSpace.largeDynamicGrid_isEditable;
                mCol.setFooterFormatter(myCompanyNameSpace.largeDynamicGrid_numberFormatter);
                mCol.setLabelFunction(myCompanyNameSpace.largeDynamicGrid_dataGridFormatNumberLabelFunction);
                //mCol.useHandCursor = true
                mCol.footerOperationPrecision = 0;
                mCol.setWidth(60);
                mCol.setStyle("textAlign","right");
                qCols.push(mCol);
                allCols.push(mCol);
                _colCount++;
            }
            qcg.setColumns(qCols);
        }
    }
    for(var i=0;i<dp.length;i++){
        var dpItem=dp[i];
        for(var j=0;j<dpItem.children.length;j++){
            var model=dpItem.children[j];
            model.children = [];
            for(var k=0;k<colors.length;k++){
                var cl=colors[k];
                var color = {"color":cl};
                model.children.push(color);
                for(var p=0;p<allCols.length;p++){
                    var mCol=allCols[p];
                    color[mCol.dataField]=myCompanyNameSpace.FlexiciousMockGenerator.getRandom(100,1000);
                }
                _rowCount++;
            }
        }
    }
    for(var i=0;i<allCols.length;i++){
        var mCol=allCols[i];
        for(var j=0;j<dp.length;j++){
            var  dpItem=dp[j];
            var total=0;
            for(var k=0;k<dpItem.children.length;k++){
                var  model=dpItem.children[k];
                var modeltotal=0;
                for(var p=0;p<model.children.length;p++){
                    var  color=model.children[p];
                    modeltotal+=color[mCol.dataField];
                }
                model[mCol.dataField]=modeltotal;
                total+=modeltotal;
            }
            dpItem[mCol.dataField]=total;
        }
    }


    grid.getColumnLevel().setGroupedColumns(gridCgs);
    //grid.columnLevel.enableFooters = true;
    grid.getColumnLevel().childrenField=("children");
    grid.getColumnLevel().nextLevel = new flexiciousNmsp.FlexDataGridColumnLevel();
    grid.getColumnLevel().nextLevel.reusePreviousLevelColumns=true;
    //grid.columnLevel.nextLevel.enableFooters = true;
    grid.getColumnLevel().nextLevel.childrenField=("children");
    grid.getColumnLevel().nextLevel.nextLevel = new flexiciousNmsp.FlexDataGridColumnLevel();
    grid.getColumnLevel().nextLevel.nextLevel.reusePreviousLevelColumns=true;
    //grid.columnLevel.nextLevel.nextLevel.enableFooters = true;
    grid.setDataProvider(dp);

};

myCompanyNameSpace.largeDynamicGrid_dataGridFormatNumberLabelFunction=function (item, dgColumn){

    if(item.hasOwnProperty(dgColumn.dataField))
    {
        var number = item[dgColumn.dataField];
        if(number)
            return myCompanyNameSpace.largeDynamicGrid_formatCurrency(number,' ');
    }
    else
        return null;
    return item[dgColumn.dataField];

};

myCompanyNameSpace.largeDynamicGrid_formatCurrency=function (number, param1){

    return myCompanyNameSpace.largeDynamicGrid_numberFormatter.format(number);


};
myCompanyNameSpace.largeDynamicGrid_isEditable=function (cell){

    return (cell.getLevel().getNestDepth()==3)

};
myCompanyNameSpace.largeDynamicGrid_getMonths=function (j){

    if(j==1){
        return ["Jan", "Feb", "Mar"];
    }else if(j==2){
        return ["Apr", "May", "June"];
    }else if(j==3){
        return ["Jul", "Aug", "Sep"];
    }else if(j==4){
        return ["Oct", "Nov", "Dec"];
    }
    return[]

};
myCompanyNameSpace.SAMPLE_CONFIGS["LargeDynamicGrid"]='<grid id="grid" ' +
    '            horizontalScrollPolicy="on"  columnGroupStyleName="cgStyle"' +
    '            preferencePersistenceKey="largeDynamicGrid" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.largeDynamicGrid_creationCompleteHandler">'+
    '			</grid>';