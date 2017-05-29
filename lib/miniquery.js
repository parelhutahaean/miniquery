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

class AjaxWrapper {
  static request(params) {
    var req = new XMLHttpRequest();
    req.addEventListener('load', params.success);
    req.addEventListener('error', params.fail);
    req.open(params.type, params.url);
    req.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

class Miniquery {
  constructor(params) {
    this.params = params;
  }

  select() {
    return SweetSelector.select(this.params);
  }

  hide() {
    DOM.hide(this.params);
  }

  show() {
    DOM.show(this.params);
  }

  addClass(params) {
    DOM.addClass(this.params, params);
  }

  removeClass(params) {
    DOM.removeClass(this.params, params);
  }

  on(myEvent, callback) {
    EventDispatcher.on(this.params, myEvent, callback);
  }

  trigger(myEvent) {
    EventDispatcher.trigger(this.params, myEvent);
  }

  request(object) {
    AjaxWrapper.request(object);
  }

}

const miniquery = (params) => {
  return new Miniquery(params);
}

const $ = (params) => {
  return new Miniquery(params);
}
