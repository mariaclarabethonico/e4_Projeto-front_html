const toElement = (str) => {
  return new DOMParser().parseFromString(str, 'text/html').body.firstChild;
}

export default toElement;