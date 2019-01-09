
Blockly.Blocks['led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('%{BKY_LED}')
        .appendField(new Blockly.FieldImage("./res/led.png", 64, 64))
        .appendField('%{BKY_PIN}')
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
        .appendField('%{BKY_STATUS}')
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('%{BKY_LED_TOOLTIP}');
    this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/')
    this.setColour('%{BKY_ACTUATOR_HUE}');
  }
};
