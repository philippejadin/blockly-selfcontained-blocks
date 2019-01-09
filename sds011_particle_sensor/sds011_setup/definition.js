Blockly.Blocks.sds011_setup = {
  init: function() {
    this.appendDummyInput().appendField('%{BKY_DUST_SENSOR_SETUP}');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('%{BKY_RX_PIN}')
      .appendField(new Blockly.FieldNumber("1"), "RX");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('%{BKY_TX_PIN}')
      .appendField(new Blockly.FieldNumber("2"), "TX");
    this.setInputsInline(false);
    this.setColour('%{BKY_SENSOR_HUE}');
    this.setTooltip('%{BKY_DUST_SENSOR_SETUP_TOOLTIP}');
    this.setHelpUrl('https://github.com/lewapek/sds-dust-sensors-arduino-library');
  }
};
