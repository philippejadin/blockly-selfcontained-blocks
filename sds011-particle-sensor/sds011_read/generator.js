

Blockly.Arduino.sds011_read = function(block) {
  var pmtype = block.getFieldValue('pmtype');
  var code = "sds011Read(" + pmtype + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
