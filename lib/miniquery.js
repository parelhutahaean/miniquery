/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(params) {
    var selector = params.trim();
    return document.querySelectorAll(selector);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(params) {
    SweetSelector.select(params).forEach(element => {
      element.style.display = 'none';
    })
  }

  static show(params) {
    SweetSelector.select(params).forEach(element => {
      element.style.display = '';
    })
  }

  static addClass(params1, params2) {
    var className = params2.trim();
    SweetSelector.select(params1).forEach(el => {
      if (el.classList)
        el.classList.add(className);
      else
        el.className += ' ' + className;
    })
  }

  static removeClass(params1, params2) {
    var className = params2.trim();
    SweetSelector.select(params1).forEach(el => {
      if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on(params1, myEvent, callback) {
    SweetSelector.select(params1).forEach(el => {
      el.addEventListener(myEvent, callback, false);
    })
  }

  static trigger(params1, myEvent) {
    var event = new Event(myEvent);
    SweetSelector.select(params1).forEach(el => {
      el.dispatchEvent(event);
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
