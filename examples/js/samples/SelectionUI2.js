myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["SelectionUI2"]="http://www.flexicious.com/resources/Ultimate/docs/SelectionUI2.htm";

myCompanyNameSpace.selectedUI2_CreationComplete=function (event){

    grid.validateNow();
    grid.expandAll();

};



myCompanyNameSpace.SAMPLE_CONFIGS["SelectionUI2"]='<grid variableRowHeight="true" editable="true"   id="grid"'+
        '                  titleIcon="http://www.flexicious.com/resources/images/device_red.png" '+
        '                  disabledField="disabled" enableSelectionCascade="true" enableFilters="true" enableMultiColumnSort="true" '+
        '                  enableAutoRefresh="true"  maxAutoAdjustHeight="300" enableDrag="true" '+
        '                  headerVerticalGridLineThickness="0" lockedSeperatorThickness="0"  '+
        '                  enableDynamicLevels="true"  forcePagerRow="true"  '+
        '                  preferencePersistenceKey="selectedUI2" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.selectedUI2_CreationComplete"'+
        '                  enableDefaultDisclosureIcon="false" filterExcludeObjectsWithoutMatchField="true"> '+
        '  <level childrenField="items" hierarchicalNestIndent="25"> '+
        '    <columns> '+
        '      <column type="checkbox" width="300" filterPaddingLeft="20"  headerPaddingLeft="20" excludeFromSettings="false" enableLabelAndCheckBox="true" headerText="Name" paddingRight="15" paddingLeft="20" enableRecursiveSearch="true" dataField="groupName" filterControl="TextInput" sortCaseInsensitive="true" filterOperation="BeginsWith"  enableHierarchicalNestIndent="true" enableExpandCollapseIcon="true" enableQuickView="true" showIconOnRowHover="true"  editable="false"/> '+
        '      <column headerText="Description" width="300" dataField="description" wordWrap="true" enableQuickView="true" paddingRight="10"  filterControl="TextInput" filterOperation="BeginsWith"  showIconOnCellHover="true" enableRecursiveSearch="true"/> '+
        '      <column headerText="Type" dataField="family" enableObjectSelectorItemEditor="true" filterControl="TextInput" filterOperation="BeginsWith" enableRecursiveSearch="true"/> '+
        '      <column headerText="IP Address"  dataField="address" filterControl="TextInput" filterOperation="EndsWith" editorStyleName="editableTextInput" editable="true" enableRecursiveSearch="true"/> '+
        '      <column headerText="Vendor" dataField="vendor" filterControl="TextInput" filterOperation="BeginsWith" enableRecursiveSearch="true"/> '+
        '    </columns> '+
        '  </level> '+
        '  <actions> '+
        '    <action code="edit" /> '+
        '    <action code="delete" /> '+
        '    <action code="separator" /> '+
        '    <action code="acknowledge" name="Acknowledge" tooltip="Click Here to Acknowledge" requiresSingleSelection="true" iconUrl="contextualAcknowledge" disabledIconUrl="contextualAcknowledgeDisabled" /> '+
        '    <action code="separator" /> '+
        '    <action code="addRow" /> '+
        '    <action code="separator" /> '+
        '    <action code="acknowledge" name="Acknowledge" tooltip="Click Here to Acknowledge" requiresSingleSelection="true" iconUrl="contextualAcknowledge" disabledIconUrl="contextualAcknowledgeDisabled" /> '+
        '  </actions> '+

        '</grid> ';