import { statusObserved, statusError, statusEntered } from "./lazyload.elementStatus";

const dataPrefix = "data-";
const statusDataName = "ll-status";
const timeoutDataName = "ll-timeout";

export const getData = (element, attribute) => {
    return element.getAttribute(dataPrefix + attribute);
};

export const setData = (element, attribute, value) => {
    var attrName = dataPrefix + attribute;
    if (value === null) {
        element.removeAttribute(attrName);
        return;
    }
    element.setAttribute(attrName, value);
};

export const getStatus = (element) => getData(element, statusDataName);

export const setStatus = (element, status) => setData(element, statusDataName, status);

export const resetStatus = (element) => setStatus(element, null);

export const hasAnyStatus = (element) => getStatus(element) !== null;

export const hasStatusToManage = (element) => {
    const status = getStatus(element);
    return status === statusObserved || status === statusEntered;
}

export const hasStatusError = (element) => getStatus(element) === statusError;

export const setTimeoutData = (element, value) => setData(element, timeoutDataName, value);

export const getTimeoutData = (element) => getData(element, timeoutDataName);
