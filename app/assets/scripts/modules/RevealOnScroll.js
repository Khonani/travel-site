import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elem, offset) {
    this.itemsToReveal = elem;
    this.hideInitially();    
    this.offsetAmount = offset;
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetAmount
      });
    });
  }

}

export default RevealOnScroll;
