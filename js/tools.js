
/**
 * 将p的可枚举属性复制到o中，并返回。
 * 如果o中存在同名属性，则覆盖。
 */
function extend (o, p) {
    for (const prop in p) {
        o[prop] = p;
    }
    return o;
}

/**
 * 将p的可枚举属性复制到o中，并返回。
 * 如果o中存在同名属性，则不变。
 */
function merge(o, p) {
    for (const prop in p) {
        if (o.hasOwnProperty(prop)) {
            continue;
        }
        o[prop] = p[prop];
    }
    return o;
}

/**
 * 删除 o 在 p 中 不存在的属性。
 * 也就是求 o 和 p 的交集。
 */
function restrict(o, p) {
    for (const prop in o) {
        if (!(prop in p)) {
            delete o[prop];
        }
    }
    return o;
}

/**
 * 删除 o 在 p 中 存在的属性。
 */
function subtract(o, p) {
    for (const prop in p) {
        delete o[prop];
    }
    return 0;
}

/**
 * 求o和p的并集，并返回一个新对象。
 * o 和 p 不受影响，如果存在同名属性，则使用 p 的。
 */
function union(o, p) {
    return extend(extend({}, o), p);
}

/**
 * 求o和p的并集，并返回一个新对象。
 * o 和 p 不受影响，如果存在同名属性，则使用 o 的。
 */
function intersection(o, p) {
    return restrict(extend({}, o), p);
}

module.exports = {
    extend,
    merge,
    restrict,
    subtract,
    union,
    intersection,
}
