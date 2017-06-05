myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["RowSpanColSpan"]="http://www.flexicious.com/resources/Ultimate/docs/RowSpanColSpan.htm";


myCompanyNameSpace.rowSpanColSpan_CreationComplete = function () {
    rowSpanColSpan_questions =  [];
    myCompanyNameSpace.rowSpanColSpan_addQuestion("Please rate your level of satisfaction with the sense of safety and security as experienced in your residential college/housing campus");
    myCompanyNameSpace.rowSpanColSpan_addQuestion("Please rate your level of satisfaction with the availability of public transportation to and from the University Campus");
    myCompanyNameSpace.rowSpanColSpan_addQuestion("Please rate your level of satisfaction with the quality of the Intramural sports and recreation programs");
    myCompanyNameSpace.rowSpanColSpan_addQuestion("Please rate your level of satisfaction with your sense of acceptance, belonging, and community");
    this.setDataProvider(rowSpanColSpan_questions);
    this.validateNow();
    this.expandAll();

};
var rowSpanColSpan_questions =  [];
myCompanyNameSpace.rowSpanColSpan_addQuestion=function (questionText){

    var q = new Object();
    q.question=questionText;
    q.answers =  [];
    myCompanyNameSpace.rowSpanColSpan_addAnswers(q);
    rowSpanColSpan_questions.push(q);

};
myCompanyNameSpace.rowSpanColSpan_addAnswers=function (q){

    q.answers.push(myCompanyNameSpace.rowSpanColSpan_createAnswer('Very Satisfied'));
    q.answers.push(myCompanyNameSpace.rowSpanColSpan_createAnswer('Moderately Satisfied'));
    q.answers.push(myCompanyNameSpace.rowSpanColSpan_createAnswer('No Opinion/NA'));
    q.answers.push(myCompanyNameSpace.rowSpanColSpan_createAnswer('Moderately Dissatisfied'));
    q.answers.push(myCompanyNameSpace.rowSpanColSpan_createAnswer('Very Satisfied'));
    var total=flexiciousNmsp.UIUtils.sum(q.answers,"totalCount");
    for(var i=0;i<q.answers.length;i++){
        var a=q.answers[i];
        a.totalPercent = (100*a.totalCount/total).toFixed(2);
    }
    q.freshmanCount = flexiciousNmsp.UIUtils.sum(q.answers,"freshmanCount");
    q.sophomoreCount = flexiciousNmsp.UIUtils.sum(q.answers,"sophomoreCount");
    q.juniorCount =  flexiciousNmsp.UIUtils.sum(q.answers,"juniorCount");
    q.seniorCount = flexiciousNmsp.UIUtils.sum(q.answers,"seniorCount");

    q.totalCount = q.freshmanCount+q.sophomoreCount+q.juniorCount+q.seniorCount;
    q.freshmanPercent = (100*q.freshmanCount/q.totalCount).toFixed(2);
    q.sophomorePercent = (100*q.sophomoreCount/q.totalCount).toFixed(2);
    q.juniorPercent = (100*q.juniorCount/q.totalCount).toFixed(2);
    q.seniorPercent = (100*q.seniorCount/q.totalCount).toFixed(2);
    q.totalPercent=100;

};
myCompanyNameSpace.rowSpanColSpan_createAnswer=function (answerOption){

    var a=new Object();
    a.answerOption=answerOption;
    a.freshmanCount = myCompanyNameSpace.FlexiciousMockGenerator.getRandom(100,400);
    a.sophomoreCount = myCompanyNameSpace.FlexiciousMockGenerator.getRandom(100,400);
    a.juniorCount = myCompanyNameSpace.FlexiciousMockGenerator.getRandom(100,400);
    a.seniorCount = myCompanyNameSpace.FlexiciousMockGenerator.getRandom(100,400);

    a.totalCount = a.freshmanCount+a.sophomoreCount+a.juniorCount+a.seniorCount;
    a.freshmanPercent = (100*a.freshmanCount/a.totalCount).toFixed(2);
    a.sophomorePercent = (100*a.sophomoreCount/a.totalCount).toFixed(2);
    a.juniorPercent = (100*a.juniorCount/a.totalCount).toFixed(2);
    a.seniorPercent = (100*a.seniorCount/a.totalCount).toFixed(2);
    return a;

};
myCompanyNameSpace.rowSpanColSpan_getColor=function (cell){

    if(cell.level.getNestDepth()==1 //top level
        && cell.getColumn()
        && cell.getColumn().getDataField()=="question" //its the first column
        && cell.getRowInfo().getIsDataRow() //its the data row, not the header or the footer row
        )
        return 0xF7F3F7;

    return null;

};

