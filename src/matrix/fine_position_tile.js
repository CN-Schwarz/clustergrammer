module.exports = function fine_position_tile(params, d){
  var x_pos = params.viz.x_scale(d.pos_x) + 0.5 * params.viz.border_width;
  var y_pos = 0.5 * params.viz.border_width / params.viz.zoom_switch;
  return 'translate(' + x_pos + ',' + y_pos + ')';
};