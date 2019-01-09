
Blockly.Blocks['led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldImage("./blocks/grove/Red_LED_s.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
        .appendField("stat")
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('LED');
    this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/')
    this.setColour('%{BKY_ACTUATOR_HUE}');
  }
};
