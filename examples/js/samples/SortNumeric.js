

    myCompanyNameSpace.sortNumeric_ArrCol = [
        {label:"Company A", state:"NJ", rank:"1.11"},
        {label:"Company B", state:"PA", rank:"11.1"},
        {label:"Company C", state:"CT", rank:"-111"},
        {label:"Company D", state:"NY", rank:"2.34"},
        {label:"Company E", state:"NJ", rank:"22.2"}];

    myCompanyNameSpace.SAMPLE_CONFIGS["SortNumeric"]='<grid editable="true" dataProvider="eval__myCompanyNameSpace.sortNumeric_ArrCol">'+
            '		<columns>'+
            '			<column dataField="label"/>'+
            '			<column dataField="state" />'+
            '			<column dataField="rank" sortNumeric="true" />'+
            '		</columns>'+
            '	</grid>';