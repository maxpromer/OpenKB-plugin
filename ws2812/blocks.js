Blockly.Blocks["ws2812i_init"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_INIT_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "field_number",
				"name": "len",
				"value": 0,
				"min": 0,
				"precision": 1
			}, {
				"type": "field_dropdown",
				"name": "mode",
				"options": [
					[ "GRB", "0" ],
					[ "RGB", "1" ]
				]
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_INIT_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_set_brightness"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_SET_BRIGHTNESS_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "brightness",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_SET_BRIGHTNESS_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_set_pixel"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_SET_PIXEL_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "n",
				"check": "Number"
			}, {
				"type": "field_colour",
				"name": "hex",
				"colour": "#ff0000"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_SET_PIXEL_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_set_pixel_rgb"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_SET_PIXEL_RGB_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "n",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "red",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "green",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "blue",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_SET_PIXEL_RGB_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_fill"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_FILL_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "field_colour",
				"name": "hex",
				"colour": "#ff0000"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_FILL_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_fill_rgb"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_FILL_RGB_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "red",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "green",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "blue",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_FILL_RGB_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_show"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_SHOW_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_SHOW_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["ws2812i_clear"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.WS2812_CLEAR_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.WS2812_CLEAR_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};


