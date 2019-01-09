Blockly.Arduino.sds011_setup = function(block) {
  var rx = block.getFieldValue('RX');
  var tx = block.getFieldValue('TX');
  Blockly.Arduino.includes_.sds011 = '#include "SdsDustSensor.h"';
  Blockly.Arduino.definitions_.sds011 = 'SdsDustSensor sds(' + rx + ', ' + tx + ');';
  Blockly.Arduino.userFunctions_.sds011 = `float sds011Read(int type)
{
  PmResult pm = sds.queryPm();
  if (pm.isOk()) {
    if (type == 10)
    {
      return pm.pm10;
    }
    if (type == 25)
    {
      return pm.pm25;
    }
  }
  return 0;
}`;
  Blockly.Arduino.setups_.sds011 = 'sds.begin(); \n  sds.setActiveReportingMode();';

  return '';
};