myCompanyNameSpace.rowSpanColSpan_rbnRowSpanselected=true;
myCompanyNameSpace.rowSpanColSpan_getRowSpan=function (cell){

    if(!myCompanyNameSpace.rowSpanColSpan_rbnRowSpanselected) return 1;
    if(cell.getLevel().getNestDepth()==1 //top level
        && cell.getLevel().isItemOpen(cell.rowInfo.getData())//item is open
        && cell.getColumn()
        && cell.getColumn().getDataField()=="question" //its the first column
        && cell.getRowInfo().getIsDataRow() //its the data row, not the header or the footer row
        && !cell.getRowInfo().getIsFillRow()//since the filler is also considered a data row
        )
        return cell.getRowInfo().getData().answers.length+1;

    return 1;

};
myCompanyNameSpace.rowSpanColSpan_rbnColSpanselected=false;
myCompanyNameSpace.rowSpanColSpan_getColSpan=function (cell){

    if(!myCompanyNameSpace.rowSpanColSpan_rbnColSpanselected) return 1;
    if(cell.getLevel().getNestDepth()==1 //top level
        && cell.getColumn()
        && cell.getColumn().getDataField()=="question" //its the first column
        && cell.getRowInfo().getIsDataRow() //its the data row, not the header or the footer row
        && !cell.getRowInfo().getIsFillRow()//since the filler is also considered a data row
        )
        return cell.getGrid().getColumns().length;
    return 1;
};

myCompanyNameSpace.rowSpanColSpan_handleRowSpanClick=function() {
    myCompanyNameSpace.rowSpanColSpan_rbnRowSpanselected=true;
    myCompanyNameSpace.rowSpanColSpan_rbnColSpanselected=false;
    var questionColumn=grid.getColumnByDataField('question');
    questionColumn.setColumnLockMode(flexiciousNmsp.FlexDataGridColumn.LOCK_MODE_LEFT);
    grid.reDraw();
}

myCompanyNameSpace.rowSpanColSpan_handleColumnSpanClick=function() {
    myCompanyNameSpace.rowSpanColSpan_rbnRowSpanselected=false;
    myCompanyNameSpace.rowSpanColSpan_rbnColSpanselected=true;
    var questionColumn=grid.getColumnByDataField('question');
    questionColumn.setColumnLockMode(flexiciousNmsp.FlexDataGridColumn.LOCK_MODE_NONE);
    grid.reDraw();
}
myCompanyNameSpace.SAMPLE_CONFIGS["RowSpanColSpan"]='<grid fontFamily="tahoma" fontSize="11"  id="grid" enableDynamicLevels="true" rowSpanFunction="myCompanyNameSpace.rowSpanColSpan_getRowSpan" colSpanFunction="myCompanyNameSpace.rowSpanColSpan_getColSpan" enableDefaultDisclosureIcon="false"'+
    '                                   preferencePersistenceKey="rowSpanColSpan" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.rowSpanColSpan_CreationComplete"'+
    '									 cellBackgroundColorFunction="myCompanyNameSpace.rowSpanColSpan_getColor" horizontalGridLines="true"'+
    '									 alternatingItemColors="[0xFFFFFF,0xE7F3FF]"  headerColors="[0x298EBD,0x298EBD]"  headerRollOverColors="[0x298EBD,0x298EBD]"'+
    '									 columnGroupColors="[0x298EBD,0x298EBD]"  footerColors="[0x298EBD,0x298EBD]" headerStyleName="whiteText" footerStyleName="whiteText" columnGroupStyleName="whiteText"  '+
    '									 footerRollOverColors="[0x298EBD,0x298EBD]" lockedSeperatorThickness="1" lockedSeperatorColor="0x6f6f6f" >'+
    '          <level childrenField="answers" enableFooters="true" >'+
    '				<columns>'+
    '					<column columnTextColor="0x17365D" id="questionColumn" width="200" columnWidthMode="fixed" headerText="Survey Question" dataField="question" wordWrap="true" enableExpandCollapseIcon="true" paddingLeft="20" expandCollapseIconTop="4" expandCollapseIconLeft="4"/>'+
    '					<column width="150" headerText="Answer" dataField="answerOption"/>'+
    '					<columnGroup headerText="Freshman">'+
    '						<columns>'+
    '							<column dataField="freshmanCount" headerText="Count" footerOperation="sum" footerOperationPrecision="0" textAlign="right"	headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '							<column dataField="freshmanPercent" headerText="Percent"  footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '					<columnGroup headerText="Sophomore">'+
    '						<columns>'+
    '							<column dataField="sophomoreCount" headerText="Count" footerOperation="sum" footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '							<column dataField="sophomorePercent" headerText="Percent"  footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '					<columnGroup headerText="Junior">'+
    '						<columns>'+
    '							<column dataField="juniorCount" headerText="Count" footerOperation="sum" footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right"  paddingRight="5"/>'+
    '							<column dataField="juniorPercent" headerText="Percent"  footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '					<columnGroup headerText="Senior">'+
    '						<columns>'+
    '							<column dataField="seniorCount" headerText="Count" footerOperation="sum" footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '							<column dataField="seniorPercent" headerText="Percent"  footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '					<columnGroup headerText="Total">'+
    '						<columns>'+
    '							<column dataField="totalCount" headerText="Count" footerOperation="sum" footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '							<column dataField="totalPercent" headerText="Percent"  footerOperationPrecision="0" textAlign="right" headerAlign="right" footerAlign="right" paddingRight="5"/>'+
    '						</columns>'+
    '					</columnGroup>'+
    '				</columns>'+
    '			</level>'+
    '	</grid>';